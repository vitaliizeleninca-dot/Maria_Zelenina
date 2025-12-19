import React from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const Achievements = () => {
  const awards = [
    {
      icon: <Trophy className="w-12 h-12 text-gold" />,
      title: "Award 1",
      desc: "Achievement description"
    },
    {
      icon: <Medal className="w-12 h-12 text-gold" />,
      title: "Award 2",
      desc: "Achievement description"
    },
    {
      icon: <Star className="w-12 h-12 text-gold" />,
      title: "Award 3",
      desc: "Achievement description"
    },
    {
      icon: <Award className="w-12 h-12 text-gold" />,
      title: "Award 4",
      desc: "Achievement description"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-lavender text-center mb-12">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gold/20 text-center group">
              <div className="mb-6 inline-block p-4 bg-cream rounded-full group-hover:bg-gold/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-lavender mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
