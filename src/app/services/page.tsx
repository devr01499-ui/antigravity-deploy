"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  FileText,
  TrendingUp,
  Calculator,
  Users,
  Bot,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Zap,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Customer Support & Contact Center Solutions",
    description: "Customer support outsourcing in India with 24×7 multilingual call center services through voice, email, chat, and social media. Trusted partner for outsourced customer service for startups.",
    features: [
      "Inbound & outbound call handling",
      "Technical support & helpdesk",
      "Complaint resolution",
      "Customer feedback & surveys",
    ],
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop",
    href: "/services/customer-support",
  },
  {
    icon: FileText,
    title: "Back-Office & Administrative Support",
    description: "We streamline operational workflows through accurate, efficient, and technology-enabled processes.",
    features: [
      "Data entry & data management",
      "Order processing & fulfillment",
      "Document digitization & record maintenance",
      "Process automation & workflow optimization",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    href: "/services/back-office",
  },
  {
    icon: TrendingUp,
    title: "Sales & Lead Generation",
    description: "We help businesses grow by identifying, engaging, and converting high-quality leads.",
    features: [
      "Lead qualification & nurturing",
      "Tele-sales & appointment setting",
      "CRM management & campaign execution",
      "AI-Powered insights and monitoring",
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    href: "/services/sales-lead-generation",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting Outsourcing",
    description: "Finance and accounting outsourcing India with affordable BPO services for small businesses. Our specialists ensure accuracy, compliance, and transparency across all functions.",
    features: [
      "Bookkeeping & ledger maintenance",
      "Accounts payable / receivable",
      "Payroll & expense management",
      "Financial reporting & tax support",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    href: "/services/finance-accounting",
  },
  {
    icon: Users,
    title: "Human Resources Outsourcing (HRO)",
    description: "HR outsourcing company India offering staffing agency services, contract staffing solutions, and recruitment services. We support your HR operations and reduce administrative workload.",
    features: [
      "Recruitment & onboarding",
      "Payroll processing",
      "Employee data management",
      "HR helpdesk & support services",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    href: "/services/recruitment-rpo",
  },
  {
    icon: Bot,
    title: "AI Services",
    description: "We empower businesses with AI-driven automation and insights that optimize operations, boost engagement, and drive growth.",
    features: [
      "AI-Powered Customer Support",
      "Data Analytics & Predictive Insights",
      "Machine Learning Solutions",
      "Intelligent Process Automation (IPA)",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    href: "/services/ai-data",
  },
];

const whyChoose = [
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock service delivery across all time zones with consistent quality.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of experience in delivering successful BPO solutions with measurable results and client satisfaction.",
  },
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Cutting-edge AI technology enhancing every aspect of service delivery.",
  },
  {
    icon: Target,
    title: "Scalable Solutions",
    description: "Flexible capacity that grows with your business needs and market demands.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your business needs and create a customized service blueprint.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our experts design workflows optimized for efficiency and quality.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "Rapid implementation with comprehensive training and knowledge transfer.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Continuous improvement through AI insights and performance analytics.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="BPO Innovation and Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-8">Service Excellence</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-10 text-white">
              Services Powered
              <br />
              by <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              Leading call center outsourcing company in India with comprehensive BPO solutions combining human expertise with AI technology to drive exceptional business outcomes.
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
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Our Service <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              End-to-end business solutions tailored to your unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden isolate">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 hover:scale-105 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 tracking-tight font-display leading-tight">{service.title}</h3>
                  <p className="text-white/40 text-sm mb-6 leading-relaxed font-medium line-clamp-3">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[11px] font-bold text-white/60 tracking-tight uppercase">
                        <CheckCircle className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    variant="link"
                    className="text-white p-0 h-auto hover:text-white/70 transition-colors group/btn w-fit mt-auto"
                  >
                    <Link href={service.href} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
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
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6">Our Advantages</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Why Choose <span className="text-gradient">AdmirerX</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              Experience the AdmirerX advantage with our comprehensive approach to service delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                  <item.icon className="w-7 h-7 text-white/70" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed">{item.description}</p>
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
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6">The Methodology</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              A proven methodology that ensures seamless implementation and continuous excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group"
              >
                <span className="text-6xl font-bold text-white/5 font-display group-hover:text-white/10 transition-colors duration-500">{step.step}</span>
                <h3 className="text-2xl font-bold mt-6 mb-4 font-display">{step.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed">{step.description}</p>
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
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-10 leading-[1.1]">
                Ready to Transform <br /><span className="text-gradient">Your Business?</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-16 text-xl font-medium">
                Let&apos;s discuss how our services can drive your success.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        </section>
    </main>
  );
}
