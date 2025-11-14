"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  AlertCircle,
  Check,
  X,
  Package
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  weight: number;
  stock?: number;
  in_stock: boolean;
  image_url?: string;
  created_at: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    category: "activated-almonds",
    price: "",
    weight: "",
    stock: "",
    in_stock: true,
    image_url: "",
  });
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  const fetchProducts = async () => {
    try {
      let query = supabase.from("products").select("*").order("created_at", { ascending: false });

      if (filter === "low-stock") {
        query = query.lt("stock", 10).eq("in_stock", true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const productData = {
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, "-"),
        description: formData.description,
        category: formData.category,
        price: parseFloat(formData.price),
        weight: parseInt(formData.weight),
        stock: formData.stock ? parseInt(formData.stock) : null,
        in_stock: formData.in_stock,
        image_url: formData.image_url || null,
        updated_at: new Date().toISOString(),
      };

      if (editingProduct) {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", editingProduct.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("products").insert([productData]);
        if (error) throw error;
      }

      setIsDialogOpen(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product. Please try again.");
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      slug: product.slug,
      description: product.description || "",
      category: product.category,
      price: product.price.toString(),
      weight: product.weight.toString(),
      stock: product.stock?.toString() || "",
      in_stock: product.in_stock,
      image_url: product.image_url || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  const handleStockToggle = async (product: Product) => {
    try {
      const { error } = await supabase
        .from("products")
        .update({ in_stock: !product.in_stock })
        .eq("id", product.id);

      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error("Error updating stock status:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      category: "activated-almonds",
      price: "",
      weight: "",
      stock: "",
      in_stock: true,
      image_url: "",
    });
    setEditingProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-gold mx-auto mb-4"></div>
          <p className="montserrat text-dark-chocolate/70">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="cormorant-garamond text-4xl sm:text-5xl font-semibold text-dark-chocolate mb-2">
            Products
          </h1>
          <p className="montserrat text-base text-charcoal/70">
            Manage your product catalog
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                resetForm();
                setIsDialogOpen(true);
              }}
              className="montserrat font-medium"
              style={{ backgroundColor: "#2a1914" }}
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-soft-cream">
            <DialogHeader>
              <DialogTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="montserrat text-sm font-medium">
                    Product Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="category" className="montserrat text-sm font-medium">
                    Category *
                  </Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="mt-1 w-full rounded-md border border-royal-gold/20 bg-white px-3 py-2 montserrat text-sm"
                  >
                    <option value="activated-almonds">Activated Almonds</option>
                    <option value="dehydrated-fruits">Dehydrated Fruits</option>
                    <option value="gifting">Gifting</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="description" className="montserrat text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price" className="montserrat text-sm font-medium">
                    Price (₹) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="montserrat text-sm font-medium">
                    Weight (g) *
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="stock" className="montserrat text-sm font-medium">
                    Stock
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="image_url" className="montserrat text-sm font-medium">
                  Image URL
                </Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="mt-1"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="in_stock"
                  checked={formData.in_stock}
                  onCheckedChange={(checked) => setFormData({ ...formData, in_stock: checked })}
                />
                <Label htmlFor="in_stock" className="montserrat text-sm font-medium">
                  In Stock
                </Label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" style={{ backgroundColor: "#2a1914" }}>
                  {editingProduct ? "Update Product" : "Create Product"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/40" />
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 montserrat"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-white/80 backdrop-blur-sm border border-royal-gold/20 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              {product.image_url ? (
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-royal-gold/10 flex items-center justify-center">
                  <Package className="h-16 w-16 text-royal-gold/30" />
                </div>
              )}
              <div className="absolute top-2 right-2">
                <Badge
                  variant={product.in_stock ? "default" : "destructive"}
                  className="montserrat text-xs"
                >
                  {product.in_stock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="montserrat font-semibold text-lg text-dark-chocolate mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="montserrat text-sm text-charcoal/60">Price:</span>
                  <span className="montserrat font-bold text-dark-chocolate">₹{product.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="montserrat text-sm text-charcoal/60">Weight:</span>
                  <span className="montserrat text-sm text-dark-chocolate">{product.weight}g</span>
                </div>
                {product.stock !== null && (
                  <div className="flex justify-between items-center">
                    <span className="montserrat text-sm text-charcoal/60">Stock:</span>
                    <span className={`montserrat text-sm font-medium ${
                      (product.stock || 0) < 10 ? "text-red-600" : "text-dark-chocolate"
                    }`}>
                      {product.stock} units
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="montserrat text-xs text-charcoal/60">Available:</span>
                <button
                  onClick={() => handleStockToggle(product)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    product.in_stock ? "bg-royal-gold" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      product.in_stock ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(product)}
                  className="flex-1 border-royal-gold/30 text-dark-chocolate hover:bg-royal-gold/10"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-charcoal/20 mx-auto mb-4" />
          <p className="montserrat text-lg text-charcoal/60">No products found</p>
        </div>
      )}
    </div>
  );
}

