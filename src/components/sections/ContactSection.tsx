import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSent(true);
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Reset sent status after 3 seconds
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's discuss your project or just say hello"
        />
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mt-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Feel free to reach out for collaborations or opportunities. I'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <motion.a
                href="mailto:abdulazizkhan726@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-primary-800/30 transition-all relative overflow-hidden group"
                whileHover={{ x: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/20 dark:from-blue-600/20 dark:to-blue-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center z-10"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)"
                  }}
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </motion.div>
                <div className="z-10">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-sm text-primary-800 dark:text-white">abdulazizkhan726@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+918250172651"
                className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-primary-800/30 transition-all relative overflow-hidden group"
                whileHover={{ x: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/20 dark:from-green-600/20 dark:to-green-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center z-10"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.7)"
                  }}
                >
                  <Phone className="w-4 h-4 text-green-600 dark:text-green-300" />
                </motion.div>
                <div className="z-10">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="text-sm text-primary-800 dark:text-white">+91-8250172651</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-primary-800/30 transition-all relative overflow-hidden group"
                whileHover={{ x: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/20 dark:from-purple-600/20 dark:to-purple-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center z-10"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)"
                  }}
                >
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                </motion.div>
                <div className="z-10">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-sm text-primary-800 dark:text-white">Punjab, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href="https://www.linkedin.com/in/abdulzizkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-primary-800/50 flex items-center justify-center text-blue-600 dark:text-blue-300 relative overflow-hidden group"
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Linkedin size={16} className="z-10" />
              </motion.a>
              
              <motion.a
                href="https://github.com/ABDUL223344"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-primary-800/50 flex items-center justify-center text-gray-700 dark:text-gray-300 relative overflow-hidden group"
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gray-500/10 dark:bg-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Github size={16} className="z-10" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white dark:bg-primary-800/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-primary-900/50 border border-slate-200 dark:border-primary-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-accent-950"
                  placeholder="Your name"
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                    scale: 1.01
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-primary-900/50 border border-slate-200 dark:border-primary-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-accent-950"
                  placeholder="your@email.com"
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                    scale: 1.01
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-primary-900/50 border border-slate-200 dark:border-primary-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-accent-950 resize-none"
                  placeholder="Your message..."
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                    scale: 1.01
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-all relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-blue-700/30 dark:bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isSubmitting ? (
                  <div className="flex items-center gap-2 z-10">
                    <motion.div 
                      className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 z-10">
                    <motion.span
                      animate={sent ? { 
                        scale: [1, 1.2, 1],
                        transition: { duration: 0.5 } 
                      } : {}}
                    >
                      <Send size={16} />
                    </motion.span>
                    <span>{sent ? "Sent!" : "Send Message"}</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;