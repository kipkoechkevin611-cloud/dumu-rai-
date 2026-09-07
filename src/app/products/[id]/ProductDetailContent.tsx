"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle, ShoppingCart, ArrowRight, Truck, Shield, Award } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { type Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const orderNow = () => {
    const message = `
*NEW CEMENT ORDER - RAI CEMENT LIMITED*

📦 *Product:* ${product.name}
💰 *Price:* ${product.price}
📊 *Quantity:* ${quantity} bags

👤 *Customer Details:*
• Please provide your name
• Phone number
• Email address
• Delivery location

📞 *Contact:* +254 746 392 602
    `.trim();

    const whatsappUrl = `https://wa.me/254746392602?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <a href="/products" className="text-text-secondary hover:text-primary transition-colors">
              ← Back to Products
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden bg-white border border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Package className="text-primary" size={28} />
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                  {product.name}
                </h1>
              </div>

              <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8 bg-white p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-text-primary mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-primary" size={20} />
                    <div>
                      <span className="font-semibold text-text-primary">Standard:</span>
                      <span className="text-text-secondary ml-2">EAS 18-1</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-primary" size={20} />
                    <div>
                      <span className="font-semibold text-text-primary">Certification:</span>
                      <span className="text-text-secondary ml-2">ISO Certified</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="text-primary" size={20} />
                    <div>
                      <span className="font-semibold text-text-primary">Delivery:</span>
                      <span className="text-text-secondary ml-2">Nationwide Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Quantity (bags)
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-border rounded-lg flex items-center justify-center hover:bg-border-dark transition-colors text-text-primary font-bold text-xl"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-text-primary w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-border rounded-lg flex items-center justify-center hover:bg-border-dark transition-colors text-text-primary font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={orderNow}
                  className="w-full flex items-center justify-center space-x-2 bg-accent text-navy py-4 rounded-lg font-semibold hover:bg-accent-dark transition-all duration-300"
                >
                  <span>Order Now</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Success Notification Toast */}
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
    </div>
  );
}
