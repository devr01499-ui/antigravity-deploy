"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Bot,
  Zap,
  Target,
  ShieldCheck,
  Clock,
  Activity,
  Cog,
  BarChart3,
  Upload,
  Search,
  Briefcase,
} from "lucide-react";

const quickValues = [
  {
    icon: Zap,
    title: "50% Faster Time-to-Hire",
    description: "50+ job boards, professional networks, and our proprietary CRM + candidate database simultaneously. Advanced matching algorithms identify perfect-fit candidates 3x faster than traditional recruiting."
  },
  {
    icon: Bot,
    title: "AI-Powered Candidate Matching",
    description: "Combining cognitive ability tests, behavioral interviews, skills validation, and cultural fit analysis. Our predictive models achieve 92% long-term retention rates — industry-leading talent quality."
  },
  {
    icon: Briefcase,
    title: "Comprehensive RPO",
    description: "From workforce planning and job architecture through sourcing, screening, interviewing, offer management, and onboarding. Dedicated recruitment marketing, employer branding, and candidate experience management."
  }
];

const comparisons = [
  {
    label: "Time-to-fill",
    traditional: "30-45 day average time-to-fill with inconsistent results and high recruiter turnover affecting quality.",
    admirerx: "15-20 day time-to-fill with AI-accelerated sourcing, pre-screened candidate pools, and dedicated senior recruiters with 8+ years average experience."
  },
  {
    label: "Sourcing",
    traditional: "Manual resume review taking hours per position with unconscious bias and missed qualified candidates.",
    admirerx: "AI screening processes 1,000+ resumes in minutes with bias-mitigation algorithms, ensuring diverse, qualified candidate slates."
  },
  {
    label: "Candidate Pool",
    traditional: "Limited candidate reach restricted to posted jobs and recruiter networks (typically 5,000-10,000 candidates).",
    admirerx: "Access to 50M+ candidate database, passive candidate sourcing, multi-channel recruitment marketing reaching 10x more talent."
  },
  {
    label: "Quality",
    traditional: "Inconsistent candidate quality with 40-60% first-year attrition and poor cultural fit.",
    admirerx: "Standardized assessment frameworks with predictive analytics achieving 92% retention rate and measurably better performance."
  },
  {
    label: "Strategy",
    traditional: "Transactional recruiting focused only on filling positions with no strategic workforce planning.",
    admirerx: "Strategic talent advisory including workforce planning, skills gap analysis, talent market intelligence, and succession planning support."
  }
];

const expectations = [
  {
    icon: Zap,
    title: "Speed",
    subtitle: "Qualified candidates within 5 days",
    description: "Our AI-powered sourcing identifies and pre-screens qualified candidates within 3-5 business days of receiving job requirements. Urgent executive searches receive dedicated sprint teams capable of delivering shortlists within 48 hours with no compromise on quality."
  },
  {
    icon: Target,
    title: "Precision",
    subtitle: "92% First-year retention rate",
    description: "Our comprehensive assessment methodology evaluates technical competency, cultural alignment, career trajectory fit, and long-term potential. This rigorous approach, combined with structured interviewing techniques, delivers candidates who succeed and stay: proven 92% retention after 12 months."
  },
  {
    icon: Users,
    title: "Partnership",
    subtitle: "Strategic Talent Advisory",
    description: "We don't just fill seats; we transform your hiring function into a strategic competitive advantage. We leverage advanced AI technology, recruitment science, and human expertise to build world-class teams for our clients."
  }
];

