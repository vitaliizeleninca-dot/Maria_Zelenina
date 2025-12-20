import React from 'react';
import { Play } from 'lucide-react';

const VideoShowimport React, { useState } from 'react';
import { Play, X } from 'lucide-react';

type Video = {
  title: string;
  subtitle: string;
  youtubeId: string;
};

const videos: Video[] = [
  {
    title: "My first appearance on the big stage",
    subtitle: "2025",
    youtubeId: "sMui14XvhjY",
  },
  {
    title: "Hoop Dance",
    subtitle: "Little Star",
    youtubeId: "sMui14XvhjY",
  },
  {
    title: "Open Lesson",
    subtitle: "First Successes",
    youtubeId: "sMui14XvhjY",
  },
];

const VideoShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-lavender text-center mb-12">
          My <span className="text-pink">Performances</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(video.youtubeId)}
              className="group relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-black/5 hover:shadow-2xl transition-all"
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="text-pink ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-left">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-sm opacity-90">{video.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
            
            {/* Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* YouTube iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;
case = () => {
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
