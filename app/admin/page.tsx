"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  Truck,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardStats {
  newOrders: number;
  lowStockProducts: number;
  todaySales: number;
  pendingShipments: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    newOrders: 0,
    lowStockProducts: 0,
    todaySales: 0,
    pendingShipments: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [lowStockItems, setLowStockItems] = useState<any[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch new orders (status = 'pending' or 'processing')
      const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .in('status', ['pending', 'processing']);

      if (ordersError) throw ordersError;

      // Fetch products with low stock (assuming stock field exists)
      const { data: products, error: productsError } = await supabase
        .from('products')
        .select('*')
        .lt('stock', 10)
        .eq('in_stock', true);

      if (productsError) throw productsError;

      // Calculate today's sales
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const { data: todayOrders, error: salesError } = await supabase
        .from('orders')
        .select('total_amount')
        .eq('status', 'delivered')
        .gte('created_at', today.toISOString());

      if (salesError) throw salesError;

      // Fetch pending shipments
      const { data: shipments, error: shipmentsError } = await supabase
        .from('orders')
        .select('*')
        .eq('status', 'shipped');

      if (shipmentsError) throw shipmentsError;

      const todaySales = todayOrders?.reduce((sum, order) => sum + (order.total_amount || 0), 0) || 0;

      setStats({
        newOrders: orders?.length || 0,
        lowStockProducts: products?.length || 0,
        todaySales: todaySales,
        pendingShipments: shipments?.length || 0,
      });

      setLowStockItems(products?.slice(0, 5) || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: "New Orders",
      value: stats.newOrders,
      icon: ShoppingCart,
      color: "text-royal-gold",
      bgColor: "bg-royal-gold/10",
      borderColor: "border-royal-gold/30",
      href: "/admin/orders?filter=new",
    },
    {
      title: "Low Stock Alerts",
      value: stats.lowStockProducts,
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      href: "/admin/products?filter=low-stock",
    },
    {
      title: "Today's Sales",
      value: `₹${stats.todaySales.toLocaleString()}`,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      href: "/admin/orders",
    },
    {
      title: "Pending Shipments",
      value: stats.pendingShipments,
      icon: Truck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      href: "/admin/orders?filter=shipped",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-gold mx-auto mb-4"></div>
          <p className="montserrat text-dark-chocolate/70">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="cormorant-garamond text-4xl sm:text-5xl font-semibold text-dark-chocolate mb-2">
          Dashboard
        </h1>
        <p className="montserrat text-base text-charcoal/70">
          Overview of your e-commerce operations
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Link key={index} href={card.href}>
              <Card className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${card.bgColor}`}>
                      <Icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="montserrat text-sm font-medium text-charcoal/60 uppercase tracking-wider">
                      {card.title}
                    </p>
                    <p className={`cormorant-garamond text-3xl font-bold ${card.color}`}>
                      {card.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems.length > 0 && (
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-red-200">
          <CardHeader>
            <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate flex items-center space-x-2">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <span>Low Stock Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lowStockItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
                >
                  <div>
                    <p className="montserrat font-medium text-dark-chocolate">
                      {product.name}
                    </p>
                    <p className="montserrat text-sm text-charcoal/60">
                      Stock: {product.stock || 0} units
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-red-300 text-red-600 hover:bg-red-100"
                  >
                    <Link href={`/admin/products?edit=${product.id}`}>
                      Update Stock
                    </Link>
                  </Button>
                </div>
              ))}
              {stats.lowStockProducts > 5 && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-royal-gold/30 text-dark-chocolate hover:bg-royal-gold/10"
                >
                  <Link href="/admin/products?filter=low-stock">
                    View All Low Stock Items
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card className="bg-white/80 backdrop-blur-sm border border-royal-gold/30">
        <CardHeader>
          <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/admin/products/new"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-md text-sm font-medium montserrat text-white hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: "#2a1914" }}
            >
              <Package className="mr-2 h-5 w-5" />
              Add New Product
            </Link>
            <Link
              href="/admin/orders"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-md text-sm font-medium border border-royal-gold/30 text-dark-chocolate hover:bg-royal-gold/10 transition-all duration-300 montserrat"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              View All Orders
            </Link>
            <Link
              href="/admin/products"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-md text-sm font-medium border border-royal-gold/30 text-dark-chocolate hover:bg-royal-gold/10 transition-all duration-300 montserrat"
            >
              <Package className="mr-2 h-5 w-5" />
              Manage Products
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

