"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-navy/90 to-primary/95" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/HEROES.jpeg')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center justify-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
              <Truck className="text-accent" size={20} />
              <span className="text-accent font-semibold text-sm tracking-wide">Nationwide Delivery Available</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Engineering Kenya&apos;s
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Strongest Foundations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Premium quality cement products for residential, commercial, and infrastructure projects.
            ISO certified and trusted across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="group flex items-center space-x-2 bg-accent text-navy px-8 py-4 rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-accent/25 font-semibold tracking-wide"
            >
              <span className="font-semibold text-lg">Order Cement Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold tracking-wide"
            >
              <span className="font-semibold text-lg">Request Bulk Quote</span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white">2017</div>
              <div className="text-gray-300 text-sm font-medium">Established</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">EAS 18-1</div>
              <div className="text-gray-300 text-sm font-medium">Standards</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">East Africa</div>
              <div className="text-gray-300 text-sm font-medium">Regional Service</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">ISO</div>
              <div className="text-gray-300 text-sm font-medium">Certified</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
