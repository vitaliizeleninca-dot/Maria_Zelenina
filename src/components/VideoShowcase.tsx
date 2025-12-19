import React from 'react';
import { Play } from 'lucide-react';

const VideoShowcase = () => {
  const videos = [
    {
      title: "My first appearance on the big stage",
      subtitle: "2025",
      color: "from-pink/20 to-lavender/20"
    },
    {
      title: "Hoop Dance",
      subtitle: "Little Star",
      color: "from-blue-pastel/20 to-pink/20"
    },
    {
      title: "Open Lesson",
      subtitle: "First Successes",
      color: "from-gold/20 to-cream/20"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-lavender text-center mb-12">
          My <span className="text-pink">Performances</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-lavender/5 cursor-pointer transform transition-all hover:-translate-y-2 hover:shadow-2xl">
              {/* Placeholder Thumbnail Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${video.color} group-hover:opacity-80 transition-opacity`}></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="text-pink ml-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/50 to-transparent text-white">
                <h3 className="font-bold text-lg drop-shadow-md">{video.title}</h3>
                <p className="text-sm opacity-90 drop-shadow-md">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
