"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={256}
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

                <p className="text-cement-600 mb-2">{product.description}</p>
                <p className="text-2xl font-bold text-gold-600 mb-4">{product.price}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-cement-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/cart"
                  className="w-full flex items-center justify-center space-x-2 bg-cement-900 text-white py-3 rounded-lg font-semibold hover:bg-cement-800 transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

