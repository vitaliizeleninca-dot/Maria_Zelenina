import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border-4 border-cream">
            <img 
              src="https://images.unsplash.com/photo-1658281381502-8f73b17b0253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxsaXR0bGUlMjByaHl0aG1pYyUyMGd5bW5hc3QlMjBnaXJsfGVufDB8fHx8MTc2NjE2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Little Gymnast" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink/10 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-1 md:order-2"
        >
          <h2 className="text-4xl font-serif font-bold text-lavender">
            First <span className="text-pink">Grace</span>
          </h2>
          <div className="w-20 h-1 bg-gold rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hi! My name is <span className="font-bold text-lavender">Maria Magdalena Zelenina</span>, and I am 5 years old. 
            I love dancing with hoop and ribbon, jumping, and learning new elements.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gymnastics for me is not just a sport, it's a fairytale where I learn to be strong and beautiful.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
