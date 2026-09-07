"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+254 746 392 602",
      link: "tel:+254746392602",
    },
    {
      icon: Mail,
      title: "Email",
      value: "raicement33@gmail.com",
      link: "mailto:raicement33@gmail.com",
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
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s Build <span className="text-primary">Something Strong</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
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
            <h3 className="text-2xl font-bold text-text-primary mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">{item.title}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-text-secondary">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/254746392602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+254746392602"
                className="flex items-center justify-center space-x-2 w-full bg-accent text-navy py-4 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
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
            className="bg-background p-8 rounded-xl border border-border"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
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
                className="w-full bg-gradient-to-r from-accent to-accent-light text-navy py-4 rounded-lg font-semibold hover:from-accent-dark hover:to-accent transition-all duration-300 shadow-lg"
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
