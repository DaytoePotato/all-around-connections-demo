"use client";

import { useState } from "react";

// Cyber Tech Icons
const NetworkIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

// Animated Background Component
function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--background)]"></div>
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse"></div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-14 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg animate-pulse-glow"></div>
              <div className="absolute inset-0.5 bg-[var(--background)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--primary)] font-bold text-lg font-mono">&lt;/&gt;</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-[var(--foreground)]">All Around</span>
              <span className="font-bold text-xl text-[var(--primary)]"> Connections</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--muted)] hover:text-[var(--primary)] font-medium transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Initialize
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--primary)]"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--border)] mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[var(--muted)] hover:text-[var(--primary)] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary inline-block mt-4" onClick={() => setIsOpen(false)}>
              Initialize
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
    <section id="home" className="relative pt-40 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 mb-6">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full mr-2 animate-pulse"></span>
              <span className="text-[var(--primary)] font-mono text-sm">SYSTEM_ONLINE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Next-Gen Digital{" "}
              <span className="neon-text">Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] mb-8 leading-relaxed font-light">
              Deploying cutting-edge web solutions, secure hosting environments, and enterprise networking systems.
              Your digital transformation starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center font-mono">
                {">"} START_PROJECT
              </a>
              <a href="#services" className="btn-secondary text-center font-mono">
                {">"} VIEW_SERVICES
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)] font-mono">15+</div>
                <div className="text-xs text-[var(--muted)] font-mono uppercase tracking-wider">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--secondary)] font-mono">200+</div>
                <div className="text-xs text-[var(--muted)] font-mono uppercase tracking-wider">Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] font-mono">99.9%</div>
                <div className="text-xs text-[var(--muted)] font-mono uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="glass-card p-6 animate-pulse-glow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-[var(--muted)] text-sm font-mono">terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-[var(--muted)]">$ initializing system...</p>
                  <p className="text-[var(--accent)]">+ Loading modules</p>
                  <p className="text-[var(--accent)]">+ Connecting to network</p>
                  <p className="text-[var(--accent)]">+ Security protocols active</p>
                  <p className="text-[var(--primary)]">{">"} System ready_</p>
                  <p className="text-[var(--foreground)] mt-4">
                    <span className="text-[var(--secondary)]">const</span> solution = <span className="text-[var(--accent)]">await</span> buildYour<span className="text-[var(--primary)]">Website</span>();
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--accent)]/20 rounded flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                  <div>
                    <p className="text-[var(--accent)] text-xs font-mono">SECURE</p>
                    <p className="text-[var(--foreground)] text-sm font-semibold">256-bit SSL</p>
                  </div>
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
      icon: <CodeIcon />,
      title: "Web Development",
      description: "Custom-built responsive websites using modern frameworks. Clean code, fast performance, optimal UX.",
      features: ["React/Next.js", "TypeScript", "API Integration", "PWA Support"],
      color: "var(--primary)",
    },
    {
      icon: <ServerIcon />,
      title: "Cloud Hosting",
      description: "Enterprise-grade hosting with 99.9% uptime SLA. Scalable infrastructure for any demand.",
      features: ["Auto-Scaling", "CDN Global", "DDoS Protection", "Daily Backups"],
      color: "var(--secondary)",
    },
    {
      icon: <NetworkIcon />,
      title: "Network Systems",
      description: "End-to-end network architecture design and implementation for businesses of all sizes.",
      features: ["VLAN Setup", "Firewall Config", "VPN Solutions", "Monitoring"],
      color: "var(--accent)",
    },
    {
      icon: <ShieldIcon />,
      title: "Cyber Security",
      description: "Comprehensive security audits and implementation to protect your digital assets.",
      features: ["Pen Testing", "SSL/TLS", "2FA Setup", "Compliance"],
      color: "var(--primary)",
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--primary)] font-mono text-sm mb-2">// SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Technology <span className="neon-text">Solutions</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Full-stack digital services engineered for performance, security, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card group relative overflow-hidden">
              <div className="corner-accent top-left"></div>
              <div className="corner-accent top-right"></div>
              <div className="corner-accent bottom-left"></div>
              <div className="corner-accent bottom-right"></div>

              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  color: service.color
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 font-mono">{service.title}</h3>
              <p className="text-[var(--muted)] mb-6 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span style={{ color: service.color }}><CheckIcon /></span>
                    <span className="font-mono">{feature}</span>
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
  const stats = [
    { value: "99.9%", label: "Uptime Guarantee", color: "var(--accent)" },
    { value: "<2hr", label: "Response Time", color: "var(--primary)" },
    { value: "24/7", label: "Support Active", color: "var(--secondary)" },
    { value: "50+", label: "Projects/Year", color: "var(--primary)" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--primary)] font-mono text-sm mb-2">// ABOUT_US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Why <span className="neon-text">All Around Connections</span>?
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              We are a team of technology enthusiasts dedicated to delivering cutting-edge digital solutions.
              From concept to deployment, we engineer systems that scale, perform, and secure your business operations.
            </p>

            <div className="space-y-4">
              {[
                { title: "Modern Tech Stack", desc: "We use the latest frameworks and tools" },
                { title: "Security First", desc: "Every solution is built with security in mind" },
                { title: "Scalable Architecture", desc: "Systems designed to grow with your business" },
                { title: "Dedicated Support", desc: "24/7 monitoring and rapid response" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] font-mono">{item.title}</h4>
                    <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card text-center group hover:border-[var(--primary)]">
                <div
                  className="text-4xl font-bold font-mono mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[var(--muted)] text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Tech Stack Section
function TechStackSection() {
  const technologies = [
    { name: "React", icon: <CodeIcon /> },
    { name: "Next.js", icon: <CodeIcon /> },
    { name: "Node.js", icon: <ServerIcon /> },
    { name: "AWS", icon: <CloudIcon /> },
    { name: "Docker", icon: <ChipIcon /> },
    { name: "TypeScript", icon: <CodeIcon /> },
  ];

  return (
    <section id="tech" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--primary)] font-mono text-sm mb-2">// TECH_STACK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Powered By <span className="neon-text">Modern Tech</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            We leverage industry-leading technologies to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="glass-card text-center py-8 group hover:border-[var(--primary)] cursor-pointer"
            >
              <div className="text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors mb-3 flex justify-center">
                {tech.icon}
              </div>
              <p className="font-mono text-sm text-[var(--foreground)]">{tech.name}</p>
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[var(--primary)] font-mono text-sm mb-2">// CONTACT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Initialize <span className="neon-text">Connection</span>
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              Ready to upgrade your digital infrastructure? Send us a transmission and let&apos;s build something amazing.
            </p>

            <div className="space-y-6">
              {[
                { icon: <PhoneIcon />, label: "Voice Link", value: "(555) 123-4567" },
                { icon: <EmailIcon />, label: "Data Transfer", value: "demo@example.com" },
                { icon: <LocationIcon />, label: "Base Station", value: "Your Local Tech Partner" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[var(--muted)] text-xs font-mono uppercase">{item.label}</p>
                    <p className="text-[var(--foreground)] font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card relative">
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full border-2 border-[var(--accent)] flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2 font-mono">TRANSMISSION_RECEIVED</h3>
                <p className="text-[var(--muted)]">We&apos;ll respond within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[var(--primary)] font-mono hover:underline"
                >
                  {">"} SEND_ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-mono text-[var(--muted)] mb-2">NAME_</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-[var(--muted)] mb-2">EMAIL_</label>
                    <input
                      type="email"
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
                    <label className="block text-sm font-mono text-[var(--muted)] mb-2">PHONE_</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-[var(--muted)] mb-2">SERVICE_</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select...</option>
                      <option value="web-dev">Web Development</option>
                      <option value="hosting">Cloud Hosting</option>
                      <option value="network">Network Systems</option>
                      <option value="security">Cyber Security</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-mono text-[var(--muted)] mb-2">MESSAGE_</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Describe your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary font-mono disabled:opacity-50"
                >
                  {isSubmitting ? "PROCESSING..." : "> TRANSMIT_DATA"}
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
    <footer className="border-t border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg"></div>
                <div className="absolute inset-0.5 bg-[var(--background)] rounded-lg flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold text-lg font-mono">&lt;/&gt;</span>
                </div>
              </div>
              <span className="font-bold text-xl text-[var(--foreground)]">All Around Connections</span>
            </div>
            <p className="text-[var(--muted)] mb-6 max-w-md text-sm">
              Your trusted technology partner for web development, cloud hosting, networking solutions, and cyber security.
            </p>
            <div className="flex gap-4">
              {["X", "GH", "LI"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors font-mono text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[var(--primary)] mb-4">NAVIGATION</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Tech Stack", "Contact"].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[var(--primary)] mb-4">SERVICES</h4>
            <ul className="space-y-3">
              {["Web Development", "Cloud Hosting", "Network Systems", "Cyber Security"].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cyber-line my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)] text-sm font-mono">
            &copy; {currentYear} All Around Connections. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] text-sm transition-colors">Privacy</a>
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="relative">
      <CyberBackground />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
