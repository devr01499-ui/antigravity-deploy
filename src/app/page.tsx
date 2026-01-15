"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Globe,
  Users,
  Zap,
  ShieldCheck,
  Headphones,
  BarChart3,
  Rocket,
  CheckCircle,
  Clock,
  Briefcase,
  Phone,
  MessageSquare,
  FileText,
  CreditCard,
  Search
} from "lucide-react";

const stats = [
  { label: "Global Presence", value: "20+ Countries" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Cost Savings", value: "Up to 60%" },
  { label: "Support", value: "24/7/365" },
];

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Omnichannel support (Voice, Chat, Email) delivering exceptional customer experiences.",
    href: "/services/customer-support"
  },
  {
    icon: CreditCard,
    title: "Finance & Accounting",
    description: "End-to-end financial operations, from bookkeeping to strategic FP&A.",
    href: "/services/finance-accounting"
  },
  {
    icon: Search,
    title: "Sales & Lead Gen",
    description: "Data-driven strategies to accelerate your pipeline and revenue growth.",
    href: "/services/sales-lead-generation"
  },
  {
    icon: Briefcase,
    title: "Back Office",
    description: "Streamlined administrative workflows including data entry and processing.",
    href: "/services/back-office"
  },
  {
    icon: Users,
    title: "Recruitment (RPO)",
    description: "Scalable talent acquisition solutions to build your dream team globally.",
    href: "/services/recruitment-rpo"
  },
  {
    icon: Rocket,
    title: "AI & Data Solutions",
    description: "Leveraging cutting-edge AI for data annotation, training, and automation.",
    href: "/services/ai-data"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020205] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-8 border-indigo-500/30 bg-indigo-500/10 text-indigo-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
              Global BPO Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
              Elevate Your Operations <br />
              <span className="text-gradient">with AdmirerX</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium">
              We combine world-class talent, innovative technology, and process excellence to drive growth and efficiency for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                <Link href="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/10 px-8 h-14 font-bold">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-bold text-white mb-1 font-display">{stat.value}</p>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold text-[10px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Comprehensive <span className="text-gradient">Solutions</span></h2>
            <p className="text-white/40">Tailored outsourcing strategies designed to scale with your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="glass-card p-8 h-full relative z-10 hover:border-indigo-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">The AdmirerX Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Why Leaders Choose <br /><span className="text-gradient">AdmirerX</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Technology Driven", desc: "Integration of AI and automation for maximum efficiency." },
                  { title: "Human Centric", desc: "Highly skilled professionals trained in empathy and problem solving." },
                  { title: "Data Secure", desc: "Enterprise-grade security protocols and compliance standards." },
                  { title: "Scalable Growth", desc: "Flexible engagement models that grow with your business." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-1 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <Globe className="w-24 h-24 text-indigo-400 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Global Delivery Network</h3>
                <p className="text-white/50">Connecting you with talent across the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to Scale Your Business?</h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-10 font-medium">
                Join hundreds of forward-thinking companies optimizing their operations with AdmirerX.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-10 h-14 font-bold">
                  <Link href="/contact">Partner With Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-full text-white hover:bg-white/5 px-10 h-14 font-bold">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
