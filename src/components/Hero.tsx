import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-pink-light via-cream to-blue-pastel">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-lavender leading-tight">
            Little Dream — <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-gold">Big Victories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            A journey into the world of beauty, grace, and first sports achievements. Every step is confidence, every training is joy.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#videos"
              className="px-8 py-4 bg-pink text-white rounded-full font-bold shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Play size={20} fill="currentColor" />
              Watch Performances
            </a>
            <a 
              href="#gallery"
              className="px-8 py-4 bg-white text-lavender border-2 border-lavender rounded-full font-bold hover:bg-lavender hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <ImageIcon size={20} />
              Gallery
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink/20 rounded-full blur-3xl"></div>
          
          {/* Main Image Container */}
          <div className="relative z-10 rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjBob29wJTIwZ2lybHxlbnwwfHx8fDE3NjYxNjI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Rhythmic Gymnast with Hoop" 
              className="w-full h-[600px] object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
