'use client';

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Send,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contacts = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // тут можна додати відправку форми на бекенд
    setShowMessage(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="dark:bg-dark-theme-bg min-h-screen px-4 sm:px-8 lg:px-16 py-12 relative">
      {/* Успішне повідомлення */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Message sent ✅
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-light-theme-text dark:text-dark-theme-text mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Contact Us
      </motion.h1>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-light-theme-text dark:text-dark-theme-text hover:scale-110 transition duration-300">
            <Phone className="w-6 h-6 text-light-theme-btn-product-bg dark:text-dark-theme-text" />
            <span>+38 (050) 123-45-67</span>
          </div>
          <div className="flex items-center gap-3 text-light-theme-text dark:text-dark-theme-text hover:scale-110 transition duration-300">
            <Mail className="w-6 h-6 text-light-theme-btn-product-bg dark:text-dark-theme-text" />
            <span>info@nice-gadgets.com</span>
          </div>
          <div className="flex items-center gap-3 text-light-theme-text dark:text-dark-theme-text hover:scale-110 transition duration-300">
            <Clock className="w-6 h-6 text-light-theme-btn-product-bg dark:text-dark-theme-text" />
            <span>Mon-Fri: 09:00 – 19:00, Sat-Sun: 10:00 – 17:00</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-light-theme-text dark:text-dark-theme-text hover:scale-110 transition duration-300">
            <MapPin className="w-6 h-6 text-light-theme-btn-product-bg dark:text-dark-theme-text" />
            <span>Bolsunovska Street, 13, Kyiv</span>
          </div>
          <a
            href="https://www.google.com/maps/place/Apple+(%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0)/@50.4217454,30.5505875,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf188f63b925:0x71f93299836af48!8m2!3d50.421742!4d30.5531624!16s%2Fg%2F11rg_sqrzm?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-light-theme-btn-product-bg dark:text-dark-theme-text hover:underline hover:scale-110 transition duration-300"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        className="max-w-xl bg-white dark:bg-item-bg border border-light-theme-border-active dark:border-dark-theme-border-hover rounded-3xl p-8 shadow-2xl mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-light-theme-text dark:text-dark-theme-text mb-6">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-lg border-light-theme-border-active dark:border-dark-theme-border-hover dark:bg-dark-theme-btn-selected text-light-theme-text dark:text-dark-theme-text focus:outline-none focus:ring-2 focus:ring-light-theme-btn-product-bg dark:focus:ring-dark-theme-btn-selected"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-lg border-light-theme-border-active dark:border-dark-theme-border-hover dark:bg-dark-theme-btn-selected text-light-theme-text dark:text-dark-theme-text focus:outline-none focus:ring-2 focus:ring-light-theme-btn-product-bg dark:focus:ring-dark-theme-btn-selected"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-lg border-light-theme-border-active dark:border-dark-theme-border-hover dark:bg-dark-theme-btn-selected text-light-theme-text dark:text-dark-theme-text focus:outline-none focus:ring-2 focus:ring-light-theme-btn-product-bg dark:focus:ring-dark-theme-btn-selected h-32 resize-none"
          />
          <button
            aria-label="submt form"
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-light-theme-btn-product-bg dark:bg-dark-theme-btn-selected text-white rounded-lg hover:bg-text-gray transition"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </motion.div>

      {/* Social Links */}
      <div className="flex gap-6 text-light-theme-text dark:text-dark-theme-text">
        <a
          href="https://www.facebook.com/apple/?locale=uk_UA"
          className="flex items-center gap-2 hover:text-light-theme-btn-product-bg dark:hover:text-light-theme-border-active transition"
        >
          <Facebook className="w-5 h-5" /> Facebook
        </a>
        <a
          href="https://www.instagram.com/apple/"
          className="flex items-center gap-2 hover:text-light-theme-btn-product-bg dark:hover:text-light-theme-border-active transition"
        >
          <Instagram className="w-5 h-5" /> Instagram
        </a>
      </div>
    </div>
  );
};

export default Contacts;
