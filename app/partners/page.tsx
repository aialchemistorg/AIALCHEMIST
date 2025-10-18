// app/partners/page.tsx
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { url } from 'node:inspector';
// import Image from 'next/image'; // ERROR: Cannot resolve 'next/image'

// FIX: Replace next/image import with a simple img tag wrapper for compatibility
const Image = (props: { src: string; alt: string; width: number; height: number; className: string }) => (
    <img src={props.src} alt={props.alt} 
    className={props.className} 
    style={{ width: props.width, 
    height: props.height,
    objectFit: 'contain' }} />
);


const PartnersPage = () => {
  // --- START OF ADDED CODE FOR IFRAME EMBEDDING ---
  const [embeddedUrl, setEmbeddedUrl] = useState<string | null>(null);
  const [iframeError, setIframeError] = useState(false);

  const closeIframe = useCallback(() => {
    setEmbeddedUrl(null);
  }, []);

  // Define which category should trigger the embedding behavior
  const EMBEDDED_CATEGORY_TITLE = "Technology Pioneers";

  const BLOCKED_DOMAINS = [    
    "aws.amazon.com", 
    "mit.edu", 
    "stanford.edu", 
    "ethz.ch", 
    "ethereum.org", 
    "github.com"];
  // --- END OF ADDED CODE FOR IFRAME EMBEDDING ---

  // Navbar Component
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-red-600/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-10 w-auto" />
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium relative group"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-100"></span>
                </motion.a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-red-400 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

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


  // Partners Data
  const partnerCategories = [
    {
      title: "Technology Pioneers",
      description: "Industry leaders powering our infrastructure",
      partners: [
        {
          name: "React India",
          logo: "/partner/reactindia.png",
          tagline: "Advancing AI research",
          url: "https://www.reactindia.io/"
        },
        {
          name: "Open Source Connect India",
          logo: "/partner/osci.png",
          tagline: "Accelerated computing",
          url: "https://www.osconnect.org/"
        },
        {
          name: "Microsoft",
          logo: "/partner/microsoft.png",
          tagline: "Cloud services",
          url: "https://microsoft.com"
        },
        {
          name: "AWS",
          logo: "/partner/aws.png",
          tagline: "Cloud platform",
          url: "https://aws.amazon.com"
        }
      ]
    },
    {
      title: "Education Network",
      description: "Leading research institutions",
      partners: [
        {
          name: "AICTE",
          logo: "/partner/mit.png",
          tagline: "Cutting-edge research",
          url: "https://mit.edu"
        },
        {
          name: "Stanford",
          logo: "/partner/stanford.png",
          tagline: "AI innovation",
          url: "https://stanford.edu"
        },
        {
          name: "ETH Zurich",
          logo: "/partner/eth.png",
          tagline: "Technical excellence",
          url: "https://ethz.ch"
        }
      ]
    },
    {
      title: "Community Partners",
      description: "Ecosystem partners",
      partners: [
        {
          name: "Core Connect",
          logo: "/partner/ethereum.png",
          tagline: "Blockchain foundation",
          url: "https://ethereum.org"
        },
        {
          name: "Open Source Connect India",
          logo: "/partner/osci.png",
          tagline: "Scalable solutions",
          url: "https://polygon.technology"
        },
        {
          name: "GitHub",
          logo: "/partner/github.png",
          tagline: "Developer platform",
          url: "https://github.com"
        }
      ]
    }
  ];
  // Animation controls
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black">
         <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="inset-0"
          />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center relative overflow-hidden
      ">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900/10 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with the brightest minds to build the future
          </p>
        </motion.div>
      </section>

      {/* Partners Grid */}
      <section ref={ref} className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {partnerCategories.map((category, index) => {

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, x: 0 } }}
                // Keeping a subtle animation for the main category sections
                transition={{ delay: 0.1 + index * 0.1 }} 
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    {category.description} 
                    {/* Added universal click instruction */}
                    <span className='text-red-400 font-medium'> (Click any partner to view site preview)</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {category.partners.map((partner, partnerIndex) => {
                    // New check: is it clickable?
                    const isClickable = !!partner.url;

                    return (
                        <motion.div
                          key={partner.name}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.4, 
                                type: 'spring',
                                stiffness: 100
                              }
                            }
                          }}
                          className="flex justify-center"
                        >
                          <motion.a
                            // Check if clickable to determine target and rel attributes
                            href={isClickable ? partner.url : '#'}
                            target={isClickable ? '_self' : '_blank'}
                            rel={isClickable ? '' : 'noopener noreferrer'}
                            className={`flex flex-col items-center group w-full max-w-[150px] p-4 rounded-lg transition-all duration-300 ${
                                isClickable 
                                    ? 'cursor-pointer hover:bg-red-900/20' 
                                    : 'cursor-default opacity-75' // Dim if not clickable
                            }`}
                            whileHover={{ y: isClickable ? -8 : 0 }}
                            transition={{ type: 'spring', stiffness: 700, damping: 30 }} 
                            onClick={(e) => {
                                if (isClickable) {
                                    e.preventDefault(); 
                                    
                                    const url = partner.url;
                                    // FIX: Normalize URL for reliable comparison against BLOCKED_DOMAINS
                                    const normalizedUrl = url.toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');
                                    
                                    // Checking immediately if this is a blocked site
                                    const isBlocked = BLOCKED_DOMAINS.some(domain => normalizedUrl.includes(domain));
                                    
                                    setEmbeddedUrl(url);
                                    setIframeError(isBlocked);
                                }
                            }}
                          >
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-900/30 to-orange-900/30 p-0.5 mb-3">
                              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  width={80}
                                  height={80}
                                  className="object-contain w-16 h-16 group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                            <p className="text-white font-semibold mb-1">{partner.name}</p> 
                            <p className="text-gray-400 text-sm italic opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-150">"{partner.tagline}"</p>
                            
                            <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                {isClickable ? (
                                    <ExternalLink size={14} className="text-red-500/80" />
                                ) : (
                                    <ExternalLink size={14} className="text-gray-500" />
                                )}
                            </div>
                          </motion.a>
                        </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    
{/* Animated CTA Section */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 animate-pulse" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                Ready to Join Our Network?
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Become part of our growing ecosystem of innovators and thought leaders
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                >
                  Partner With Us <ArrowRight className="ml-2" size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* --- START OF ADDED CODE: IFRAME VIEWER MODAL --- */}
      {embeddedUrl && (
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 overflow-y-auto"
          >
              <div className="max-w-7xl mx-auto h-full flex flex-col">
                  <div className="flex justify-between items-center py-4 sticky top-0 bg-black/90 z-10 border-b border-red-600/50">
                      <h2 className="text-xl font-bold text-white truncate max-w-[80%]">
                          Viewing Partner Site: <span className="text-red-400">{embeddedUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      </h2>
                      <button
                          onClick={closeIframe}
                          className="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors shadow-lg ml-4 flex items-center justify-center"
                          aria-label="Close embedded viewer"
                          title="Close viewer"
                      >
                          <X size={24} />
                      </button>
                  </div>

                  {/* The Iframe Container (Conditional based on iframeError) */}
                  <div className="flex-1 w-full rounded-xl overflow-hidden border-4 border-red-600/50 shadow-2xl mt-4 mb-4 relative">
                      {iframeError ? (
                          <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gray-900"
                          >
                              <X size={48} className="text-red-500 mb-4" />
                              <h3 className="text-2xl font-bold text-white mb-3">
                                  In-App Preview Blocked
                              </h3>
                              <p className="text-gray-400 mb-6">
                                  This website does not support embedding via iFrame due to security restrictions. Click the button below to go directly to the partner's site.
                              </p>
                              <motion.a
                                  href={embeddedUrl!}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md shadow-red-500/30"
                              >
                                  Go Directly to Website <ExternalLink size={18} className="ml-2" />
                              </motion.a>
                          </motion.div>
                      ) : (
                          <iframe
                              src={embeddedUrl!}
                              title={`Embedded Partner Site: ${embeddedUrl}`}
                              className="w-full h-full bg-white"
                              frameBorder="0"
                              loading="lazy"
                              allowFullScreen
                          >
                              Your browser does not support iframes.
                          </iframe>
                      )}
                  </div>

                  <div className="text-center text-sm text-gray-400 p-2">
                      ⚠️ Note: Some websites may block embedding via security headers (CSP/X-Frame-Options), which may result in a blank page.
                  </div>
              </div>
          </motion.div>
      )}
      {/* --- END OF ADDED CODE: IFRAME VIEWER MODAL --- */}
    </div>
  );
};

export default PartnersPage;
