import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BookOpen, Globe, Users, Award, Star, FileText, Clock, Shield, Briefcase, GraduationCap } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import SectionAnchorNav from '@/components/SectionAnchorNav';
import {
  ComparisonTable,
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';

export default function StudentVisa() {
  const seoPage = coreSeoPages.studentVisa;
  const anchorPoints = [
    { id: 'overview', label: 'Program Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'destinations', label: 'Destinations', icon: <Globe className="w-4 h-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Star className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact-section', label: 'Contact', icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(67, 97, 117, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(88, 90, 94, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(67, 97, 117, 0.05) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      {/* Hero Section */}
      <section className="student-visa-hero relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="student-visa-hero-orb student-visa-hero-orb-one absolute top-20 left-10 w-72 h-72 bg-[#436175]/20 rounded-full blur-3xl" />
          <div className="student-visa-hero-orb student-visa-hero-orb-two absolute bottom-20 right-10 w-96 h-96 bg-[#436175]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="student-visa-hero-content max-w-4xl mx-auto text-center text-white">
            <h1 className="student-visa-hero-title text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {seoPage.h1}
            </h1>

            <p className="student-visa-hero-answer text-xl lg:text-2xl mb-8 text-surface-light/80 max-w-3xl mx-auto">
              {seoPage.answer}
            </p>

            <div className="student-visa-hero-actions flex flex-col sm:flex-row gap-4 justify-center">
              <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#436175]/10 text-white font-semibold rounded-lg hover:bg-muted-brown-grey transform hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Link
                  href="#destinations"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Anchor Navigation */}
      <SectionAnchorNav
        anchors={anchorPoints}
        navClassName="sticky z-30 bg-white border-b border-light-brown-grey shadow-sm top-48 lg:top-36"
        activeClassName="bg-gradient-to-r from-[#436175] to-[#585a5e] text-white"
        inactiveClassName="text-[#585a5e] hover:text-[#436175] hover:bg-[#f5f5dc]"
        ctaClassName="flex-shrink-0 inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-orange-600 to-gray-600 text-white font-medium rounded-lg hover:from-gray-600 hover:to-orange-600 transition-all duration-300 text-xs lg:text-sm"
      />

      {/* Program Overview Section */}
      <section id="overview" className="py-24 bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-5 text-center">Student Visa Program Overview</h2>
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Plan your study abroad options with clear, destination-specific information.</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Plan your study and visa applications with clear information on course selection, admissions and the requirements set by each destination.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Navigator Immigration Consultant helps students compare study options in Canada, the USA, the UK, Australia, New Zealand and Europe. Admission and visa rules differ by institution, destination, course and applicant.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  We can help you shortlist programs, organize documents and understand the published application steps. The institution decides admission and the immigration authority decides the visa; no adviser can guarantee either outcome.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  We offer consultation support for study options in several destinations:
                </p>
                <ul className="space-y-2 max-w-4xl mx-auto text-left list-disc list-inside">
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>Canada</strong> - Compare programs, study permit requirements and post-study rules.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>USA</strong> - Review F-1 requirements and institution-specific steps.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>UK</strong> - Review the Student route, CAS and current Graduate route rules.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>Australia</strong> - Check Subclass 500 requirements and the conditions for later work visas.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>New Zealand</strong> - Check current Student visa and course requirements.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>European countries</strong> - Compare national student visa routes; requirements are set country by country.
                  </li>
                </ul>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  We can support application preparation and planning. Only the relevant government authority can decide a visa application.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Our role is to help you compare study options, organize application information, and understand the published steps that apply to your plans.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Contact Navigator Immigration to discuss your study plans and the application steps you may need to confirm with your institution and destination authority.
                </p>


          

            
              </div>

              {/* Image on Right */}
              <div className="relative">
                <Image
                  src="/img/images/student-visa.jpeg"
                  alt="Student Visa Program Overview"
                  width="800"
                  height="500"
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 608px, (max-width: 1023px) 736px, (max-width: 1279px) 480px, 608px"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                </div>
                </div></div></div>

      </section>

      {/* Study Destinations Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare programs, institutions and entry requirements across study destinations
            </p>
          </div>

          {/* Featured Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56">
                <Image
                  src="/img/images/canada-new.jpg"
                  alt="Canada"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 608px, (max-width: 1023px) 736px, (max-width: 1279px) 480px, 608px"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">Study Permit Guide</span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl text-white font-bold mb-2">Canada</h3>
                  <p className="text-orange-100 text-lg">Study & Work Opportunities</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Designated institution</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Permit conditions apply</span>
                  </div>
                  <div className="flex items-center text-muted-brown-grey">
                    <GraduationCap className="w-5 h-5" />
                    <span className="ml-1 font-semibold">Study</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Check processing times</span>
                    <span className="flex items-center"><Globe className="w-4 h-4 mr-1" />North America</span>
                  </div>
                  <button className="text-muted-brown-grey hover:text-orange-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56">
                <Image
                  src="/img/images/pexels-samuel-wolfl-628277-1427573.jpg.jpeg"
                  alt="United Kingdom"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 608px, (max-width: 1023px) 736px, (max-width: 1279px) 480px, 608px"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full">Student Route Guide</span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl text-white font-bold mb-2">United Kingdom</h3>
                  <p className="text-orange-100 text-lg">Student Visa & Graduate Route</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">CAS required</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Visa conditions apply</span>
                  </div>
                  <div className="flex items-center text-muted-brown-grey">
                    <GraduationCap className="w-5 h-5" />
                    <span className="ml-1 font-semibold">Study</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Check processing times</span>
                    <span className="flex items-center"><Globe className="w-4 h-4 mr-1" />Europe</span>
                  </div>
                  <button className="text-muted-brown-grey hover:text-orange-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
                  </div></div></div>
      </section>

      {/* Student Visa Benefits Section */}
      <section id="benefits" className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#436175] mb-4">Student Visa Benefits</h2>
            <p className="text-xl text-[#585a5e] mb-8 max-w-3xl mx-auto">
              Discover the advantages of studying abroad with proper student visa authorization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-blue-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Find a Course That Fits</h3>
                <p className="text-[#585a5e] mb-4">Compare course content, entry criteria, campus location and fees with your academic background and plans.
                </p>
              </div>
            </div>

            <div className="text-center bg-orange-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Work Opportunities</h3>
                <p className="text-[#585a5e] mb-4">Some destinations allow eligible students to work during or after study, subject to visa and program conditions.
                </p>
              </div>
            </div>

            <div className="text-center bg-purple-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Global Exposure</h3>
                <p className="text-[#585a5e] mb-4">Experience diverse cultures, build international networks, and develop a global perspective.
                </p>
              </div>
            </div>

            <div className="text-center bg-orange-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Career Advancement</h3>
                <p className="text-[#585a5e] mb-4">Enhance your career prospects with international qualifications and experience.
                </p>
              </div>
            </div>

            <div className="text-center bg-red-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">PR Pathways</h3>
                <p className="text-[#585a5e] mb-4">Some graduates may qualify for later work or residence routes, but eligibility depends on the destination and rules in force at that time.
                </p>
              </div>
            </div>

            <div className="text-center bg-cyan-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Student Support</h3>
                <p className="text-[#585a5e] mb-4">Institutions may offer academic, wellbeing, and practical support; check what is available at your chosen school and location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Student Visa Application Process</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              A clear five-step process can help you plan your study and visa applications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: 1,
                  title: "Eligibility Check",
                  description: "Review your academic background, goals, budget, and suitable program options",
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 2,
                  title: "University Application",
                  description: "Prepare and submit applications to institutions that fit your plans",
                  icon: <BookOpen className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 3,
                  title: "Document Preparation",
                  description: "Check the current official checklist and organize documents for your case",
                  icon: <FileText className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 4,
                  title: "Visa Application",
                  description: "Submit your application through the relevant authority's official process",
                  icon: <Shield className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 5,
                  title: "Pre-Departure Support",
                  description: "Plan travel and arrival after your permission and institution instructions are confirmed",
                  icon: <Award className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                }
              ].map((item, index) => (
                <div key={index} className="relative h-full">
                  <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex h-full flex-col items-center text-center">
                      <div className={`w-16 h-16 bg-${item.color} rounded-full flex items-center justify-center mb-6`}>
                        <div className={`text-${item.color}-600`}>
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-xl hover:from-[#436175] hover:to-[#585a5e] transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Student Visa Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Visa Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Requirements differ by destination, course, and applicant. These are examples to check against the current official checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Essential Documents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Valid Passport</span>
                    <p className="text-gray-600 text-sm">Check the destination's passport validity rules and planned stay</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Letter of Acceptance</span>
                    <p className="text-gray-600 text-sm">For destinations and programs that require an institutional acceptance document</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Academic Transcripts</span>
                    <p className="text-gray-600 text-sm">Previous educational qualifications</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Language Proficiency</span>
                    <p className="text-gray-600 text-sm">If required by the institution or visa route; accepted tests and scores vary</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                Financial & Supporting Documents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Proof of Funds</span>
                    <p className="text-gray-600 text-sm">Evidence and required amounts depend on the destination and your circumstances</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Medical Certificate</span>
                    <p className="text-gray-600 text-sm">Only when required for your application or destination</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Police Clearance</span>
                    <p className="text-gray-600 text-sm">Only when requested by the relevant authority</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Statement of Purpose</span>
                    <p className="text-gray-600 text-sm">If required; follow the institution's or authority's instructions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us for Student Visa Assistance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discuss your student visa plans with our team
            </p>
          </div>

          <div className="flex justify-center items-center">
            <QuickAssessmentForm
              title="Student Visa Assessment"
              subtitle="Discover your study abroad options"
              serviceType="student"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent-orange-red to-muted-brown-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Educational Journey Abroad
          </h2>
          <p className="text-xl text-black-900 mb-8 max-w-2xl mx-auto">
            Get structured support for study-abroad admissions, student visa documents, and next-step planning from our Dubai team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-bg-orange-100 transform hover:scale-105 transition-all duration-300"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/visit-visa"
              className="inline-flex items-center justify-center px-8 py-4 border-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-bg-orange-100 transform hover:scale-105 transition-all duration-300"
            >
              Looking for Visit Visa?
            </Link>
          </div>
        </div>
      </section>
      {seoPage.table ? (
        <ComparisonTable title="Student Visa Comparison" table={seoPage.table} />
      ) : null}
      <FaqSection items={seoPage.faqs} />
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div>
  );
}
