"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-white/95 backdrop-blur-md shadow-lg"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <img
              src="/assets/logo.jpeg"
              alt="Rai Cement Limited Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-cement-900">RAI CEMENT</h1>
              <p className="text-xs text-cement-600">LIMITED</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cement-700 hover:text-gold-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/cart"
              className="flex items-center space-x-2 text-cement-700 hover:text-gold-600 transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="font-medium">Cart</span>
            </a>
            <a
              href="tel:+254753567847"
              className="flex items-center space-x-2 bg-gold-500 text-white px-6 py-2 rounded-lg hover:bg-gold-600 transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cement-900"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-cement-700 hover:text-gold-600 transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-cement-700 hover:text-gold-600 transition-colors font-medium py-2"
              >
                <ShoppingCart size={20} />
                <span>Cart</span>
              </a>
              <a
                href="tel:+254753567847"
                className="flex items-center space-x-2 bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors justify-center"
              >
                <Phone size={18} />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
