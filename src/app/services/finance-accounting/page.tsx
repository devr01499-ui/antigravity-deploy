"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
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
  Database,
  Cog,
  BarChart3,
  Layers,
  Upload,
  Receipt,
  TrendingUp,
} from "lucide-react";

const quickValues = [
  {
    icon: TrendingUp,
    title: "50% Cost Reduction",
    description: "Streamline accounts payable, receivable, and payroll with skilled financial professionals. Combined with optimized delivery models, clients achieve 40-60% lower total cost structure versus in-house finance departments without compromising accuracy."
  },
  {
    icon: ShieldCheck,
    title: "100% Compliance & Accuracy",
    description: "Multi-layered quality assurance combining automated validation, dual-key verification, and statistical sampling. 100% compliance with financial regulations and 99.9% accuracy across bookkeeping, tax support, and financial reporting."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Pre-built connectors for NetSuite, QuickBooks, Xero, SAP, Microsoft Dynamics, and 100+ accounting platforms. API-based integration and RPA bots enable real-time data flow, eliminating manual entries and reconciliation errors."
  }
];

const comparisons = [
  {
    label: "Closing Speed",
    traditional: "Month-end closing taking 10-14 business days, resulting in delayed financial visibility and strategic decision-making.",
    admirerx: "Fast-close processes completed in 2-3 business days with real-time tracking and automated financial consolidation."
  },
  {
    label: "Reporting & Insights",
    traditional: "Static monthly reports based on manual spreadsheets, often containing outdated information and human errors.",
    admirerx: "Real-time financial dashboards with predictive analytics, cash flow forecasting, and automated exception reporting."
  },
  {
    label: "Compliance Risk",
    traditional: "High risk of penalties and audit failures due to manual oversight and inconsistent documentation practices.",
    admirerx: "Automated compliance checks, digital audit trails, and SOC 2 Type II certified processes ensuring 100% audit readiness."
  },
  {
    label: "Scalability",
    traditional: "Struggling to handle growth or seasonal spikes (tax season, year-end) without expensive, slow hiring cycles.",
    admirerx: "Elastic capacity scaling. Instantly scale your finance team up or down based on transaction volumes and business cycles."
  }
];

const expectations = [
  {
    icon: Zap,
    title: "Efficiency",
    subtitle: "Accelerated Cycles",
    description: "Our automated platforms trigger instant processing of invoices and payments. OCR and AI extract data from financial documents with high precision, reducing manual processing time by up to 80% while ensuring same-day throughput."
  },
  {
    icon: Target,
    title: "Precision",
    subtitle: "99.9% Accuracy",
    description: "Statistical process control and automated validation rules catch discrepancies before they hit the ledger. Dual-key verification on all high-value transactions ensures absolute financial integrity and reporting reliability."
  },
  {
    icon: Users,
    title: "Partnership",
    subtitle: "Strategic Growth",
    description: "Monthly business reviews provide strategic financial insights rather than just raw numbers. Our experts identify cost-saving opportunities, optimize working capital, and help you scale your business with sound financial data."
  }
];

export default function FinanceAccountingPage() {
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
              Finance & Accounting Outsourcing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
              Transform Your Finance Operations <br />
              <span className="text-gradient">with AdmirerX</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium">
              Intelligent Automation. Precise Accounting. 50% Cost Reduction. 100% Compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Calculator className="w-5 h-5 text-indigo-500" />
                100+ ERP Connectors
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Activity className="w-5 h-5 text-green-500" />
                99.9% Accuracy Rate
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-purple-500" />
                SOC 2 Type II Certified
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Value Section */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Financial Excellence</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX Provides <span className="text-gradient">Quick Value</span></h2>
            <p className="text-white/40">Experience measurable results from day one with our specialized financial frameworks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 group hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6 text-indigo-400" />
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
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">The Competitive Edge</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX is <span className="text-gradient">Different</span></h2>
            <p className="text-white/40">Moving beyond traditional accounting to data-driven financial intelligence.</p>
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
                  <Badge variant="outline" className="mb-4 border-red-500/20 text-red-400/70 text-[9px] uppercase">Traditional Approach</Badge>
                  <p className="text-white/40 text-sm">{item.traditional}</p>
                </div>
                <div className="glass-card p-6 border-indigo-500/30 bg-indigo-500/[0.05]">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-indigo-500/40 text-indigo-400 text-[9px] uppercase font-bold">AdmirerX Solution</Badge>
                    <CheckCircle className="w-4 h-4 text-indigo-500" />
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
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What You Can <span className="text-gradient">Expect</span></h2>
            <p className="text-white/40">Unmatched precision and strategic value in every financial transaction.</p>
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
                  <p className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-4">{item.subtitle}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AdmirerX Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Why Choose AdmirerX for <span className="text-gradient">Finance & Accounting</span></h2>
          </div>
          
          <div className="space-y-8 text-white/60 leading-relaxed text-sm text-center md:text-left">
            <p>
              Our service portfolio encompasses finance and accounting operations including accounts payable, accounts receivable, general ledger maintenance, expense management, payroll processing, tax support, and financial reporting. We process invoices, purchase orders, credit memos, and payment transactions with exceptional accuracy and efficiency.
            </p>
            <p>
              The AdmirerX automation platform combines Robotic Process Automation (RPA), Optical Character Recognition (OCR), machine learning, and intelligent workflow orchestration. Software robots handle repetitive, rule-based tasks while humans focus on exceptions, analysis, and decision-making. This hybrid approach optimizes both efficiency and quality.
            </p>
            <p>
              We maintain ISO 9001 quality management certification ensuring standardized processes and continuous improvement culture. ISO 27001 information security certification protects sensitive financial and customer data. SOC 2 Type II attestation provides assurance on controls related to security, availability, confidentiality, and privacy.
            </p>
            <p>
              Technology flexibility is fundamental. We integrate with your existing technology stack rather than forcing platform changes. Whether you use SAP, Oracle, Microsoft Dynamics, NetSuite, or custom legacy systems, our integration specialists ensure smooth data flow and process continuity.
            </p>
            <p>
              Transparent reporting provides real-time visibility. Client portals display processing status, volume metrics, quality scores, and SLA compliance. Automated alerts notify stakeholders of exceptions requiring attention. Monthly business reviews analyze trends and identify optimization opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass-card p-4 text-center">
              <ShieldCheck className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Enterprise-grade security & compliance</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Globe className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Global delivery with local expertise</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Cog className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Innovation-driven approach</p>
            </div>
            <div className="glass-card p-4 text-center">
              <BarChart3 className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
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
            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to Elevate Your Financial Operations?</h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-10 font-medium">
                Let&apos;s discuss how our automated finance solutions can drive your success.
              </p>
              <Button asChild size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-10 h-14 font-bold">
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
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Let&apos;s Build Something <span className="text-gradient">Remarkable</span></h2>
            <p className="text-white/40">Our finance experts will respond within 24 hours.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors text-white" />
              <input type="text" placeholder="Company Name *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors text-white" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address *" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors text-white" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors text-white" />
            </div>
            <textarea placeholder="Tell us about your finance needs" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none text-white"></textarea>
            
            <div className="glass-card p-4 border-dashed">
              <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                <Upload className="w-4 h-4" />
                <span>Click to upload Financial Docs/Brief - Max 10 MB</span>
              </div>
            </div>
            
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-14 font-bold">
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
