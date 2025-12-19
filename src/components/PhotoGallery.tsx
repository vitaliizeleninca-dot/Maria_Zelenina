import React from 'react';
import moment1 from '../assets/moment1.jpg';
import moment2 from '../assets/moment2.jpg';
import moment3 from '../assets/moment3.jpg';
import moment4 from '../assets/moment4.jpg';
import moment5 from '../assets/moment5.jpg';
import moment6 from '../assets/moment6.jpg';

const PhotoGallery = () => {
  const images = [moment1, moment2, moment3, moment4, moment5, moment6];

  return (
    <section id="gallery" className="py-20 bg-cream/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-lavender mb-4">
            Moments on the <span className="text-gold">Carpet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Photos from trainings and first competitions, where the magic of rhythmic gymnastics is born.
          </p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
