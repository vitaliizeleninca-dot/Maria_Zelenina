import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_el6e74s",      // SERVICE_ID
        "template_bqfsotw",     // TEMPLATE_ID
        formRef.current,
        "5-HJEQckI23BXW99T"     // PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-lavender text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Contact</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Follow my progress or propose collaboration for sports brands. We are always happy to make new friends!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-white/80">maria.zelenina.fi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center">
                  <Instagram className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Instagram</h3>
                  <p className="text-white/80">@maryaurum</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-pink transition-all"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-pink transition-all"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-pink transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-pink hover:bg-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
