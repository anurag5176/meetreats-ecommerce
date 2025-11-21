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
  short_description?: string;
  category: string;
  price: number;
  weight: number;
  stock?: number;
  in_stock: boolean;
  image_url?: string;
  ingredients?: string; // JSON string array
  process_notes?: string; // JSON string array
  storage?: string;
  allergens?: string; // JSON string array
  nutrition_pdf?: string;
  badges?: string; // JSON string array
  bullets?: string; // JSON string array
  is_provisional_nutrition?: boolean;
  featured?: boolean;
  created_at: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [imageError, setImageError] = useState(false);
  const [useEmbedCode, setUseEmbedCode] = useState(false);
  const [embedCode, setEmbedCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    short_description: "",
    category: "activated-almonds",
    price: "",
    weight: "",
    stock: "",
    in_stock: true,
    image_url: "",
    ingredients: "",
    process_notes: "",
    storage: "",
    allergens: "",
    nutrition_pdf: "",
    badges: "",
    bullets: "",
    is_provisional_nutrition: false,
    featured: false,
  });
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  // Function to extract image URL from embed code
  const extractImageUrlFromEmbed = (code: string): string | null => {
    // Try to find img src in HTML
    const imgMatch = code.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }

    // Try to find URL in iframe src (for Google Drive, etc.)
    const iframeMatch = code.match(/<iframe[^>]+src=["']([^"']+)["']/i);
    if (iframeMatch && iframeMatch[1]) {
      // For Google Drive, convert to direct image link
      const driveMatch = iframeMatch[1].match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (driveMatch) {
        return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
      }
    }

    // Try to find direct URL in the code
    const urlMatch = code.match(/(https?:\/\/[^\s<>"']+\.(jpg|jpeg|png|gif|webp|svg))/i);
    if (urlMatch && urlMatch[1]) {
      return urlMatch[1];
    }

    return null;
  };

  const handleEmbedCodeChange = (code: string) => {
    setEmbedCode(code);
    const extractedUrl = extractImageUrlFromEmbed(code);
    if (extractedUrl) {
      setFormData({ ...formData, image_url: extractedUrl });
      setImageError(false);
    }
  };

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
      // Helper function to convert comma-separated string to JSON array
      const stringToJsonArray = (str: string): string | null => {
        if (!str || str.trim() === "") return null;
        const items = str.split(",").map((item) => item.trim()).filter((item) => item.length > 0);
        return items.length > 0 ? JSON.stringify(items) : null;
      };

      const productData = {
        name: formData.name,
        slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, "-"),
        description: formData.description,
        short_description: formData.short_description || null,
        category: formData.category,
        price: parseFloat(formData.price),
        weight: parseInt(formData.weight),
        stock: formData.stock ? parseInt(formData.stock) : null,
        in_stock: formData.in_stock,
        image_url: formData.image_url || null,
        ingredients: stringToJsonArray(formData.ingredients),
        process_notes: stringToJsonArray(formData.process_notes),
        storage: formData.storage || null,
        allergens: stringToJsonArray(formData.allergens),
        nutrition_pdf: formData.nutrition_pdf || null,
        badges: stringToJsonArray(formData.badges),
        bullets: stringToJsonArray(formData.bullets),
        is_provisional_nutrition: formData.is_provisional_nutrition,
        featured: formData.featured,
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

  // Helper function to convert JSON array to comma-separated string
  const jsonArrayToString = (jsonStr: string | null | undefined): string => {
    if (!jsonStr) return "";
    try {
      const arr = JSON.parse(jsonStr);
      return Array.isArray(arr) ? arr.join(", ") : "";
    } catch {
      return "";
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      slug: product.slug,
      description: product.description || "",
      short_description: product.short_description || "",
      category: product.category,
      price: product.price.toString(),
      weight: product.weight.toString(),
      stock: product.stock?.toString() || "",
      in_stock: product.in_stock,
      image_url: product.image_url || "",
      ingredients: jsonArrayToString(product.ingredients),
      process_notes: jsonArrayToString(product.process_notes),
      storage: product.storage || "",
      allergens: jsonArrayToString(product.allergens),
      nutrition_pdf: product.nutrition_pdf || "",
      badges: jsonArrayToString(product.badges),
      bullets: jsonArrayToString(product.bullets),
      is_provisional_nutrition: product.is_provisional_nutrition || false,
      featured: product.featured || false,
    });
    setImageError(false);
    setUseEmbedCode(false);
    setEmbedCode("");
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
      const newStockStatus = !product.in_stock;
      
      // Optimistically update UI
      setProducts(products.map(p => 
        p.id === product.id ? { ...p, in_stock: newStockStatus } : p
      ));

      const { error } = await supabase
        .from("products")
        .update({ in_stock: newStockStatus })
        .eq("id", product.id);

      if (error) {
        // Revert on error
        setProducts(products.map(p => 
          p.id === product.id ? { ...p, in_stock: product.in_stock } : p
        ));
        throw error;
      }
      
      // Refresh to ensure consistency
      fetchProducts();
    } catch (error) {
      console.error("Error updating stock status:", error);
      alert("Failed to update stock status. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      short_description: "",
      category: "activated-almonds",
      price: "",
      weight: "",
      stock: "",
      in_stock: true,
      image_url: "",
      ingredients: "",
      process_notes: "",
      storage: "",
      allergens: "",
      nutrition_pdf: "",
      badges: "",
      bullets: "",
      is_provisional_nutrition: false,
      featured: false,
    });
    setEditingProduct(null);
    setImageError(false);
    setUseEmbedCode(false);
    setEmbedCode("");
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
          <DialogContent className="max-w-2xl max-h-[95vh] overflow-y-auto bg-soft-cream mx-4 my-4">
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
                <Label htmlFor="short_description" className="montserrat text-sm font-medium">
                  Short Description (Tagline)
                </Label>
                <Input
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                  className="mt-1"
                  placeholder="e.g., A little cloud. A lot of cocoa."
                />
                <p className="montserrat text-xs text-charcoal/60 mt-1">
                  This appears as the clickable tagline on the product page
                </p>
              </div>
              <div>
                <Label htmlFor="description" className="montserrat text-sm font-medium">
                  Full Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1"
                  rows={3}
                  placeholder="Full product description that appears when expanded"
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
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="image_url" className="montserrat text-sm font-medium">
                    Product Image {useEmbedCode ? "Embed Code" : "URL"} *
                  </Label>
                  <button
                    type="button"
                    onClick={() => {
                      setUseEmbedCode(!useEmbedCode);
                      setEmbedCode("");
                      setImageError(false);
                    }}
                    className="montserrat text-xs text-royal-gold hover:text-dark-chocolate underline transition-colors"
                  >
                    {useEmbedCode ? "Switch to URL" : "Have embed code?"}
                  </button>
                </div>
                
                {useEmbedCode ? (
                  <div className="space-y-2">
                    <Textarea
                      id="embed_code"
                      value={embedCode}
                      onChange={(e) => handleEmbedCodeChange(e.target.value)}
                      className="mt-1 font-mono text-xs"
                      placeholder='Paste embed code here, e.g., <img src="https://example.com/image.jpg"> or <iframe src="..."></iframe>'
                      rows={4}
                      required
                    />
                    {formData.image_url && (
                      <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
                        <p className="montserrat text-green-700">
                          ✓ Extracted URL: <span className="font-mono text-xs break-all">{formData.image_url}</span>
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <Input
                    id="image_url"
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => {
                      setFormData({ ...formData, image_url: e.target.value });
                      setImageError(false); // Reset error when URL changes
                    }}
                    className="mt-1"
                    placeholder="https://example.com/your-image.jpg"
                    required
                  />
                )}

                <div className="mt-2 p-3 bg-royal-gold/5 border border-royal-gold/20 rounded-lg">
                  <p className="montserrat text-xs text-charcoal/70 mb-2">
                    <strong className="text-dark-chocolate">
                      {useEmbedCode ? "What is an Embed Code?" : "What is an Image URL?"}
                    </strong>
                  </p>
                  {useEmbedCode ? (
                    <div className="space-y-2">
                      <p className="montserrat text-xs text-charcoal/60 leading-relaxed">
                        An embed code is HTML code that contains an image. We'll automatically extract the image URL for you.
                      </p>
                      <p className="montserrat text-xs text-charcoal/60 font-semibold">Common embed code formats:</p>
                      <ul className="montserrat text-xs text-charcoal/60 space-y-1 mb-2 list-disc list-inside">
                        <li><code className="bg-white/50 px-1 rounded">&lt;img src="URL"&gt;</code> - Direct image tag</li>
                        <li><code className="bg-white/50 px-1 rounded">&lt;iframe src="URL"&gt;</code> - Google Drive, Dropbox, etc.</li>
                        <li>Any HTML code containing an image URL</li>
                      </ul>
                      <p className="montserrat text-xs text-charcoal/60 italic">
                        💡 Just paste your embed code and we'll find the image URL automatically!
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="montserrat text-xs text-charcoal/60 mb-3 leading-relaxed">
                        An image URL is a web address (link) that points to an image file hosted online. 
                        You can get image URLs from:
                      </p>
                      <ul className="montserrat text-xs text-charcoal/60 space-y-1 mb-3 list-disc list-inside">
                        <li>Your website (right-click image → "Copy image address")</li>
                        <li>Image hosting services (Imgur, Cloudinary, etc.)</li>
                        <li>Your existing product images</li>
                        <li>Google Drive (make sure sharing is enabled)</li>
                      </ul>
                      <p className="montserrat text-xs text-charcoal/60 italic">
                        💡 Tip: The URL should end with .jpg, .png, .webp, etc. and be publicly accessible.
                      </p>
                    </>
                  )}
                </div>
                {/* Image Preview */}
                {formData.image_url && (
                  <div className="mt-3">
                    <p className="montserrat text-xs text-charcoal/70 mb-2">Preview:</p>
                    <div className="relative w-full h-48 border border-royal-gold/20 rounded-lg overflow-hidden bg-royal-gold/5">
                      {!imageError && formData.image_url ? (
                        <img
                          src={formData.image_url}
                          alt="Product preview"
                          className="w-full h-full object-contain"
                          onError={() => setImageError(true)}
                          onLoad={() => setImageError(false)}
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-center p-4">
                          <div>
                            <p className="montserrat text-sm text-red-600 mb-2">❌ Image failed to load</p>
                            <p className="montserrat text-xs text-charcoal/60">
                              Please check if the URL is correct and publicly accessible
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4 border-t pt-4">
                <h3 className="montserrat text-base font-semibold text-dark-chocolate">Product Details</h3>
                
                <div>
                  <Label htmlFor="ingredients" className="montserrat text-sm font-medium">
                    Ingredients (comma-separated)
                  </Label>
                  <Textarea
                    id="ingredients"
                    value={formData.ingredients}
                    onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                    className="mt-1"
                    rows={3}
                    placeholder="e.g., Activated Almonds, Organic Jaggery, Premium Cocoa Powder, Sea Salt"
                  />
                  <p className="montserrat text-xs text-charcoal/60 mt-1">
                    Separate multiple ingredients with commas
                  </p>
                </div>

                <div>
                  <Label htmlFor="process_notes" className="montserrat text-sm font-medium">
                    Our Process (comma-separated)
                  </Label>
                  <Textarea
                    id="process_notes"
                    value={formData.process_notes}
                    onChange={(e) => setFormData({ ...formData, process_notes: e.target.value })}
                    className="mt-1"
                    rows={3}
                    placeholder="e.g., Soaked for 12 hours, Dehydrated at 65°C, Nitrogen flush sealed"
                  />
                  <p className="montserrat text-xs text-charcoal/60 mt-1">
                    Separate multiple process steps with commas
                  </p>
                </div>

                <div>
                  <Label htmlFor="storage" className="montserrat text-sm font-medium">
                    Storage & Shelf Life
                  </Label>
                  <Textarea
                    id="storage"
                    value={formData.storage}
                    onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
                    className="mt-1"
                    rows={2}
                    placeholder="e.g., Store in a cool, dry place. Consume within 6 months of opening."
                  />
                </div>

                <div>
                  <Label htmlFor="allergens" className="montserrat text-sm font-medium">
                    Allergens (comma-separated)
                  </Label>
                  <Input
                    id="allergens"
                    value={formData.allergens}
                    onChange={(e) => setFormData({ ...formData, allergens: e.target.value })}
                    className="mt-1"
                    placeholder="e.g., Tree Nuts, Gluten"
                  />
                  <p className="montserrat text-xs text-charcoal/60 mt-1">
                    Separate multiple allergens with commas. Leave empty if no allergens.
                  </p>
                </div>

                <div>
                  <Label htmlFor="nutrition_pdf" className="montserrat text-sm font-medium">
                    Nutrition PDF URL
                  </Label>
                  <Input
                    id="nutrition_pdf"
                    type="url"
                    value={formData.nutrition_pdf}
                    onChange={(e) => setFormData({ ...formData, nutrition_pdf: e.target.value })}
                    className="mt-1"
                    placeholder="https://example.com/nutrition-report.pdf"
                  />
                  <p className="montserrat text-xs text-charcoal/60 mt-1">
                    Link to the nutrition information PDF file
                  </p>
                </div>

                <div>
                  <Label htmlFor="badges" className="montserrat text-sm font-medium">
                    Badges (comma-separated)
                  </Label>
                  <Input
                    id="badges"
                    value={formData.badges}
                    onChange={(e) => setFormData({ ...formData, badges: e.target.value })}
                    className="mt-1"
                    placeholder="e.g., Activated Almonds, Dark Chocolate Coated"
                  />
                  <p className="montserrat text-xs text-charcoal/60 mt-1">
                    Badges displayed on the product card and detail page
                  </p>
                </div>

                <div>
                  <Label htmlFor="bullets" className="montserrat text-sm font-medium">
                    Bullet Points (comma-separated)
                  </Label>
                  <Textarea
                    id="bullets"
                    value={formData.bullets}
                    onChange={(e) => setFormData({ ...formData, bullets: e.target.value })}
                    className="mt-1"
                    rows={3}
                    placeholder="e.g., Activated almonds for better digestibility, Natural jaggery sweetening, Premium cocoa coating"
                  />
                  <p className="montserrat text-xs text-charcoal/60 mt-1">
                    Key selling points displayed as bullet points
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="in_stock"
                    checked={formData.in_stock}
                    onCheckedChange={(checked) => setFormData({ ...formData, in_stock: checked })}
                    className="data-[state=checked]:bg-[#000000] data-[state=unchecked]:bg-charcoal/30 [&>span]:bg-white"
                  />
                  <Label htmlFor="in_stock" className="montserrat text-sm font-medium">
                    In Stock
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                    className="data-[state=checked]:bg-[#000000] data-[state=unchecked]:bg-charcoal/30 [&>span]:bg-white"
                  />
                  <Label htmlFor="featured" className="montserrat text-sm font-medium">
                    Featured Product
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_provisional_nutrition"
                    checked={formData.is_provisional_nutrition}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_provisional_nutrition: checked })}
                    className="data-[state=checked]:bg-[#000000] data-[state=unchecked]:bg-charcoal/30 [&>span]:bg-white"
                  />
                  <Label htmlFor="is_provisional_nutrition" className="montserrat text-sm font-medium">
                    Provisional Nutrition Information
                  </Label>
                </div>
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
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-royal-gold/10">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`w-full h-full flex items-center justify-center ${product.image_url ? 'hidden' : ''}`}>
                <Package className="h-16 w-16 text-royal-gold/30" />
              </div>
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
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                    product.in_stock ? "bg-royal-gold" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white transition-all duration-300 ease-in-out ${
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

