import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: "Email", value: "ganesh.beldar@example.com", link: "mailto:ganesh.beldar@example.com", color: "text-primary-600 bg-primary-100" },
    { icon: <Phone size={24} />, title: "Phone", value: "+91 98765 43210", link: "tel:+919876543210", color: "text-secondary-600 bg-secondary-100" },
    { icon: <MapPin size={24} />, title: "Location", value: "Pune, Maharashtra, India", link: "#", color: "text-accent-600 bg-accent-100" }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss AI & Web Development? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                whileHover={{ x: 5 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-dark-800 border border-white/50 dark:border-dark-700 soft-shadow group transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${info.color} dark:bg-opacity-20`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-900 dark:text-white font-display">{info.title}</h3>
                  <p className="text-accent-600 dark:text-cream-300 font-sans">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-800 p-8 md:p-10 rounded-3xl border border-white/50 dark:border-dark-700 soft-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent-700 dark:text-cream-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-cream-50 dark:bg-dark-900 border border-cream-200 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all text-accent-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent-700 dark:text-cream-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-cream-50 dark:bg-dark-900 border border-cream-200 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all text-accent-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-accent-700 dark:text-cream-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-3 rounded-xl bg-cream-50 dark:bg-dark-900 border border-cream-200 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all text-accent-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
