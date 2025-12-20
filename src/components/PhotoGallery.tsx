import React from 'react';

// 👉 импортируешь изображения вручную и сам задаёшь порядок
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/6.jpg';
import img6 from '../assets/7.jpg';

// 👉 порядок ровно такой, как ты хочешь
const images: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const PhotoGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-cream/50">
      <div className="container mx-auto px-6">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-lavender mb-4">
            Moments on the <span className="text-gold">Carpet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Photos from trainings and first competitions, where the magic of rhythmic gymnastics is born.
          </p>
        </div>

        {/* Галерея */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            auto-rows-[60vh]
            md:auto-rows-[500px]
            lg:auto-rows-[700px]
          "
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="
                rounded-[2rem]
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-shadow
                duration-300
                group
              "
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotoGallery;
