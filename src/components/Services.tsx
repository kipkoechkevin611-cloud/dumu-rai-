"use client";

import { motion } from "framer-motion";
import { Truck, Building2, Factory, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Fast and reliable delivery to all 47 counties. Our fleet of modern trucks ensures your cement arrives on time and in perfect condition.",
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Specialized cement solutions for commercial buildings, shopping malls, offices, and industrial facilities.",
    },
    {
      icon: Factory,
      title: "Infrastructure Projects",
      description: "High-strength cement for bridges, roads, dams, and major infrastructure development projects across Kenya.",
    },
    {
      icon: ShieldCheck,
      title: "Bulk Ordering Support",
      description: "Dedicated account management for bulk orders with flexible payment terms and priority scheduling.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-cement-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive cement solutions tailored to meet the diverse needs of construction projects across Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cement-800 p-8 rounded-2xl hover:bg-cement-700 transition-colors group"
            >
              <div className="w-16 h-16 bg-gold-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors">
                <service.icon className="text-gold-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Delivery Truck Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 relative h-64 rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/e4xhH-2BLAuWMNMmikfJe-7gUOj6Jcwc-yZXHjfzMhnXYmhbS2LQUfDHaKaLwPctcqZsaTRDJRatZvFJ59RAx6pPU9XkDQ0ocKbXcvAkkA0Iy8nNkpgutUmJB3SU28yOXEwL6fWp0mkO6mw7HWv7r2LXHfVhHn2b0mXdR5TEB68wTtJZiWLgpl78jr2raUS1.jpeg"
            alt="Rai Cement Delivery Fleet"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Bulk Cement for Your Project?
          </h3>
          <p className="text-white/90 mb-8 text-lg">
            Contact us for special pricing on bulk orders and dedicated project support.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
