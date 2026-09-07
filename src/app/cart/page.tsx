"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, ArrowRight, User, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  notes: string;
}

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    notes: "",
  });

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  const handleCheckout = async () => {
    if (!customerDetails.fullName || !customerDetails.phone || !customerDetails.location) {
      alert("Please fill in your name, phone, and location to complete your order.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email via API
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerDetails,
          cartItems: cart,
          total: getTotal(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccessPopup(true);
        clearCart();
        setCustomerDetails({
          fullName: "",
          phone: "",
          email: "",
          location: "",
          notes: "",
        });
      } else {
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error('Failed to send order:', error);
      setShowErrorPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Shopping <span className="text-primary">Cart</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Review your cement order before checkout
            </p>
          </motion.div>

          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <ShoppingBag className="text-text-secondary mx-auto mb-6" size={64} />
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Your cart is empty
              </h2>
              <a
                href="#products"
                className="inline-block bg-accent text-navy px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
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
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6 border border-border"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {item.name}
                      </h3>
                      <p className="text-primary font-semibold mb-4">{item.price}</p>
                      <p className="text-text-secondary text-sm mb-4">
                        Item Total: KES {(parseFloat(item.price.replace("KES ", "")) * item.quantity).toLocaleString()}
                      </p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 bg-border rounded-lg flex items-center justify-center hover:bg-border-dark transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold text-text-primary w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 bg-border rounded-lg flex items-center justify-center hover:bg-border-dark transition-colors"
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
                className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-24 border border-border"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span>KES {getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Delivery</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-text-primary">
                      <span>Total</span>
                      <span>KES {getTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="mb-6 space-y-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
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
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          value={customerDetails.phone}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          placeholder="Email"
                          value={customerDetails.email}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Exact Location *"
                          value={customerDetails.location}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, location: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <textarea
                          placeholder="Additional Notes (Optional)"
                          value={customerDetails.notes}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                          className="w-full pl-4 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          rows={3}
                        />
                      </div>
                    </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent to-accent-light text-navy py-4 rounded-lg font-semibold hover:from-accent-dark hover:to-accent transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Processing...' : 'Order Now'}</span>
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>
                <a
                  href="#products"
                  className="block text-center text-text-secondary hover:text-primary transition-colors mt-4"
                >
                  Continue Shopping
                </a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessPopup(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Order Placed Successfully!</h3>
                <p className="text-text-secondary mb-6">
                  Thank you for your order. Your order has been received and sent to our team. We will contact you shortly to confirm delivery and payment details.
                </p>
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Error Popup */}
      <AnimatePresence>
        {showErrorPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowErrorPopup(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Unable to Place Order</h3>
                <p className="text-text-secondary mb-6">
                  Something went wrong while submitting your order. Please try again.
                </p>
                <button
                  onClick={() => setShowErrorPopup(false)}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
