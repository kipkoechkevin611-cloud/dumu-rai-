"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Kamau",
    role: "Construction Manager",
    company: "Nairobi Developers Ltd",
    content: "Rai Cement has been our trusted partner for over 5 years. Their products consistently meet our quality standards, and their delivery is always on time.",
    rating: 5,
  },
  {
    name: "Mary Wanjiku",
    role: "Project Engineer",
    company: "Mombasa Infrastructure",
    content: "The quality of Rai Cement's OPC Premium 42.5N is exceptional. We've used it on multiple bridge projects with outstanding results.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    role: "Site Supervisor",
    company: "Kisumu Construction",
    content: "Excellent customer service and reliable supply. Rai Cement understands the construction industry's needs and delivers accordingly.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Trusted by <span className="text-primary">Builders Across Kenya</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Trusted by construction professionals across Kenya for quality, reliability, and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm relative border border-border hover:shadow-md transition-shadow"
            >
              <Quote className="text-primary/10 absolute top-6 right-6" size={64} />
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={20} />
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic leading-relaxed">{testimonial.content}</p>
              <div>
                <div className="font-bold text-text-primary">{testimonial.name}</div>
                <div className="text-text-secondary text-sm">{testimonial.role}</div>
                <div className="text-primary text-sm font-medium">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
