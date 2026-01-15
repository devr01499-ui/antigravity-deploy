"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Bot,
  Users,
  Zap,
  Target,
  ShieldCheck,
  Clock,
  Activity,
  BarChart3,
  Rocket,
  Brain,
  LineChart,
} from "lucide-react";

const quickValues = [
  {
    icon: Rocket,
    title: "48-Hour Rapid Launch",
    description: "Our battle-tested onboarding framework gets your campaigns live in 48 hours, not weeks. Dedicated project managers handle seamless integration with your existing CRM, sales processes, and tech stack."
  },
  {
    icon: Brain,
    title: "AI-Powered Lead Scoring",
    description: "Every lead undergoes 7-point automated verification including email validation, phone verification, company data enrichment, and intent scoring. Our AI algorithms achieve 94.8% data accuracy—industry-leading precision."
  },
  {
    icon: LineChart,
    title: "strategyzen.ai",
    description: "Access enterprise-grade analytics dashboards (SAP, Salesforce Data Cloud, HubSpot, etc). Track cost-per-lead, ROI metrics, campaign performance, with granular attribution data every step of the funnel."
  }
];

const comparisons = [
  {
    label: "Verification",
    traditional: "Manual lead verification taking 24-48 hours with 15-20% error rates and inconsistent data quality.",
    admirerx: "AI-powered instant verification with 99.8% accuracy, real-time enrichment, and guaranteed data compliance (GDPR, CCPA, SOC 2)."
  },
  {
    label: "Scalability",
    traditional: "Limited visibility with weekly Excel reports and no insight into lead quality or campaign attribution.",
    admirerx: "Real-time dashboards with complex lead lifecycle tracking, source attribution, engagement scoring, and predictive conversion analytics."
  },
  {
    label: "Cost",
    traditional: "High cost-per-lead ($50-150) with unpredictable quality and no performance guarantees.",
    admirerx: "40-60% cost reduction with transparent pricing, guaranteed lead quality SLAs, and pay-for-performance models available."
  },
  {
    label: "Technology",
    traditional: "Slow scaling taking 4-6 weeks to ramp up limited by manual processes and training requirements.",
    admirerx: "Scale 10x in 48 hours with pre-trained AI models, automated workflows, and elastic infrastructure on demand."
  },
  {
    label: "Industry",
    traditional: "Generic, one-size-fits-all approaches that ignore industry-specific buyer journeys.",
    admirerx: "Industry-specific strategies with deep vertical expertise in SaaS, FinTech, Healthcare, Manufacturing, and 20+ industries."
  }
];

const expectations = [
  {
    icon: Zap,
    title: "Speed",
    subtitle: "Live campaigns within 48 hours",
    description: "From contract signature to first qualified lead delivery, we operate with startup urgency. Pre-built frameworks, industry templates, API integrations mean we can start scaling results immediately—not months from now."
  },
  {
    icon: Target,
    title: "Precision",
    subtitle: "99.8% verified lead accuracy",
    description: "Proprietary 7-layer verification process: email validation, phone verification, title confirmation, decision-maker identification, company verification, GDPR compliance checks, and duplicate detection. We guarantee the highest data quality in the industry."
  },
  {
    icon: Users,
    title: "Partnership",
    subtitle: "Weekly performance reviews",
    description: "Weekly performance reviews, monthly strategy sessions, quarterly business reviews, and dedicated account management. Our growth consultants act as extensions of your team, providing A/B testing insights, competitive optimization, strategic, and market intelligence."
  }
];

export default function SalesLeadGenerationPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-8 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
              AI Lead Generation BPO
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
              Transform Your Lead Generation Process <br />
              <span className="text-gradient">with AdmirerX</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium">
              AI-Powered Intelligence Meets Human Expertise. Triple Your Qualified Leads in 90 Days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                ISO 27001 Certified
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Activity className="w-5 h-5 text-green-500" />
                50,000 Qualified Leads+
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Clock className="w-5 h-5 text-purple-500" />
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Value Section */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Cost Optimization</span>
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
                className="glass-card p-8 group hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Competitive Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX is <span className="text-gradient">Different</span></h2>
            <p className="text-white/40">See why industry leaders trust AdmirerX over traditional BPO providers.</p>
          </div>

          <div className="space-y-6">
            {comparisons.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-4"
              >
                <div className="glass-card p-6 border-red-500/10 bg-red-500/[0.02]">
                  <Badge variant="outline" className="mb-4 border-red-500/20 text-red-400/70 text-[9px] uppercase">Traditional BPO</Badge>
                  <p className="text-white/40 text-sm">{item.traditional}</p>
                </div>
                <div className="glass-card p-6 border-emerald-500/30 bg-emerald-500/[0.05]">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-[9px] uppercase font-bold">AdmirerX Solution</Badge>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">{item.admirerx}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-24 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Commitment</span>
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
                  <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4">{item.subtitle}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AdmirerX Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-transparent to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Why Choose AdmirerX for <span className="text-gradient">Lead Generation</span></h2>
          </div>
          
          <div className="space-y-8 text-white/60 leading-relaxed text-sm">
            <p>
              ...machine learning algorithms, natural language processing, and behavioral analysis to identify your ideal customers before your competitors do. We combine this technological advantage with highly trained business development representatives who understand complex sales cycles, industry-specific pain points, and sophisticated buying committees.
            </p>
            <p>
              ...composite shows, and proven progression program.
            </p>
            <p>
              Our success is measured by your success. We offer flexible engagement models including cost-per-lead, cost per qualified opportunity, and performance-based compensation structures that align our incentives with your revenue goals. Experience the difference of working with a true technology-enabled BPO partner committed to your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass-card p-4 text-center">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Enterprise-grade security & compliance</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Globe className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Global delivery with local expertise</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Bot className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Innovation-driven approach</p>
            </div>
            <div className="glass-card p-4 text-center">
              <BarChart3 className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Industry-leading SLAs</p>
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
            <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to Transform Your Business?</h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-10 font-medium">
                Join forward-thinking companies achieving remarkable results with AdmirerX.
              </p>
              <Button asChild size="lg" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-14 font-bold">
                <Link href="/contact">Get Started Today <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-24 bg-[#020205]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let&apos;s Build Something <span className="text-gradient">Remarkable</span></h2>
            <p className="text-white/40">Our team will respond within 24 hours.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors" />
              <input type="text" placeholder="Company Name *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors" />
            </div>
            <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"></textarea>
            
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-14 font-bold">
              Submit Inquiry <ArrowRight className="ml-2 w-4 h-4" />
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
