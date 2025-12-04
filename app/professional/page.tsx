"use client";

import { useState } from "react";

// Icons as SVG components
const NetworkIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const WebDesignIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const HostingIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-[var(--primary)] opacity-20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-14 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-[var(--foreground)]">All Around</span>
              <span className="font-bold text-xl text-[var(--primary)]"> Connections</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--muted)] hover:text-[var(--primary)] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground)]"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[var(--muted)] hover:text-[var(--primary)] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary inline-block mt-4" onClick={() => setIsOpen(false)}>
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="pt-40 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[var(--surface)] via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-6">
              <span className="text-[var(--primary)] font-semibold text-sm">Your Technology Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Connecting Your Business to{" "}
              <span className="gradient-text">Success</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] mb-8 leading-relaxed">
              From professional website design to reliable hosting and comprehensive networking solutions,
              we provide the technology foundation your business needs to thrive in today&apos;s digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Start Your Project
              </a>
              <a href="#services" className="btn-secondary text-center">
                Explore Services
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-[var(--primary)]">15+</div>
                <div className="text-sm text-[var(--muted)]">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-[var(--border)]"></div>
              <div>
                <div className="text-3xl font-bold text-[var(--primary)]">200+</div>
                <div className="text-sm text-[var(--muted)]">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-[var(--border)]"></div>
              <div>
                <div className="text-3xl font-bold text-[var(--primary)]">99%</div>
                <div className="text-sm text-[var(--muted)]">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-4 bg-[var(--surface)] rounded w-3/4"></div>
                <div className="h-32 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-lg flex items-center justify-center">
                  <NetworkIcon />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-[var(--surface)] rounded w-full"></div>
                  <div className="h-3 bg-[var(--surface)] rounded w-5/6"></div>
                  <div className="h-3 bg-[var(--surface)] rounded w-4/6"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 bg-[var(--primary)] rounded flex-1"></div>
                  <div className="h-8 bg-[var(--surface)] rounded flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <WebDesignIcon />,
      title: "Website Design",
      description: "Custom, responsive websites that capture your brand identity and convert visitors into customers. Modern designs optimized for all devices.",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: <HostingIcon />,
      title: "Web Hosting",
      description: "Reliable, secure hosting solutions with 99.9% uptime guarantee. Keep your website running smoothly around the clock.",
      features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Monitoring"],
    },
    {
      icon: <NetworkIcon />,
      title: "Networking Solutions",
      description: "Professional network setup and management for businesses of all sizes. Secure, efficient, and scalable infrastructure.",
      features: ["Network Design", "Security Setup", "VPN Solutions", "Cloud Integration"],
    },
    {
      icon: <SupportIcon />,
      title: "IT Support",
      description: "Dedicated technical support when you need it most. Our experts are ready to solve your technology challenges quickly.",
      features: ["Remote Support", "On-Site Service", "Help Desk", "Maintenance"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-4">
            <span className="text-[var(--primary)] font-semibold text-sm">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            We provide end-to-end services to help your business succeed in the digital landscape.
            From design to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-xl flex items-center justify-center text-[var(--primary)] mb-6 group-hover:from-[var(--primary)] group-hover:to-[var(--secondary)] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{service.title}</h3>
              <p className="text-[var(--muted)] mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const reasons = [
    {
      title: "Experienced Team",
      description: "Our seasoned professionals bring decades of combined experience to every project.",
    },
    {
      title: "Personalized Service",
      description: "We take time to understand your unique needs and deliver tailored solutions.",
    },
    {
      title: "Reliable Support",
      description: "Count on us for ongoing support and maintenance long after project completion.",
    },
    {
      title: "Competitive Pricing",
      description: "Quality services at fair prices, with transparent quotes and no hidden fees.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-4">
              <span className="text-[var(--primary)] font-semibold text-sm">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Why Choose All Around Connections?
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              All Around Connections is here to help you and your business succeed. We understand that
              technology can be overwhelming, which is why we&apos;re committed to making it simple and accessible.
              Whether you need a stunning website, reliable hosting, or comprehensive networking solutions,
              we&apos;ve got you covered.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-1">{reason.title}</h4>
                    <p className="text-sm text-[var(--muted)]">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[var(--secondary)]/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">AC</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)]">All Around Connections</h3>
                <p className="text-[var(--muted)]">Your Technology Partner</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[var(--surface)] rounded-lg">
                  <span className="text-[var(--muted)]">Client Retention Rate</span>
                  <span className="font-bold text-[var(--primary)]">95%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[var(--surface)] rounded-lg">
                  <span className="text-[var(--muted)]">Average Response Time</span>
                  <span className="font-bold text-[var(--primary)]">&lt; 2 Hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[var(--surface)] rounded-lg">
                  <span className="text-[var(--muted)]">Projects This Year</span>
                  <span className="font-bold text-[var(--primary)]">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Small Business Owner",
      content: "All Around Connections transformed our online presence. Our new website is not only beautiful but has significantly increased our customer inquiries. Highly recommended!",
    },
    {
      name: "David Chen",
      role: "Restaurant Manager",
      content: "The team was professional from start to finish. They understood our vision and delivered a website that perfectly represents our brand. The ongoing support has been exceptional.",
    },
    {
      name: "Jennifer Adams",
      role: "Real Estate Agent",
      content: "I was struggling with my network setup for months. All Around Connections solved all my issues in one visit. Now everything runs smoothly and securely.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-4">
            <span className="text-[var(--primary)] font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              <div className="absolute top-6 right-6">
                <QuoteIcon />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[var(--muted)] italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
              <span className="text-white font-semibold text-sm">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Let&apos;s discuss how we can help your business grow. Fill out the form or reach out directly.
              We&apos;d love to hear from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Call Us</p>
                  <p className="text-white font-semibold">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email Us</p>
                  <p className="text-white font-semibold">demo@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Visit Us</p>
                  <p className="text-white font-semibold">Your Local Technology Partner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Thank You!</h3>
                <p className="text-[var(--muted)]">We&apos;ll be in touch with you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[var(--primary)] font-semibold hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="website-design">Website Design</option>
                      <option value="web-hosting">Web Hosting</option>
                      <option value="networking">Networking Solutions</option>
                      <option value="it-support">IT Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <div>
                <span className="font-bold text-xl">All Around Connections</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted technology partner for website design, hosting, networking solutions,
              and IT support. We&apos;re here to help your business thrive.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Hosting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Networking</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">IT Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All Around Connections. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
