import type { Order } from "@/lib/types"

// Mock order data - in production this would come from Supabase
export const mockOrders: Order[] = [
  {
    id: "ORD-2025-001",
    razorpayOrderId: "order_test_123",
    status: "SHIPPED",
    email: "customer@example.com",
    phone: "+919876543210",
    address: {
      name: "John Doe",
      line1: "123 Main Street",
      line2: "Apartment 4B",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
    },
    items: [
      {
        productId: "1",
        name: "Cocoa Jaggery Crunch",
        price: 450,
        quantity: 2,
        weight: 150,
      },
      {
        productId: "2",
        name: "Matcha Muse Bites",
        price: 520,
        quantity: 1,
        weight: 150,
      },
    ],
    totalINR: 1420,
    createdAt: "2025-01-10T10:30:00Z",
  },
]

export const orders = mockOrders

export const mockOrderEvents = [
  {
    id: "evt-001",
    orderId: "ORD-2025-001",
    type: "PLACED",
    createdAt: "2025-01-10T10:30:00Z",
    meta: { message: "Order placed successfully" },
  },
  {
    id: "evt-002",
    orderId: "ORD-2025-001",
    type: "PAID",
    createdAt: "2025-01-10T10:32:00Z",
    meta: { message: "Payment confirmed via Razorpay" },
  },
  {
    id: "evt-003",
    orderId: "ORD-2025-001",
    type: "SHIPPED",
    createdAt: "2025-01-12T14:20:00Z",
    meta: {
      message: "Package shipped via BlueDart",
      trackingNumber: "BD123456789",
    },
  },
]

export async function getOrderByContact(email?: string, phone?: string): Promise<Order | null> {
  // In production, this would query Supabase
  return mockOrders.find((order) => order.email === email || order.phone === phone) || null
}

export async function getOrderEvents(orderId: string) {
  // In production, this would query Supabase
  return mockOrderEvents.filter((event) => event.orderId === orderId)
}