export default function RecruitmentRPOPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white pt-20">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-8 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
              Recruitment Process Outsourcing (RPO)
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
              Transform Your Recruitment Process <br />
              <span className="text-gradient">with AdmirerX</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium">
              AI-Driven Talent Acquisition. Expert Recruiters. 50% Faster Time-to-Hire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Search className="w-5 h-5 text-blue-500" />
                50M+ Candidate Database
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Activity className="w-5 h-5 text-green-500" />
                92% Retention Rate
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-purple-500" />
                ISO 9001 & 27001 Certified
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Recruitment Excellence</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX Provides <span className="text-gradient">Quick Value</span></h2>
            <p className="text-white/40">Experience measurable results from day one with our battle-tested methodology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 group hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Competitive Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX is <span className="text-gradient">Different</span></h2>
            <p className="text-white/40">See why industry leaders trust AdmirerX over traditional RPO providers.</p>
          </div>

          <div className="space-y-6">
            {comparisons.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-4"
              >
                <div className="glass-card p-6 border-red-500/10 bg-red-500/[0.02]">
                  <Badge variant="outline" className="mb-4 border-red-500/20 text-red-400/70 text-[9px] uppercase">Traditional RPO</Badge>
                  <p className="text-white/40 text-sm">{item.traditional}</p>
                </div>
                <div className="glass-card p-6 border-blue-500/30 bg-blue-500/[0.05]">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-blue-500/40 text-blue-400 text-[9px] uppercase font-bold">AdmirerX Solution</Badge>
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">{item.admirerx}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Service Commitment</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What You Can <span className="text-gradient">Expect</span></h2>
            <p className="text-white/40">Guaranteed excellence across every dimension of service delivery.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expectations.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display mb-1">{item.title}</h3>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-4">{item.subtitle}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Strategic Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Transforming Your <span className="text-gradient">Recruitment Function</span></h2>
          </div>
          
          <div className="space-y-8 text-white/60 leading-relaxed text-sm text-center md:text-left">
            <p>
              Our approach begins with deep understanding of your business strategy, culture, and talent requirements. We develop comprehensive talent acquisition roadmaps aligned with growth objectives, market realities, and budgetary constraints. This strategic foundation ensures every hire advances organizational goals.
            </p>
            <p>
              The AdmirerX AI-sourcing platform represents the cutting edge of recruitment technology. Our machine learning algorithms analyze job descriptions, identify key competencies, search across 50M+ candidate resumes simultaneously, and apply intelligent matching to surface ideal candidates. Natural Language Processing (NLP) enables semantic search beyond keyword matching, uncovering hidden talent competitors miss.
            </p>
            <p>
              Our recruitment professionals bring an average 8+ years of specialized experience across industries including Technology, Finance, Healthcare, Manufacturing, Retail, and Professional Services. Many hold SHRM-CP/SCP, AIRS, or LinkedIn Certified Professional Recruiter credentials. This expertise enables nuanced understanding of role requirements, market dynamics, and candidate motivations.
            </p>
            <p>
              We excel in both high-volume recruitment (call centers, retail, warehousing) and specialized executive search (C-suite, VP-level, niche technical roles). Our scalable delivery model handles everything from 5 positions annually to 500+ hires per quarter without compromising quality or candidate experience.
            </p>
            <p>
              Every recruitment process incorporates diversity, equity, and inclusion best practices including bias-mitigated job descriptions, diverse sourcing strategies, structured interviewing, and candidate demographic tracking. We help clients build inclusive teams that reflect their communities and customers.
            </p>
            <p>
              Technology integration is seamless. We work within your existing Applicant Tracking System (ATS) including Greenhouse, Lever, Workday, SuccessFactors, iCIMS, or implement our enterprise-grade platform. All candidate data, communications, and recruiting metrics flow through unified systems providing complete visibility and compliance audit trails.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass-card p-4 text-center">
              <ShieldCheck className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Enterprise-grade security & compliance</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Globe className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Global delivery with local expertise</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Cog className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Innovation-driven approach</p>
            </div>
            <div className="glass-card p-4 text-center">
              <BarChart3 className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Industry-leading SLAs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to Transform Your Business?</h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-10 font-medium">
                Join forward-thinking companies achieving remarkable results with AdmirerX.
              </p>
              <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold">
                <Link href="/contact">Get Started Today <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-[#020205]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let&apos;s Build Something <span className="text-gradient">Remarkable</span></h2>
            <p className="text-white/40">Our team will respond within 24 hours.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white" />
              <input type="text" placeholder="Company Name *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white" />
            </div>
            <textarea placeholder="Tell us about your recruitment needs" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none text-white"></textarea>
            
            <div className="glass-card p-4 border-dashed">
              <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                <Upload className="w-4 h-4" />
                <span>Click to upload documents - Max 10 MB</span>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 font-bold">
              Submit Inquiry
            </Button>
            <p className="text-[10px] text-white/30 text-center mt-4 italic">
              * Your information is secure and will never be shared.
            </p>
          </form>
          
          <div className="flex justify-center gap-12 mt-16  opacity-30">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <Clock className="w-4 h-4" /> 24-Hour response time
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Enterprise security
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <Users className="w-4 h-4" /> No commitment required
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
