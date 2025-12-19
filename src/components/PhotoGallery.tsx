import React from 'react';
import moment1 from '../assets/1.jpg';
import moment2 from '../assets/2.jpg';
import moment3 from '../assets/3.jpg';
import moment4 from '../assets/4.jpg';
import moment5 from '../assets/6.jpg';
import moment6 from '../assets/7.jpg';

// Массив в том порядке, в котором хочешь показывать
const images = [moment3, moment1, moment5, moment2, moment6, moment4];

const PhotoGallery = () => {
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
            <div
              key={index}
              className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
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
