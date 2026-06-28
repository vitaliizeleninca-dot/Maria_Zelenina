import React from 'react';

// 👉 импорт изображений вручную и порядок
import img1 from '../assets/Maria1.jpg';
import img2 from '../assets/Maria2.jpg';
import img3 from '../assets/Maria3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/6.jpg';
import img6 from '../assets/7.jpg';
import img7 from '../assets/1.jpg';
import img8 from '../assets/2.jpg';
import img9 from '../assets/3.jpg';

// можно добавлять новые сюда
// import img10 from '../assets/4.jpg';
// import img11 from '../assets/8.jpg';
// import img12 from '../assets/9.jpg';


const images: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,

  // добавляешь дальше:
  // img10,
  // img11,
  // img12,
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


        {/* Галерея со скроллом */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8

            max-h-[900px]
            overflow-y-scroll
            pr-4

            scrollbar-thin
            scrollbar-thumb-lavender
            scrollbar-track-transparent
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
                transition-all
                duration-300
                group
                aspect-[3/4]
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
