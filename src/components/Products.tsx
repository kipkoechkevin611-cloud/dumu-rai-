"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "ppc-32.5n",
    name: "DUMU 32.5N",
    description: "Portland Pozzolana Cement ideal for general construction, plastering, and masonry work. Enhanced durability and workability.",
    price: "KES 684",
    image: "/assets/32.4N.jpeg",
    features: ["High durability", "Excellent workability", "Cost-effective", "Eco-friendly"],
  },
  {
    id: "plc-42.5n",
    name: "DUMU ULTRA 42.5",
    description: "Portland Limestone Cement for structural applications. Perfect for foundations, columns, and load-bearing structures.",
    price: "KES 788.50",
    image: "/assets/42.5N.jpeg",
    features: ["High strength", "Structural grade", "Superior bonding", "Long-lasting"],
  },
  {
    id: "opc-42.5n",
    name: "DUMU ULTRA PLUS 42.5",
    description: "Ordinary Portland Cement premium grade for high-strength applications. Ideal for bridges, dams, and heavy infrastructure.",
    price: "KES 864.50",
    image: "/assets/42.5N ULTRA PLUS.jpeg",
    features: ["Premium quality", "Maximum strength", "Fast setting", "Weather resistant"],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 bg-cement-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cement-900 mb-4">
            Our Premium <span className="text-gold-600">Cement Products</span>
          </h2>
          <p className="text-xl text-cement-600 max-w-3xl mx-auto">
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-2 rounded-full font-semibold">
                  {product.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Package className="text-gold-500" size={24} />
                  <h3 className="text-2xl font-bold text-cement-900">{product.name}</h3>
                </div>

                <p className="text-cement-600 mb-4">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-cement-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
                  >
                    ORDER NOW
                  </button>
                  <a
                    href="/cart"
                    className="w-full flex items-center justify-center space-x-2 bg-cement-900 text-white py-3 rounded-lg font-semibold hover:bg-cement-800 transition-all duration-300"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Order Modal */}
      {selectedProduct && (
        <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}

function OrderModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    quantity: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
*NEW CEMENT ORDER - RAI CEMENT LIMITED*

📦 *Product:* ${product.name}
💰 *Price:* ${product.price}

👤 *Customer Details:*
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Location: ${formData.location}
• Quantity: ${formData.quantity}

📞 *Contact:* +254 740 272 542
    `.trim();

    const whatsappUrl = `https://wa.me/254740272542?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-cement-900">Order {product.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-cement-900 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-cement-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cement-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
              placeholder="e.g., +254 7XX XXX XXX"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cement-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cement-900 mb-2">
              Exact Location *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
              placeholder="Enter your delivery location"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cement-900 mb-2">
              Quantity (bags/tons) *
            </label>
            <input
              type="text"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
              placeholder="e.g., 50 bags, 10 tons"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
            >
              Order Now
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
