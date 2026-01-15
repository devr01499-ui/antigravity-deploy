"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Upload,
  FileText,
  X,
  Send,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    description: "Access to cutting-edge AI solutions and global talent that drive measurable business outcomes.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "ISO-certified operations with robust data protection and compliance frameworks.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Fast onboarding and implementation with dedicated support teams for seamless integration.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "24/7 operations across multiple time zones with multilingual support capabilities.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Customized team structures aligned with your business goals and culture.",
  },
  {
    icon: CheckCircle,
    title: "Lasting Impact",
    description: "Building trusted partnerships through transparency, collaboration, and lasting success.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn about your business needs, challenges, and goals through an in-depth consultation.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our experts design customized workflows and team structures tailored to your requirements.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Rapid deployment with comprehensive training and seamless knowledge transfer.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous improvement through AI insights, performance monitoring, and regular reviews.",
  },
];

const industries = [
  "E-commerce",
  "Healthcare",
  "FinTech",
  "SaaS",
  "Retail",
  "Manufacturing",
  "Education",
  "Other",
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
          alt="BPO Strategic Partnership"
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
              Strategic Partnership
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-10 text-white">
              Partner With
              <br />
              <span className="text-gradient">AdmirerX</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              Transform your business with AI-powered solutions and world-class talent. Let&apos;s build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <a href="#inquiry">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 glass text-white"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
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
              Partnership <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              Experience the advantages of working with a trusted global leader in AI-driven BPO solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                  <benefit.icon className="w-7 h-7 text-white/70" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{benefit.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6">The Methodology</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              How We <span className="text-gradient">Partner</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              Our proven four-step process ensures a smooth and successful partnership journey.
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

      <section id="inquiry" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold font-display mb-8 leading-tight">
                Let&apos;s Start the <br /><span className="text-gradient">Conversation</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 font-medium leading-relaxed">
                Share your business needs with us, and our partnership team will reach out within 24 hours to discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Tailored Solutions", desc: "Custom proposals designed for your unique business requirements." },
                  { title: "Expert Consultation", desc: "Connect with industry experts who understand your challenges." },
                  { title: "No Commitment", desc: "Explore partnership opportunities with no obligation." }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-6 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 font-display tracking-tight text-lg">{item.title}</h4>
                      <p className="text-white/50 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="glass-card p-12 md:p-20 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 font-display">Inquiry Submitted!</h3>
                    <p className="text-white/50 text-lg mb-12 font-medium">
                      Thank you for your interest in partnering with AdmirerX. Our team will review your inquiry and get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          companyName: "",
                          contactName: "",
                          email: "",
                          phone: "",
                          industry: "",
                          message: "",
                        });
                        setFile(null);
                      }}
                      variant="outline"
                      className="border-white/20 hover:bg-white/10 rounded-full px-10 h-14 font-bold glass"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="companyName" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          required
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="contactName" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                          Contact Name *
                        </Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) =>
                            setFormData({ ...formData, contactName: e.target.value })
                          }
                          required
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                          placeholder="+91 88269 36399"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                        Industry
                      </Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          setFormData({ ...formData, industry: value })
                        }
                      >
                        <SelectTrigger className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0a] border-white/10">
                          <SelectGroup>
                            <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] font-bold">Sectors</SelectLabel>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry} className="text-white focus:bg-white/10 focus:text-white">
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                        How can we help? *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="min-h-[150px] rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                        placeholder="Tell us about your business needs and goals..."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                        Attach Document (Optional)
                      </Label>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-[2rem] p-8 text-center cursor-pointer transition-all duration-500 ${
                          isDragActive
                            ? "border-white bg-white/5"
                            : "border-white/5 hover:border-white/20 hover:bg-white/[0.02]"
                        }`}
                      >
                        <input {...getInputProps()} />
                        {file ? (
                          <div className="flex items-center justify-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-white tracking-tight">{file.name}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFile(null);
                              }}
                              className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                              <X className="w-5 h-5 text-white/50" />
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="w-8 h-8 text-white/30 mx-auto mb-2" />
                            <p className="text-white font-bold tracking-tight">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                              PDF, DOC, or DOCX (Max 10 MB)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-full h-16 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
