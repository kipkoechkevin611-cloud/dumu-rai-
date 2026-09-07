"use client";

import { motion } from "framer-motion";
import { Award, Globe, Users, Wrench } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "ISO Certified",
      description: "Manufactured to international quality standards with ISO 9001:2015 certification.",
    },
    {
      icon: Globe,
      title: "Nationwide Distribution",
      description: "Extensive distribution network covering all 47 counties in Kenya.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with decades of industry experience.",
    },
    {
      icon: Wrench,
      title: "Infrastructure Support",
      description: "Specialized solutions for large-scale infrastructure and construction projects.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Built on Quality. <span className="text-primary">Driven by Innovation.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Established in January 2017, Rai Cement Limited is an ultra-modern, technologically advanced manufacturing facility operating under the multi-billion-shilling Rai Group conglomeration. Strategically positioned along the Kericho-Kisumu Highway in Awasi (Nyanza region), the plant utilizes state-of-the-art clinker production and automated grinding technology to service the regional construction sectors of East Africa.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Benefiting from its geographic localization, Rai Cement serves as the core logistics supplier bridging structural infrastructure demand across the North Rift, South Rift, Nyanza, Western, and regional border economies. The manufacturer relies on strict adherence to East African Standards (EAS 18-1) and international specifications, ensuring robust material purity, optimized setting settings, and high early compressive strength.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">2017</div>
                <div className="text-text-secondary font-medium">Established</div>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">EAS 18-1</div>
                <div className="text-text-secondary font-medium">East African Standards</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/assets/PERMIT.jpeg"
                alt="Permit Photo"
                width={800}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="font-semibold text-white">Operating Permit & Certification</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-background to-background-dark p-6 rounded-xl hover:shadow-lg transition-shadow border border-border"
                >
                  <feature.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
