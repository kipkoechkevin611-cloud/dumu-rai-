"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Package, CheckCircle, ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { products, type Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

export default function Products() {
  const { cart, addToCart, updateQuantity, removeFromCart, getTotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setIsCartOpen(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Cement You Can <span className="text-primary">Build On</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            ISO-certified cement products manufactured to international standards for superior quality and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-navy px-4 py-2 rounded-lg font-semibold shadow-md">
                  {product.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Package className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-text-primary">{product.name}</h3>
                </div>

                <p className="text-text-secondary mb-2 leading-relaxed">{product.description}</p>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <a
                  href={`/products/${product.id}`}
                  className="block w-full flex items-center justify-center space-x-2 bg-background text-primary py-3 rounded-lg font-semibold hover:bg-border transition-all duration-300 border border-border mt-3"
                >
                  <span>View More Details</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-text-primary">Shopping Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-cement-900 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="text-cement-300 mx-auto mb-4" size={48} />
                    <p className="text-text-secondary">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-text-primary">{item.name}</h3>
                            <p className="text-primary font-semibold">{item.price}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-border rounded flex items-center justify-center hover:bg-border-dark transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center font-semibold text-text-primary">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-border rounded flex items-center justify-center hover:bg-border-dark transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex justify-between text-xl font-bold text-text-primary">
                        <span>Total</span>
                        <span>KES {getTotal().toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href="/cart"
                        onClick={() => setIsCartOpen(false)}
                        className="block w-full bg-gradient-to-r from-accent to-accent-light text-navy py-3 rounded-lg font-semibold hover:from-accent-dark hover:to-accent transition-all text-center"
                      >
                        View Full Cart
                      </a>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="w-full bg-background text-text-primary py-3 rounded-lg font-semibold hover:bg-border transition-all border border-border"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Product added to cart</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

