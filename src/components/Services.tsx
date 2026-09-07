"use client";

import { motion } from "framer-motion";
import { Truck, Building2, Factory, ShieldCheck } from "lucide-react";
import Image from "next/image";

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
    <section id="services" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions for <span className="text-accent">Every Construction Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-navy-light p-8 rounded-xl hover:bg-navy-dark transition-colors group border border-white/10"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <service.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Delivery Truck Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative h-64 rounded-xl overflow-hidden border border-[#F7F7F7]/10"
        >
          <Image
            src="/assets/e4xhH-2BLAuWMNMmikfJe-7gUOj6Jcwc-yZXHjfzMhnXYmhbS2LQUfDHaKaLwPctcqZsaTRDJRatZvFJ59RAx6pPU9XkDQ0ocKbXcvAkkA0Iy8nNkpgutUmJB3SU28yOXEwL6fWp0mkO6mw7HWv7r2LXHfVhHn2b0mXdR5TEB68wTtJZiWLgpl78jr2raUS1.jpeg"
            alt="Rai Cement Delivery Fleet"
            width={1200}
            height={256}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-accent to-accent-light rounded-xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-navy mb-4">
            Need Bulk Cement for Your Project?
          </h3>
          <p className="text-navy-dark/90 mb-8 text-lg leading-relaxed">
            Contact us for special pricing on bulk orders and dedicated project support.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-background transition-colors"
          >
            Request Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
