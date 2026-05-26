"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cement-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/assets/logo.jpeg"
                alt="Rai Cement Limited Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">RAI CEMENT</h3>
                <p className="text-xs text-gray-400">LIMITED</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Established in January 2017, Rai Cement Limited is an ultra-modern manufacturing facility operating under the multi-billion-shilling Rai Group conglomeration, serving the regional construction sectors of East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">DUMU 32.4N</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">DUMU ULTRA 42.5</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">DUMU ULTRA PLUS 42.5</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Bulk Orders</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-gold-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+254753567847" className="text-white hover:text-gold-400 transition-colors">+254 753 567 847</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-gold-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@raicement.co.ke" className="text-white hover:text-gold-400 transition-colors">info@raicement.co.ke</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-gold-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Awasi, Kericho-Kisumu Highway, Nyanza Region</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rai Cement Limited. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
