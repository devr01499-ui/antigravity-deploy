"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
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
  MessageSquare,
  Mail,
  Phone,
  BarChart3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const quickValues = [
  {
    icon: MessageSquare,
    title: "Omnichannel Service",
    description: "Seamless support across voice, email, live chat, social media (Facebook, Twitter, Instagram), WhatsApp, SMS and Video chat. Unified customer history ensures consistent experiences regardless of channel with intelligent routing based on customer value and issue complexity."
  },
  {
    icon: Bot,
    title: "Advanced Chatbots",
    description: "Advanced chatbots and virtual assistants handle routine inquiries (order status, FAQs, password resets) with 85% automation success rate. Complex, emotional, or high-value interactions seamlessly transfer to empathy-trained human agents who have complete context."
  },
  {
    icon: Globe,
    title: "Native-speaking Support",
    description: "Native-speaking customer service representatives across English, Spanish, French, German, Portuguese, Mandarin, Japanese, Russian, Arabic, Hindi, and more. Cultural training ensures authentic, contextually appropriate interactions that build customer loyalty."
  }
];

const comparisons = [
  {
    label: "Wait Times",
    traditional: "Average 5-10 minute wait times during peak periods, with abandoned call rates of 15-25%.",
    admirerx: "Under 30-second average wait time year-round with AI-powered queue management, intelligent staffing forecasts, and <2% abandonment rate."
  },
  {
    label: "Customer Satisfaction",
    traditional: "70-75% customer satisfaction (CSAT) scores with inconsistent service quality and agent burnout.",
    admirerx: "92%+ CSAT with quality-focused culture, comprehensive agent training (4 weeks vs industry 1-2 weeks), and career development programs."
  },
  {
    label: "Data Visibility",
    traditional: "Fragmented customer data across channels requiring customers to repeat information.",
    admirerx: "Unified 360° customer view integrating CRM, order history, support history, product usage, and sentiment analysis across all touchpoints."
  },
  {
    label: "Agent Turnover",
    traditional: "High 60-80% annual agent turnover destroying institutional knowledge and service quality.",
    admirerx: "Industry-leading 15% annual turnover through competitive compensation, career advancement, recognition programs, and positive workplace culture."
  },
  {
    label: "Strategy",
    traditional: "Reactive firefighting with no proactive customer outreach or issue prevention.",
    admirerx: "Proactive customer engagement: identifying at-risk accounts, preventing churn, driving upsell, and gathering product feedback systematically."
  }
];

const expectations = [
  {
    icon: Zap,
    title: "Speed",
    subtitle: "Under 30-second response time",
    description: "AI-optimized staffing models predict volume patterns with 95% accuracy, ensuring proper coverage during peak periods. Real-time queue monitoring triggers dynamic resource allocation. Priority routing for VIP customers and urgent issues guarantees immediate attention when it matters most."
  },
  {
    icon: Target,
    title: "Precision",
    subtitle: "92%+ customer satisfaction",
    description: "Our 4-week training program (2x industry standard) covers product knowledge, soft skills, de-escalation techniques, and empathy-driven service delivery. Continuous quality monitoring, coaching, and agent feedback loops maintain excellence. Monthly calibration sessions ensure consistency across the team."
  },
  {
    icon: Users,
    title: "Partnership",
    subtitle: "Voice-of-customer insights",
    description: "Advanced speech and text analytics extract actionable insights from every interaction. Monthly business reviews deliver trend analysis, root cause identification, customer sentiment tracking, and strategic recommendations that improve products, processes, and customer lifetime value."
  }
];

export default function CustomerSupportPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-8 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
              Customer Support Outsourcing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
              Transform Your Customer <br />
              <span className="text-gradient">Experience</span> with AdmirerX
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium">
              Omnichannel Excellence. Human Empathy. AI-Enhanced Efficiency. 24/7 Global Coverage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                ISO 27001 Certified
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Activity className="w-5 h-5 text-green-500" />
                99.9% Uptime SLA
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
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX Provides Quick Value</h2>
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

      {/* Comparison Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Competitive Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How AdmirerX is Different</h2>
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

      {/* Expectations Section */}
      <section className="py-24 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What You Can Expect</h2>
            <p className="text-white/40">Consistent excellence across every dimension of service delivery.</p>
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

      {/* Case Summary / Detail Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-white/60 leading-relaxed text-sm">
            <p>
              AdmirerX&apos;s Customer Support Outsourcing transforms support from a cost center into a growth engine and competitive differentiator. We recognize that every customer interaction represents an opportunity to build loyalty, prevent churn, drive satisfaction, and create brand advocates.
            </p>
            <p>
              Our omnichannel platform provides unified customer experiences across all touchpoints. When customers transition from chat to phone to email, agents have complete conversation history, previous interaction sentiment, product usage data, and purchase history. This 360° view enables personalized, contextual service that makes customers feel valued and understood.
            </p>
            <p>
              The AdmirerX Hybrid AI-Human approach delivers optimal efficiency without sacrificing quality. Our AI chatbots and virtual assistants leverage natural language understanding to handle routine inquiries instantly—order tracking, account changes, password resets, FAQs. When issues require judgment, empathy, or complex problem-solving, seamless handoffs to human agents ensure.
            </p>
            <p>
              Our contact center operations are COPC certified, following industry best practices for customer experience management. We maintain ISO 9001 quality management certification and ISO 27001 information security certification. All facilities feature redundant infrastructure, disaster recovery capabilities, and business continuity planning ensuring uninterrupted service delivery.
            </p>
            <p>
              Multilingual support capabilities span 15+ languages with native-speaking agents who understand cultural nuances, local customs, and communication preferences. This authentic interaction quality drives higher satisfaction and stronger customer relationships in international markets.
            </p>
            <p>
              We excel across industries including E-commerce/Retail, SaaS/Technology, Financial Services, Healthcare, Telecommunications, Travel/Hospitality, and Education. Vertical specialization ensures agents understand industry-specific terminology, compliance requirements, and customer expectations.
            </p>
            <p>
              Performance transparency is fundamental. Real-time dashboards display key metrics including service level, average handling time, first-call resolution, CSAT, Net Promoter Score (NPS), and agent occupancy. Monthly business reviews analyze trends, celebrate successes, identify improvement opportunities, and align strategies with evolving business goals.
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
              <Zap className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Innovation-driven approach</p>
            </div>
            <div className="glass-card p-4 text-center">
              <BarChart3 className="w-5 h-5 text-blue-500 mx-auto mb-2" />
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
      
      {/* Mini Form Section */}
      <section className="py-24 bg-[#020205]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient">Let&apos;s Build Something Remarkable</h2>
            <p className="text-white/40">Our team will respond within 24 hours.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
            </div>
            <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
            <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"></textarea>
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
