// app/partners/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
// ✅ Added import
import { useRouter } from 'next/navigation';

const PartnersPage = () => {
  const router = useRouter(); // ✅ Added router for internal navigation

  // Navbar Component (unchanged)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
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

  // ✅ Partner data updated slightly: changed external URLs to internal routes
  const partnerCategories = [
    {
      title: "Technology Pioneers",
      description: "Industry leaders powering our infrastructure",
      partners: [
        {
          name: "React India",
          logo: "/partner/reactindia.png",
          tagline: "Advancing AI research",
          route: "/partners/subpages/reactindia" // ✅ internal route
        },
        {
          name: "Open Source Connect India",
          logo: "/partner/osci.png",
          tagline: "Accelerated computing",
          route: "/partners/subpages/oscipage"
        },
        {
          name: "Microsoft",
          logo: "/partners/microsoft.png",
          tagline: "Cloud services",
          route: "/partners/subpages/microsoft-page"
        },
        {
          name: "AWS",
          logo: "/partners/aws.png",
          tagline: "Cloud platform",
          route: "/partners/subpages/aws-page"
        }
      ]
    },
    {
      title: "Education Network",
      description: "Leading research institutions",
      partners: [
        {
          name: "AICTE",
          logo: "/partners/mit.png",
          tagline: "Cutting-edge research",
          route: "/partners/subpages/aicte-page"
        },
        {
          name: "Stanford",
          logo: "/partners/stanford.png",
          tagline: "AI innovation",
          route: "/partners/subpages/stanford-page"
        },
        {
          name: "ETH Zurich",
          logo: "/partners/eth.png",
          tagline: "Technical excellence",
          route: "/partners/subpages/eth-page"
        }
      ]
    },
    {
      title: "Community Partners",
      description: "Ecosystem partners",
      partners: [
        {
          name: "Core Connect",
          logo: "/partners/ethereum.png",
          tagline: "Blockchain foundation",
          route: "/partners/subpages/coreconnect-page"
        },
        {
          name: "Open Source Connect India",
          logo: "/partner/osci.png",
          tagline: "Scalable solutions",
          route: "/partners/subpages/osci-page"
        },
        {
          name: "GitHub",
          logo: "/partners/github.png",
          tagline: "Developer platform",
          route: "/partners/subpages/github-page"
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
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900/10 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, x: 0 } }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partner.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.2 + index * 0.1 + partnerIndex * 0.05,
                          duration: 0.6,
                          type: 'spring',
                          stiffness: 100
                        }
                      }
                    }}
                    className="flex justify-center"
                  >
                    {/* ✅ Changed <a> to a <div> with router.push() for internal routing */}
                    <motion.div
                      onClick={() => router.push(partner.route)}
                      className="flex flex-col items-center group cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-400 text-sm italic">"{partner.tagline}"</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section (unchanged) */}
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
    </div>
  );
};

export default PartnersPage;