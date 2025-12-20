import { motion } from "framer-motion";
import { Play } from "lucide-react";
import galleryIcon from "../assets/5.png"; // ✅ БЕЗ alias

const Hero = () => {
  // 👉 YouTube ID (из https://youtu.be/sMui14XvhjY)
  const heroVideoId = "sMui14XvhjY";

  return (
    <section className="relative min-h-screen pt-24 bg-gradient-to-br from-pink-light via-cream to-blue-pastel overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 z-10"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-lavender leading-tight">
            Little Dream —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-gold">
              Big Victories
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-sans">
            A journey into the world of beauty, grace, and first sports achievements.
            Every step is confidence, every training is joy.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">

            {/* WATCH */}
            <a
              href="#videos"
              className="px-6 py-3 bg-pink text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition flex items-center gap-2"
            >
              <Play size={18} />
              Watch Performances
            </a>

            {/* GALLERY */}
            <a
              href="#gallery"
              className="px-6 py-3 bg-white text-lavender border-2 border-lavender rounded-full font-semibold hover:bg-lavender hover:text-white transition flex items-center gap-2"
            >
              <img
                src={galleryIcon}
                alt="Gallery"
                className="w-5 h-5 object-contain"
              />
              Gallery
            </a>

          </div>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          {/* glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/60 aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${heroVideoId}`}
              title="Hero performance video"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
