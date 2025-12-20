import React from 'react';
import { Play } from 'lucide-react';

type VideoItem = {
  title: string;
  subtitle: string;
  youtubeId: string;
};

const videos: VideoItem[] = [
  {
    title: 'Spring gymnastics celebration at Imatra Sports Hall',
    subtitle: 'May 14, 2025',
    youtubeId: 'POXdfZ31zUY',
  },
  {
    title: 'Performance at Imatra Sports Hall. Magic on the carpet',
    subtitle: 'Nov 15, 2025',
    youtubeId: '3OXXKFT8pKE',
  },
  {
    title: 'Christmas Show. Gymnastics Celebration. Imatra Sports Hall',
    subtitle: 'Dec 17, 2025',
    youtubeId: 'C8kZVAcxbZM',
  },
];

const VideoShowcase: React.FC = () => {
  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-lavender text-center mb-12">
          My <span className="text-pink">Performances</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-black"
            >
              {/* YouTube iframe */}
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Overlay text */}
              <div className="pointer-events-none absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-sm opacity-90">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
