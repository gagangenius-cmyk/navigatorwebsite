'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users, Award, Clock, CheckCircle, Star, MapPin, FileText, Shield, Globe } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import {
  ComparisonTable,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';


export default function SkilledImmigration() {
  const seoPage = coreSeoPages.skilled;
  const [activeSection, setActiveSection] = useState('canada-overview');
  const australiaVideoRef = useRef<HTMLVideoElement>(null);
  const canadaVideoRef = useRef<HTMLVideoElement>(null);
  const newzealandVideoRef = useRef<HTMLVideoElement>(null);

  // Intersection Observer for video play on focus
  useEffect(() => {
    const videos = [
      { ref: australiaVideoRef, id: 'australia-overview' },
      { ref: canadaVideoRef, id: 'canada-overview' },
      { ref: newzealandVideoRef, id: 'newzealand-overview' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log('Video play failed:', error);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: '0px'
      }
    );

    videos.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      videos.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const anchorPoints = [
    { id: 'canada-overview', label: 'Canada Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'australia-overview', label: 'Australia Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'newzealand-overview', label: 'New Zealand Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <FileText className="w-4 h-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Star className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'faq', label: 'FAQ', icon: <Shield className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen" suppressHydrationWarning style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(67, 97, 117, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(88, 90, 94, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(67, 97, 117, 0.04) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#436175]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#436175]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {seoPage.h1}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-very-light-beige/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {seoPage.answer}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange-red text-white font-semibold rounded-lg hover:bg-muted-brown-grey transform hover:scale-105 transition-all duration-300"
                >
                  Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/immigration/blog"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transform transition-all duration-300"
                >
                  Success Stories
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
              <motion.div
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Anchor Navigation */}
      <div className="sticky z-30 bg-[#f5f5dc] border-b border-light-brown-grey shadow-sm top-48 lg:top-36">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-4">
            <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide w-full lg:w-auto">
              {anchorPoints.map((anchor) => (
                <button
                  key={anchor.id}
                  onClick={() => scrollToSection(anchor.id)}
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeSection === anchor.id
                    ? 'bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] text-white'
                    : 'text-[#436175] hover:text-[#f5f5dc] hover:bg-[#436175]'
                    }`}
                >
                  <span className="hidden sm:inline">{anchor.icon}</span>
                  <span>{anchor.label}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Canada Program Overview Section */}
      <section id="canada-overview" className="py-24 bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Canada Program Overview</h2>
            <p className="text-left text-lg font-semibold text-black/90 mb-8 leading-relaxed">
              Explore Canadian permanent residence options with information about the routes and requirements to verify.

            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">

                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  We provide consultation support for people exploring Canadian permanent residence programs. The right route depends on factors such as work history, education, language results, family circumstances, and the program rules in force.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  We can discuss options such as Express Entry, provincial nominee programs, Quebec-selected programs, family sponsorship, and business immigration. Eligibility criteria differ, and an assessment or consultation cannot guarantee an invitation or application approval.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Consultation can help you identify the criteria to check, organize supporting documents, and understand the next steps for a route. The service scope and follow-up process should be confirmed before you engage us.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  The relevant Canadian authority assesses each application and makes the final decision. We aim to explain the process clearly and set realistic expectations at each stage.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Contact us to discuss which Canadian permanent residence options may be relevant to your circumstances.
                </p>

              </div>

              {/* Video on Right */}
              <div className="relative">
                <video
                  ref={canadaVideoRef}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  controls
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/videoScreenshots/canada.png"
                >
                  <source src="/videos/canada.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>

             
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Australia Program Overview Section */}
      <section id="australia-overview" className="py-24 bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Australia Program Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video on Right */}
              <div className="relative">
                <video
                  ref={australiaVideoRef}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  controls
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/videoScreenshots/australia.png"
                >
                  <source src="/videos/australia.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>

               
              </div>
              {/* Content on Left */}
              <div className="space-y-8">
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Navigator Immigration provides consultation support for skilled professionals and families exploring Australian permanent residence options. We can help review occupation, points, skills-assessment and nomination considerations, while eligibility and invitation decisions remain with the relevant assessing bodies and government authorities.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  We can discuss points-tested options such as subclasses 189, 190, and 491, and identify occupation, skills-assessment, points, and nomination criteria to verify. An expression of interest or consultation does not guarantee an invitation or visa grant.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  The support available may include route comparison, document planning, and explaining the application stages. Confirm the scope of assistance before engagement and follow the official Home Affairs and assessing-authority instructions.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Australian assessing bodies, state or territory governments, and Home Affairs make decisions under their own criteria. We can help you understand the process and prepare questions or documents for your chosen route.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Contact us to discuss which Australian skilled migration options may be relevant to your circumstances.
                </p>


              </div>


            </div>
          </div>
        </div>
      </section>
      {/* New Zealand Program Overview Section */}
      <section id="newzealand-overview" className="py-24 bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">New Zealand Program Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-white mb-6">New Zealand Immigration</h3>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  New Zealand has work and residence visa categories with different eligibility rules. Depending on the route, relevant factors may include a job offer, employer accreditation, occupation, qualifications, work experience, pay, health, and character. Check Immigration New Zealand guidance for the visa that matches your circumstances.
                </p>
                <h3 className="text-3xl font-semibold text-white mb-6">Accredited Employer Work Visa (AEWV) – New Zealand</h3>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  The Accredited Employer Work Visa (AEWV) may be available to applicants with an eligible job offer from an accredited employer, subject to the current job-check, role, and applicant requirements.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Employer accreditation is only one part of the process. The job and applicant must also meet current Immigration New Zealand requirements, and an AEWV does not by itself guarantee eligibility for residence.
                </p>


              </div>

              {/* Video on Right */}
              <div className="relative">
                <video
                  ref={newzealandVideoRef}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  controls
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/videoScreenshots/nz.png"
                >
                  <source src="/videos/nz.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>

                {/* Video Overlay Info */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-24 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8 text-center">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Basic Eligibility</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Age: limits depend on the specific program and application stage</li>
                    <li>Language: test, level, and evidence depend on the program</li>
                    <li>Education: qualifications and assessment requirements vary by route</li>
                    <li>Work experience: occupation, duration, and type of experience vary by route</li>
                  </ul>
                </div>
                <div className="bg-[#436175]/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Documentation</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Valid passport</li>
                    <li>Credential or skills assessment, if required by the program</li>
                    <li>Language evidence that meets the relevant program rules</li>
                    <li>Work experience letters</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#436175]/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Financial Requirements</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Proof of funds only where required by the specific route</li>
                    <li>Family-related financial evidence, if required</li>
                    <li>Application fees</li>
                    <li>Medical examination costs</li>
                  </ul>
                </div>
                <div className="bg-[#436175]/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Additional Criteria</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Police or character checks as required by the authority</li>
                    <li>Medical examinations if required</li>
                    <li>Security, identity, or biometrics steps if requested</li>
                    <li>Professional registration or licensing, if required for the occupation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#436175] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-2">Permanent Residency</h3>
                <p className="text-[#585a5e]">Residence rights begin only if an application is approved; citizenship has separate requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#436175] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-2">Family Sponsorship</h3>
                <p className="text-[#585a5e]">Some routes allow eligible family members to be included; check the rules for your program.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#436175] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-2">Global Mobility</h3>
                <p className="text-[#585a5e]">Travel and work rights depend on the country granting residence and its conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">How to Get Skilled Visa</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Use a structured five-step process to assess and prepare a skilled migration application
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: 1,
                  title: "Eligibility Check",
                  description: "Review route-specific age, occupation, education, language, and work criteria",
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "muted"
                },
                {
                  step: 2,
                  title: "Document Prep",
                  description: "Use the official checklist for your route to organize the required evidence",
                  icon: <FileText className="w-8 h-8" />,
                  color: "muted"
                },
                {
                  step: 3,
                  title: "Application",
                  description: "Submit through the relevant official process if you meet the route requirements",
                  icon: <Shield className="w-8 h-8" />,
                  color: "muted"
                },
                {
                  step: 4,
                  title: "Medical & Security",
                  description: "Complete medical, character, or biometrics steps if requested",
                  icon: <Users className="w-8 h-8" />,
                  color: "muted"
                },
                {
                  step: 5,
                  title: "Authority decision",
                  description: "The relevant authority assesses the application and issues a decision",
                  icon: <Award className="w-8 h-8" />,
                  color: "muted"
                }
              ].map((item, index) => (
                <div key={index} className="relative h-full">
                  <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex h-full flex-col items-center text-center">
                      <div className="w-16 h-16 bg-[#436175] rounded-full flex items-center justify-center mb-6">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8C857A] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-[#8C857A] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] text-white font-semibold rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {seoPage.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-accent-orange-red to-muted-brown-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Start Your Journey Today</h2>
            <p className="text-xl mb-8">Get a free assessment and personalized consultation</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] text-white font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Based in", value: "Dubai", icon: <Users className="w-8 h-8" /> },
                { label: "Core Destinations", value: "3", icon: <Award className="w-8 h-8" /> },
                { label: "Planning Focus", value: "Eligibility + Documents", icon: <Clock className="w-8 h-8" /> },
                { label: "Office", value: "Dubai", icon: <MapPin className="w-8 h-8" /> }
              ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 muted-brown-grey rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f5f5dc] transition-colors duration-300">
                  <div className="text-muted-brown-grey group-hover:text-muted-brown-grey transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Assessment Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get Your Free Assessment</h2>
                <p className="text-xl text-gray-600">
                  Take the first step towards your skilled immigration journey
                </p>
              </div>
              <QuickAssessmentForm
                title="Skilled Immigration Assessment"
                subtitle="Find out your eligibility in 24 hours"
                serviceType="skilled"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Canada PR Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Canada PR</h2>
              </div>

              <motion.h3
                className="text-2xl font-semibold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Canada Express Entry
              </motion.h3>
              <p className="text-lg text-gray-600 mb-6">
                Express Entry manages applications for the Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program, as well as some provincial nominee streams. Applicants who meet a program's eligibility criteria may create a profile; selection is competitive and does not guarantee an invitation or permanent residence.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f5f5dc] mr-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Federal Skilled Worker Program (FSW)</h4>
                    </div>
                  </h4>
                  <p className="text-gray-600 text-sm">For eligible skilled workers who meet the program criteria</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f5f5dc] mr-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Canadian Experience Class (CEC)</h4>
                    </div>
                  </h4>
                  <p className="text-gray-600 text-sm">For applicants who meet the Canadian work-experience criteria</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#f5f5dc] mr-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Federal Skilled Trades Program</h4>
                    </div>
                  </h4>
                  <p className="text-gray-600 text-sm">For eligible tradespeople who meet the program's current criteria</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements & Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#f5f5dc] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Language threshold depends on the Express Entry program</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#f5f5dc] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Education assessment when required for the program</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Citizenship requires a separate application and eligibility</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Public health coverage eligibility varies by province and status</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/img/images/canada.jpeg"
                  alt="Canada Immigration"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 608px, (max-width: 1023px) 736px, (max-width: 1279px) 464px, 592px"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Start Your Canadian Journey</h3>
                  <p className="text-blue-100">Review the current requirements and plan your next steps</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Canada PR Planning Factors</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Language testing</span>
                    <span className="font-semibold text-gray-900">IELTS or equivalent</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Education review</span>
                    <span className="font-semibold text-[#f5f5dc]">ECA planning</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Profile strategy</span>
                    <span className="font-semibold text-gray-900">Express Entry or PNP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Family inclusion</span>
                    <span className="font-semibold text-blue-600">Depends on route</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                Discuss Canada or Australia skilled migration options and the criteria that may apply to your profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] text-white font-semibold rounded-lg hover:bg-[rgb(247,55,24)] hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/immigration/blog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] text-white font-semibold rounded-lg hover:bg-[rgb(247,55,24)] hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Read Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {seoPage.table ? (
        <ComparisonTable title="Skilled Immigration Comparison" table={seoPage.table} />
      ) : null}
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div>
  );
}
