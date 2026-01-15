"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction, delivering exceptional results.",
  },
  {
    icon: Users,
    title: "People First",
    description: "Our team members are our greatest asset. We invest in their growth and success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace change and continuously innovate to stay ahead of industry trends.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with the highest ethical standards and transparency in all we do.",
  },
];

const leaders = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rohit Kumar Sah",
    role: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kaushik Brahma",
    role: "Co-Founder & CHRO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Abhishek Kohli",
    role: "Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    description: "AdmirerX launches with a bold vision to revolutionize business process outsourcing through AI-powered technology.",
  },
  {
    phase: "Phase 2",
    title: "Infrastructure Setup",
    description: "Building state-of-the-art technology infrastructure and assembling a world-class team of BPO and AI experts.",
  },
  {
    phase: "Phase 3",
    title: "AI Platform Launch",
    description: "Deploying our proprietary AI platform to deliver intelligent automation and enhanced service delivery.",
  },
  {
    phase: "Phase 4",
    title: "Market Entry",
    description: "Launching services across key industries with focus on excellence, innovation, and customer success.",
  },
  {
    phase: "Phase 5",
    title: "Scale & Growth",
    description: "Expanding team capabilities and service offerings to meet growing client demand.",
  },
  {
    phase: "Phase 6",
    title: "Industry Leadership",
    description: "Establishing AdmirerX as a leader in AI-powered business transformation and intelligent outsourcing.",
  },
];

const stats = [
  { value: "2025", label: "Launched" },
  { value: "100%", label: "Commitment" },
  { value: "AI-First", label: "Approach" },
  { value: "Ready", label: "To Serve" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="BPO Team Collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-8 text-white">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-10 text-white">
              We Admire
              <br />
              Your <span className="text-gradient">Dreams</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              AdmirerX is a top BPO and recruitment company in India that combines deep industry expertise with cutting-edge technology and AI to deliver innovative, digital-first solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">Our Core</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Our Mission & <span className="text-gradient">Values</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              We exist to transform businesses through the perfect blend of human talent and AI innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-24 mb-24 relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-6 font-display">Our Mission</h3>
                <p className="text-white/60 text-xl leading-relaxed font-medium">
                  To empower businesses worldwide by delivering exceptional outsourcing services that combine the irreplaceable value of human connection with the transformative power of artificial intelligence. We&apos;re committed to creating meaningful careers, driving innovation, and helping our clients achieve sustainable growth in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mb-24">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 text-center mb-16">Our Shared Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-10 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <value.icon className="w-7 h-7 text-white/70" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-display">{value.title}</h4>
                  <p className="text-white/50 leading-relaxed font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">The Team</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Meet Our <span className="text-gradient">Leaders</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              Visionaries driving innovation and excellence at AdmirerX.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-8 rounded-3xl overflow-hidden border border-white/10 transition-transform duration-700 shadow-[0_0_20px_rgba(255,255,255,0.05)] isolate">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-all duration-700 will-change-transform hover:scale-105"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight font-display">{leader.name}</h4>
                <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-6">{leader.role}</p>
                <button className="px-6 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest glass">
                  Profile <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">The Path</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Our <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              A clear vision for growth, innovation, and transformation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden lg:block" />
            
            <div className="space-y-12">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`glass-card p-10 inline-block group relative ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6">
                          {item.phase}
                        </span>
                        <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                        <p className="text-white/50 text-base leading-relaxed font-medium max-w-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black relative z-10 hidden lg:block shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-25" />
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-white/40 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-24 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5 font-bold font-display mb-10 leading-[1.1]">
                Ready to <span className="text-gradient">Partner</span> with Us?
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-16 text-xl font-medium">
                Join us in transforming business operations with AI-driven solutions and world-class talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 glass"
                >
                  <Link href="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
