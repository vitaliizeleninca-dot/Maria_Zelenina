import React from 'react';

const PhotoGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1759694430835-ef9350656e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjBob29wJTIwZ2lybHxlbnwwfHx8fDE3NjYxNjI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1611032079840-424c81ac82b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjByaWJib24lMjBnaXJsfGVufDB8fHx8MTc2NjE2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1747720663196-b75e5babb2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHw3fHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjBob29wJTIwZ2lybHxlbnwwfHx8fDE3NjYxNjI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1639998733481-b2cb5da248f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHw1fHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjBob29wJTIwZ2lybHxlbnwwfHx8fDE3NjYxNjI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1764622078369-ca3930f0267b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHw5fHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjBob29wJTIwZ2lybHxlbnwwfHx8fDE3NjYxNjI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1598981553323-6d8dfe02f1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwzfHxyaHl0aG1pYyUyMGd5bW5hc3RpY3MlMjBob29wJTIwZ2lybHxlbnwwfHx8fDE3NjYxNjI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

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
