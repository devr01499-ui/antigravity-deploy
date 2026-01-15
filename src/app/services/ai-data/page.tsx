"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
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
  Search,
  Layers,
  BarChart3,
  Lock,
  MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const quickValues = [
  {
    icon: Target,
    title: "99.9% Dataset Accuracy",
    description: "Our triple-verification workflow combines annotator review, expert validator checks, and automated consistency analysis. This consensus-driven methodology ensures 99.9% accuracy across image, video, text, audio, and sensor data, providing the high-quality ground truth your models require."
  },
  {
    icon: Layers,
    title: "Scalable Annotation Pipeline",
    description: "Built to handle massive datasets without quality compromise, our infrastructure scales to your needs. With a global workforce of 5,000+ trained annotators and automated project management, we process over 100,000 items weekly while maintaining rigorous quality standards."
  },
  {
    icon: Users,
    title: "Specialized Industry Teams",
    description: "We deploy specialized teams for autonomous vehicles, medical imaging, retail, agriculture, geospatial, and 20+ other industries. These subject matter experts understand domain-specific nuances, ensuring accurate labeling that aligns perfectly with your complex ML objectives."
  }
];

const comparisons = [
  {
    label: "Project Setup",
    traditional: "2-4 weeks project setup with generic annotators lacking domain knowledge and context.",
    admirerx: "48-hour rapid deployment with pre-trained, industry-specialized annotation teams ready to start immediately."
  },
  {
    label: "Accuracy",
    traditional: "85-90% annotation accuracy requiring extensive rework and significant model retraining costs.",
    admirerx: "99.9% accuracy with triple-verification quality process, automated consistency checks, and expert validation."
  },
  {
    label: "Capabilities",
    traditional: "Limited to basic 2D bounding boxes and simple text classification tasks.",
    admirerx: "Full-spectrum capabilities: 3D cuboid, semantic segmentation, polygon, video tracking, NLP, and audio transcription."
  },
  {
    label: "Consistency",
    traditional: "Inconsistent labeling across large datasets due to annotator drift and unclear guidelines.",
    admirerx: "Standardized taxonomies, detailed annotation guides, and regular calibration sessions ensuring absolute consistency."
  },
  {
    label: "Security",
    traditional: "No data security controls or compliance certifications risking sensitive data exposure.",
    admirerx: "ISO 27001, SOC 2 Type II certified with secure platforms, NDA enforcement, and comprehensive audit trails."
  }
];

const expectations = [
  {
    icon: Zap,
    title: "Speed",
    subtitle: "100K+ Items Processed Weekly",
    description: "Our distributed workforce operates 24/7 across time zones. Automated task distribution, real-time progress tracking, and quality gates ensure rapid delivery. Rush projects receive dedicated sprint teams to meet the most demanding development timelines."
  },
  {
    icon: Target,
    title: "Precision",
    subtitle: "99.9% Annotation Accuracy",
    description: "Quality is non-negotiable. Every annotation is reviewed by senior validators, while automated algorithms flag anomalies. We rigorously track precision, recall, and inter-annotator agreement metrics to ensure your data is production-ready."
  },
  {
    icon: Users,
    title: "Partnership",
    subtitle: "AI Strategy Consultation",
    description: "We go beyond labeling. Our experts provide guidance on dataset design, sampling strategies, class balance optimization, and bias mitigation. We help you build better, more ethical AI by providing strategic insights, not just raw data."
  }
];

export default function AIDataServicesPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-8 border-purple-500/30 bg-purple-500/10 text-purple-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
              AI & Data Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
              Transform Your Data into <br />
              <span className="text-gradient">Intelligence</span> with AdmirerX
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium">
              Enterprise AI Training Data. 99.9% Accuracy. Scalable to 1M+ Annotations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-purple-500" />
                ISO 27001 Certified
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Activity className="w-5 h-5 text-green-500" />
                99.9% Uptime SLA
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                <Clock className="w-5 h-5 text-blue-500" />
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
                className="glass-card p-8 group hover:border-purple-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6 text-purple-400" />
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
            <span className="text-purple-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Competitive Advantage</span>
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
                <div className="glass-card p-6 border-purple-500/30 bg-purple-500/[0.05]">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-purple-500/40 text-purple-400 text-[9px] uppercase font-bold">AdmirerX Solution</Badge>
                    <CheckCircle className="w-4 h-4 text-purple-500" />
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
            <span className="text-purple-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Commitment</span>
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
                  <p className="text-purple-400 font-bold text-xs uppercase tracking-wider mb-4">{item.subtitle}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient">Why Choose AdmirerX for AI & Data Services?</h2>
          </div>
          <div className="space-y-8 text-white/60 leading-relaxed text-sm">
            <p>
              AdmirerX delivers pixel-perfect annotations including 2D/3D bounding boxes, polygon segmentation, semantic segmentation, instance segmentation, keypoint annotation, and video object tracking. Our annotators work with autonomous vehicle data (LiDAR, radar, camera), medical imaging (X-rays, MRIs, CT scans), satellite imagery, retail product images, and facial recognition datasets.
            </p>
            <p>
              Natural language processing (NLP) projects receive expert annotation including named entity recognition (NER), part-of-speech tagging, sentiment analysis, text classification, intent detection, and conversational AI training data. Our linguists handle 40+ languages with native-level proficiency, ensuring cultural and contextual accuracy in every dataset.
            </p>
            <p>
              Domain specialization sets us apart. Our annotators aren&apos;t generalists—they&apos;re specialists trained in specific verticals. Medical imaging annotators understand anatomy and pathology. Autonomous vehicle teams comprehend traffic scenarios and sensor fusion. Agricultural datasets receive annotations from experts who recognize crop diseases and growth stages.
            </p>
            <p>
              Data security and privacy are paramount. All annotation work occurs on our ISO 27001 certified secure platform with role-based access controls, comprehensive audit logs, and end-to-end encryption. We maintain SOC 2 Type II attestation and comply with GDPR, HIPAA, and international data protection regulations. Every annotator signs strict NDAs and undergoes background verification.
            </p>
            <p>
              Our annotation platform supports all major formats and integrates with popular ML frameworks including TensorFlow, PyTorch, Keras, and scikit-learn. We deliver datasets in COCO, PASCAL VOC, YOLO, or custom formats matching your requirements. Automated validation ensures schema compliance and data integrity throughout the project lifecycle.
            </p>
            <p>
              Ethical AI development guides our approach. We actively work to identify and mitigate bias in training datasets through diverse annotator demographics, bias detection algorithms, and balanced sampling strategies. Our goal is helping clients build fair, transparent, and accountable AI systems that perform reliably in the real world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="glass-card p-4 text-center">
              <ShieldCheck className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Enterprise-grade security & compliance</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Globe className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Global delivery with local expertise</p>
            </div>
            <div className="glass-card p-4 text-center">
              <Zap className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold uppercase tracking-tighter text-white/50">Innovation-driven approach</p>
            </div>
            <div className="glass-card p-4 text-center">
              <BarChart3 className="w-5 h-5 text-purple-500 mx-auto mb-2" />
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
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready to Transform Your Business?</h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-10 font-medium">
                Join forward-thinking companies achieving remarkable results with AdmirerX.
              </p>
              <Button asChild size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-10 h-14 font-bold">
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
            <span className="text-purple-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient">Let&apos;s Build Something Remarkable</h2>
            <p className="text-white/40">Our team will respond within 24 hours.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors" />
            </div>
            <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors" />
            <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors resize-none"></textarea>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl h-14 font-bold">
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
