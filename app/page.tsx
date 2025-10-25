"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Menu, X, ArrowRight, Users, Globe, Brain, Zap, Shield, Target,
  Mail, MapPin, Star, Github, Linkedin, Twitter, Crown, User
} from 'lucide-react';
import TeamCard from '../components/ui/TeamCard';
import { useAnimationControls } from "framer-motion";
import Image from 'next/image';
import "./globals.css"

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Partners', href: '/partners' },
    { name: 'Teams', href: '#teams' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-red-600/20' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="AIALCHEMIST Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-400 p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-red-600/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">AIALCHEMIST:</span>
          <br />
          <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Reprogramming the Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          By Students. For the World.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300"
          >
            Explore Platform <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Manifesto Section with 3D Cards
const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { title: "Research", icon: Brain, description: "Advancing AI through rigorous academic inquiry" },
    { title: "Decentralization", icon: Globe, description: "Empowering distributed innovation networks" },
    { title: "Ethical AI", icon: Shield, description: "Building responsible artificial intelligence" },
    { title: "Youth Power", icon: Users, description: "Amplifying student voices in technology" }
  ];

  return (
    <section id="manifesto" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Manifesto</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four pillars that guide our mission to democratize AI and Web3 technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
                }}
                className="bg-black border border-red-600/20 rounded-xl p-6 hover:border-red-600/50 transition-all duration-50 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Platform Section
const PlatformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    { name: "Community", icon: Users, description: "Connect with fellow innovators worldwide" },
    { name: "Events", icon: Target, description: "Hackathons, workshops, and conferences" },
    { name: "Projects", icon: Zap, description: "Collaborative research and development" },
    { name: "Research Hub", icon: Brain, description: "Academic papers and publications" },
    { name: "Global Map", icon: Globe, description: "Visualize our worldwide network" }
  ];

  return (
    <section id="platform" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Platform Modules</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools for AI research, collaboration, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)"
                }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-red-600/50 rounded-xl p-6 cursor-pointer transition-all duration-100"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{module.name}</h3>
                <p className="text-gray-400 leading-relaxed">{module.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const members = [
    {
      name: "Sayman Lal",
      role: "CEO",
      quote: "Innovation through collaboration",
      social: { linkedin: "#", twitter: "#", github: "#" },
      image: "/team/sayman.png",
    },
    {
      name: "Utkarsh Kushwaha",
      role: "AI Research Lead",
      quote: "Pushing boundaries in AI",
      social: { linkedin: "#", twitter: "#", github: "#" },
      image: "/team/utkarsh.png",
    },
    {
      name: "Praveen Rajak",
      role: "Web3 Lead",
      quote: "Decentralizing the future",
      social: { linkedin: "#", twitter: "#", github: "#" },
      image: "/team/praveen.png",
    },
    {
      name: "Kaustubh Sen",
      role: "Web3 Lead",
      quote: "Decentralizing the future",
      social: { linkedin: "#", twitter: "#", github: "#" },
      image: "/team/kaustubh.png",
    },
    {
      name: "Yash Namdeo",
      role: "Web3 Lead",
      quote: "Decentralizing the future",
      social: { linkedin: "#", twitter: "#", github: "#" },
      image: "/team/yash.png",
    },
  ];

  return (
    <section
      id="teams"
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/30"
    >
      <div className="w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds shaping the future of AI and Web3
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="marquee flex gap-8 group-hover:[animation-play-state:paused]">
            {[...members, ...members].map((member, i) => (
              <TeamCard
                key={`${member.name}-${i}`}
                imgSrc={member.image}
                name={member.name}
                role={member.role}
                quote={member.quote}
                social={member.social}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


// Contact Section
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Gradient utkarsh*/}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join the revolution? Let's build the future together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/50 backdrop-blur-sm border border-red-600/20 rounded-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your ideas, questions, or how you'd like to contribute..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Mail size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', { rating, review });
    setReview('');
  };

  return (
    <footer className="bg-black border-t border-red-600/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Rating and Review */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Rate Your Experience</h3>
            <div className="flex justify-center lg:justify-start gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onClick={() => setRating(star)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
                >
                  <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
                </motion.button>
              ))}
            </div>
            <form onSubmit={handleReviewSubmit}>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your thoughts about AIALCHEMIST..."
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white text-sm resize-none"
                rows={3}
              />
              <button
                type="submit"
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex justify-center lg:justify-end gap-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 AIALCHEMIST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <PlatformSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
