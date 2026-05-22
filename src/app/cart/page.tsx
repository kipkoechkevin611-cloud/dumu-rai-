"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Trash2, ArrowRight, X, User, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  quantity: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "ppc-32.5n",
      name: "DUMU 32.5N",
      price: "KES 684",
      image: "/assets/32.4N.jpeg",
      quantity: 1,
    },
  ]);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    quantity: "",
  });

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("KES ", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    if (!customerDetails.fullName || !customerDetails.phone || !customerDetails.location || !customerDetails.quantity) {
      alert("Please fill in your name, phone, location, and quantity to complete your order.");
      return;
    }

    const message = `
*SHOPPING CART - RAI CEMENT LIMITED*

� *Order Summary:*
${cartItems.map((item) => `• ${item.name} x${item.quantity} - ${item.price}`).join("\n")}

� *Customer Details:*
• Name: ${customerDetails.fullName}
• Phone: ${customerDetails.phone}
• Email: ${customerDetails.email || "Not provided"}
• Location: ${customerDetails.location}
• Quantity: ${customerDetails.quantity}

💰 *Total: KES ${getTotal().toLocaleString()}

📍 *Location: Awasi, Kericho-Kisumu Highway, Nyanza Region*
📞 *Contact:* +254 740 272 542
    `.trim();

    const whatsappUrl = `https://wa.me/254740272542?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-cement-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cement-900 mb-4">
              Shopping <span className="text-gold-600">Cart</span>
            </h1>
            <p className="text-xl text-cement-600">
              Review your cement order before checkout
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <ShoppingBag className="text-cement-300 mx-auto mb-6" size={64} />
              <h2 className="text-2xl font-bold text-cement-900 mb-4">
                Your cart is empty
              </h2>
              <a
                href="#products"
                className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                Browse Products
              </a>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-4"
              >
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-cement-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gold-600 font-semibold mb-4">{item.price}</p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 bg-cement-100 rounded-lg flex items-center justify-center hover:bg-cement-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold text-cement-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 bg-cement-100 rounded-lg flex items-center justify-center hover:bg-cement-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={24} />
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-24"
              >
                <h2 className="text-2xl font-bold text-cement-900 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-cement-600">
                    <span>Subtotal</span>
                    <span>KES {getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-cement-600">
                    <span>Delivery</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-cement-900">
                      <span>Total</span>
                      <span>KES {getTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="mb-6 space-y-4">
                  <h3 className="text-lg font-semibold text-cement-900 mb-4">
                    Your Details
                  </h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={customerDetails.fullName}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={customerDetails.phone}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        placeholder="Email *"
                        value={customerDetails.email}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Exact Location *"
                        value={customerDetails.location}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, location: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Quantity (bags/tons) *"
                        value={customerDetails.quantity}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, quantity: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Order Now</span>
                  <ArrowRight size={20} />
                </button>
                <a
                  href="#products"
                  className="block text-center text-cement-600 hover:text-gold-600 transition-colors mt-4"
                >
                  Continue Shopping
                </a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
