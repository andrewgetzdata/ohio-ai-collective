import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Target, Users, Zap, Globe, ArrowRight, ExternalLink } from "lucide-react";
import HeroAmbient from "../components/home/HeroAmbient";
import { usePartners } from "@/hooks/useLocalData";
import { useJobs } from "@/hooks/useLocalData";
import { useEvents } from "@/hooks/useLocalData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "THIS IS ROY GETS HIS PLACE";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);

  const { data: partners } = usePartners();
  const { data: jobs } = useJobs("", "");
  const { data: events } = useEvents("", "");

  const initiatives = [
    {
      icon: Zap,
      title: "AI Innovation",
      description: "Pushing the boundaries of what's possible with artificial intelligence in the heartland",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with 300+ builders, researchers, and innovators across Ohio",
    },
    {
      icon: Globe,
      title: "Open & Decentralized",
      description: "Building open AI infrastructure for local innovation and growth",
    },
  ];

  const stats = [
    { label: "Community Members", value: "300+" },
    { label: "Events Hosted", value: "20+" },
    { label: "Event Types", value: "4+" },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroAmbient />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium mb-8 rounded-full glass"
              style={{ letterSpacing: '0.12em', fontFamily: 'Geist Mono, monospace' }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              OHIO AI COLLECTIVE
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span
                className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-cyan-400 ml-2 rounded-full"
                style={{ verticalAlign: 'middle', animation: 'blink 1s infinite' }}
              />
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed" style={{ fontFamily: 'Geist Mono, monospace' }}>
              The largest community of AI and data professionals in Ohio.
              Learn, grow, and build together.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://ohioaicollective.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                  Subscribe to Newsletter
                </button>
              </a>
              <a href="#about">
                <button className="px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider glass glass-hover text-white/80 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(230,15%,8%)] to-transparent" />
      </section>

      {/* ===== ABOUT / INITIATIVES ===== */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto" style={{ fontFamily: 'Geist Mono, monospace' }}>
              Building the future of AI in Ohio through community, education, and open innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl glass glass-hover transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <item.icon className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Geist Mono, monospace' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-widest" style={{ fontFamily: 'Geist Mono, monospace' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section id="mission" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Built by the community,
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  for the community
                </span>
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Ohio AI Collective is a thriving community where professionals connect, learn, and grow together.
                We create inclusive spaces for knowledge sharing, skill building, and meaningful collaboration.
              </p>
              <ul className="space-y-4">
                {[
                  "Connect with industry experts and peers",
                  "Access exclusive learning opportunities",
                  "Find your next career opportunity",
                  "Contribute and give back to the community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-sm" style={{ fontFamily: 'Geist Mono, monospace' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Community collaboration"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,15%,8%)] via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      {events.length > 0 && (
        <section id="events" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Upcoming Events
                </span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Lightning talks, ship sessions, and partner events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden glass glass-hover transition-all duration-300 group"
                >
                  {event.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img src={event.image_url} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" style={{ fontFamily: 'Geist Mono, monospace' }}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-white/40 text-sm mb-3" style={{ fontFamily: 'Geist Mono, monospace' }}>
                      {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    {event.location && (
                      <p className="text-white/30 text-xs" style={{ fontFamily: 'Geist Mono, monospace' }}>
                        {event.location}
                      </p>
                    )}
                    {event.meeting_url && (
                      <a href={event.meeting_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                        RSVP <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== JOBS ===== */}
      {jobs.length > 0 && (
        <section id="jobs" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Open Positions
                </span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Find your next role in Ohio's AI and data ecosystem
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {jobs.slice(0, 5).map((job, index) => (
                <motion.a
                  key={job.title + job.company}
                  href={job.application_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="block p-6 rounded-2xl glass glass-hover transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {job.company_logo && (
                        <img src={job.company_logo} alt={job.company} className="w-10 h-10 rounded-lg object-contain bg-white/10 p-1" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                        <p className="text-white/40 text-sm" style={{ fontFamily: 'Geist Mono, monospace' }}>
                          {job.company} &middot; {job.job_type}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                      {job.salary_range && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20" style={{ fontFamily: 'Geist Mono, monospace' }}>
                          {job.salary_range}
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                  {job.role_summary && (
                    <p className="text-white/30 text-sm mt-3 line-clamp-2" style={{ fontFamily: 'Geist Mono, monospace' }}>
                      {job.role_summary}
                    </p>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PARTNERS ===== */}
      {partners.length > 0 && (
        <section id="partners" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Our Partners
                </span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {partners.map((partner) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center"
                >
                  {partner.website_url ? (
                    <a href={partner.website_url} target="_blank" rel="noopener noreferrer" className="group">
                      <img
                        src={partner.logo_url}
                        alt={partner.name}
                        className="h-16 md:h-24 w-auto object-contain opacity-50 group-hover:opacity-90 transition-all duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                      />
                    </a>
                  ) : (
                    <img
                      src={partner.logo_url}
                      alt={partner.name}
                      className="h-16 md:h-24 w-auto object-contain opacity-50 brightness-0 invert"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
