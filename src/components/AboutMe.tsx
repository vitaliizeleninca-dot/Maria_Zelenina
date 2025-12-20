import React from 'react';
import { motion } from 'framer-motion';

// 👉 импорт ОДНОГО фото
import aboutImg from '../assets/5.jpg';

const AboutMe: React.FC = () => {
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
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-xl border-4 border-cream aspect-[3/4]">
            <img 
              src={aboutImg}
              alt="Young rhythmic gymnast"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Decorative circle */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink/10 rounded-full blur-3xl"></div>
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
