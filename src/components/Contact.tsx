"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+254 753 567 847",
      link: "tel:+254753567847",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@raicement.co.ke",
      link: "mailto:info@raicement.co.ke",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Awasi, Kericho-Kisumu Highway, Nyanza Region",
      link: null,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 8:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cement-900 mb-4">
            Contact <span className="text-gold-600">Us</span>
          </h2>
          <p className="text-xl text-cement-600 max-w-3xl mx-auto">
            Get in touch with our team for orders, quotes, or any inquiries. We&apos;re here to help with your construction needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cement-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-cement-900 mb-1">{item.title}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-cement-600 hover:text-gold-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-cement-600">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/254753567847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+254753567847"
                className="flex items-center justify-center space-x-2 w-full bg-gold-500 text-white py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                <Phone size={20} />
                <span>Call Us Now</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cement-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-cement-900 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-cement-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-cement-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-cement-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-cement-900 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
