"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { 
  ShoppingCart, 
  Search,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Order {
  id: number;
  order_id: string;
  customer_info: any;
  items: any[];
  total_amount: number;
  status: string;
  payment_info?: any;
  created_at: string;
  updated_at: string;
}

const statusOptions = [
  { value: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { value: "processing", label: "Processing", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { value: "shipped", label: "Shipped", color: "bg-purple-100 text-purple-800 border-purple-200" },
  { value: "delivered", label: "Delivered", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-100 text-red-800 border-red-200" },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  useEffect(() => {
    fetchOrders();
  }, [filter]);

  const fetchOrders = async () => {
    try {
      let query = supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (filter === "new") {
        query = query.in("status", ["pending", "processing"]);
      } else if (filter === "shipped") {
        query = query.eq("status", "shipped");
      }

      const { data, error } = await query;

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (orderId: number, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ 
          status: newStatus,
          updated_at: new Date().toISOString()
        })
        .eq("id", orderId);

      if (error) throw error;

      // Refresh orders list
      fetchOrders();

      // If order was just shipped, you could trigger an email here
      if (newStatus === "shipped") {
        // TODO: Send shipping notification email
        console.log("Order shipped - email notification should be sent");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status. Please try again.");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "processing":
        return <ShoppingCart className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusOption = statusOptions.find((opt) => opt.value === status) || statusOptions[0];
    return (
      <Badge className={`montserrat text-xs border ${statusOption.color}`}>
        {statusOption.label}
      </Badge>
    );
  };

  const filteredOrders = orders.filter((order) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      order.order_id.toLowerCase().includes(searchLower) ||
      order.customer_info?.name?.toLowerCase().includes(searchLower) ||
      order.customer_info?.email?.toLowerCase().includes(searchLower)
    );
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-gold mx-auto mb-4"></div>
          <p className="montserrat text-dark-chocolate/70">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="cormorant-garamond text-4xl sm:text-5xl font-semibold text-dark-chocolate mb-2">
          Orders
        </h1>
        <p className="montserrat text-base text-charcoal/70">
          Manage and track customer orders
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/40" />
        <Input
          placeholder="Search by order ID, customer name, or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 montserrat"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="bg-white/80 backdrop-blur-sm border border-royal-gold/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="montserrat font-semibold text-lg text-dark-chocolate">
                      Order #{order.order_id}
                    </h3>
                    {getStatusBadge(order.status)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="montserrat text-charcoal/60">Customer: </span>
                      <span className="montserrat font-medium text-dark-chocolate">
                        {order.customer_info?.name || "N/A"}
                      </span>
                    </div>
                    <div>
                      <span className="montserrat text-charcoal/60">Email: </span>
                      <span className="montserrat text-dark-chocolate">
                        {order.customer_info?.email || "N/A"}
                      </span>
                    </div>
                    <div>
                      <span className="montserrat text-charcoal/60">Date: </span>
                      <span className="montserrat text-dark-chocolate">
                        {new Date(order.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span className="montserrat text-charcoal/60">Items: </span>
                      <span className="montserrat font-medium text-dark-chocolate">
                        {order.items?.length || 0} items
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="montserrat text-charcoal/60">Total: </span>
                    <span className="cormorant-garamond text-2xl font-bold text-dark-chocolate">
                      ₹{order.total_amount?.toLocaleString() || "0"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[300px]">
                  <Select
                    value={order.status}
                    onValueChange={(value) => handleStatusUpdate(order.id, value)}
                  >
                    <SelectTrigger className="montserrat border-royal-gold/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedOrder(order);
                      setIsDetailDialogOpen(true);
                    }}
                    className="border-royal-gold/30 text-dark-chocolate hover:bg-royal-gold/10"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <ShoppingCart className="h-16 w-16 text-charcoal/20 mx-auto mb-4" />
          <p className="montserrat text-lg text-charcoal/60">No orders found</p>
        </div>
      )}

      {/* Order Details Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-soft-cream">
          <DialogHeader>
            <DialogTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
              Order Details
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6 mt-4">
              {/* Order Info */}
              <div className="bg-white/80 rounded-lg p-4 border border-royal-gold/20">
                <h3 className="montserrat font-semibold text-lg text-dark-chocolate mb-3">
                  Order Information
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="montserrat text-charcoal/60">Order ID: </span>
                    <span className="montserrat font-medium text-dark-chocolate">
                      {selectedOrder.order_id}
                    </span>
                  </div>
                  <div>
                    <span className="montserrat text-charcoal/60">Status: </span>
                    {getStatusBadge(selectedOrder.status)}
                  </div>
                  <div>
                    <span className="montserrat text-charcoal/60">Date: </span>
                    <span className="montserrat text-dark-chocolate">
                      {new Date(selectedOrder.created_at).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="montserrat text-charcoal/60">Total: </span>
                    <span className="cormorant-garamond text-xl font-bold text-dark-chocolate">
                      ₹{selectedOrder.total_amount?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="bg-white/80 rounded-lg p-4 border border-royal-gold/20">
                <h3 className="montserrat font-semibold text-lg text-dark-chocolate mb-3">
                  Customer Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="montserrat text-charcoal/60">Name: </span>
                    <span className="montserrat font-medium text-dark-chocolate">
                      {selectedOrder.customer_info?.name}
                    </span>
                  </div>
                  <div>
                    <span className="montserrat text-charcoal/60">Email: </span>
                    <span className="montserrat text-dark-chocolate">
                      {selectedOrder.customer_info?.email}
                    </span>
                  </div>
                  <div>
                    <span className="montserrat text-charcoal/60">Phone: </span>
                    <span className="montserrat text-dark-chocolate">
                      {selectedOrder.customer_info?.phone || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              {selectedOrder.customer_info?.address && (
                <div className="bg-white/80 rounded-lg p-4 border border-royal-gold/20">
                  <h3 className="montserrat font-semibold text-lg text-dark-chocolate mb-3">
                    Shipping Address
                  </h3>
                  <div className="montserrat text-sm text-dark-chocolate space-y-1">
                    <p>{selectedOrder.customer_info.address.line1}</p>
                    {selectedOrder.customer_info.address.line2 && (
                      <p>{selectedOrder.customer_info.address.line2}</p>
                    )}
                    <p>
                      {selectedOrder.customer_info.address.city}, {selectedOrder.customer_info.address.state} - {selectedOrder.customer_info.address.pincode}
                    </p>
                  </div>
                </div>
              )}

              {/* Order Items */}
              <div className="bg-white/80 rounded-lg p-4 border border-royal-gold/20">
                <h3 className="montserrat font-semibold text-lg text-dark-chocolate mb-3">
                  Order Items
                </h3>
                <div className="space-y-3">
                  {selectedOrder.items?.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-royal-gold/5 rounded-lg">
                      <div>
                        <p className="montserrat font-medium text-dark-chocolate">
                          {item.name}
                        </p>
                        <p className="montserrat text-sm text-charcoal/60">
                          Quantity: {item.quantity} × ₹{item.price}
                        </p>
                      </div>
                      <p className="montserrat font-semibold text-dark-chocolate">
                        ₹{(item.quantity * item.price).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Info */}
              {selectedOrder.payment_info && (
                <div className="bg-white/80 rounded-lg p-4 border border-royal-gold/20">
                  <h3 className="montserrat font-semibold text-lg text-dark-chocolate mb-3">
                    Payment Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="montserrat text-charcoal/60">Payment ID: </span>
                      <span className="montserrat text-dark-chocolate">
                        {selectedOrder.payment_info.payment_id || "N/A"}
                      </span>
                    </div>
                    <div>
                      <span className="montserrat text-charcoal/60">Status: </span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        {selectedOrder.payment_info.status || "Paid"}
                      </Badge>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

