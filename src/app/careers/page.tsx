"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Heart,
  TrendingUp,
  Clock,
  Users,
  Award,
  Briefcase,
  MapPin,
  ArrowRight,
  Upload,
  FileText,
  X,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities, mentorship programs, and clear career advancement paths.",
  },
  {
    icon: Clock,
    title: "Work Flexibility",
    description: "Hybrid work options, flexible hours, and opportunities to work with global teams.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "Diverse and inclusive workplace where everyone's voice matters and contributions are valued.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance bonuses, employee recognition programs, and competitive compensation packages.",
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Generous PTO, parental leave, and company events to maintain healthy work-life integration.",
  },
];

const cultureValues = [
  "Innovation-First",
  "Global Mindset",
  "Customer-Centric",
  "Continuous Learning",
];

const openPositions = [
  {
    title: "Senior AI Solutions Architect",
    department: "Technology",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Customer Experience Manager",
    department: "Operations",
    location: "Noida, India",
    type: "Full-time",
  },
  {
    title: "Business Analyst",
    department: "Strategy",
    location: "Noida, India",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    department: "AI & Analytics",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Operations",
    location: "Noida, India",
    type: "Full-time",
  },
  {
    title: "Talent Acquisition Partner",
    department: "Human Resources",
    location: "Remote / Global",
    type: "Full-time",
  },
];

const jobRoles = [
  "Senior AI Solutions Architect",
  "Customer Experience Manager",
  "Business Analyst",
  "Data Scientist",
  "Quality Assurance Specialist",
  "Talent Acquisition Partner",
  "Other",
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
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
    <main className="min-h-screen bg-black pt-20">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop"
          alt="BPO Careers Workplace"
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
              Join Our Team
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-10 text-white">
              Build Your Future
              <br />
              with <span className="text-gradient">AdmirerX</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              Be part of a global team that&apos;s transforming the future of business through AI-driven innovation and human-centric solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 glass text-white"
              >
                <a href="#culture">Learn About Our Culture</a>
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
              Why Work With <span className="text-gradient">Us</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              We invest in our people with comprehensive benefits and a supportive work environment.
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

      <section id="culture" className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-10 leading-tight">
                Our Culture & <br /><span className="text-gradient">Values</span>
              </h2>
              <div className="space-y-6 text-white/50 text-lg leading-relaxed font-medium mb-12">
                <p>
                  At AdmirerX, we believe in the power of human potential amplified by technology. Our culture is built on innovation, collaboration, and continuous growth.
                </p>
                <p>
                  We foster an environment where diverse perspectives are celebrated, creativity thrives, and every team member has the opportunity to make a meaningful impact on our global operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {cultureValues.map((value) => (
                  <span
                    key={value}
                    className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest glass"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10 isolate"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                  alt="Team culture"
                  fill
                  className="object-cover transition-all duration-1000 hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              </motion.div>
          </div>
        </div>
      </section>

      <section id="positions" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              Discover exciting opportunities to grow your career with AdmirerX.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-gradient transition-all duration-500">{position.title}</h3>
                  <div className="flex flex-wrap gap-6 text-sm text-white/40 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {position.type}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-8 h-12 transition-all duration-300 hover:scale-105"
                >
                  <a href="#apply">Apply Now</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-32 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              Apply <span className="text-gradient">Now</span>
            </h2>
            <p className="text-white/50 text-lg font-medium">
              Take the first step towards an exciting career at AdmirerX.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 font-display">Application Submitted!</h3>
                <p className="text-white/50 text-lg mb-12 font-medium">
                  Thank you for your interest in joining AdmirerX. Our team will review your application and get back to you soon.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", email: "", phone: "", role: "" });
                    setFile(null);
                  }}
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 rounded-full px-10 h-14 font-bold glass"
                >
                  Submit Another Application
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-16 relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                      className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
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
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                      placeholder="+91 88269 36399"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="role" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                      Job Role *
                    </Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) =>
                        setFormData({ ...formData, role: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border-white/10">
                        <SelectGroup>
                          <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] font-bold">Positions</SelectLabel>
                          {jobRoles.map((role) => (
                            <SelectItem key={role} value={role} className="text-white focus:bg-white/10 focus:text-white">
                              {role}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                    Resume/CV * (PDF, DOC, DOCX - Max 10MB)
                  </Label>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-[2rem] p-10 text-center cursor-pointer transition-all duration-500 ${
                      isDragActive
                        ? "border-white bg-white/5"
                        : "border-white/5 hover:border-white/20 hover:bg-white/[0.02]"
                    }`}
                  >
                    <input {...getInputProps()} />
                    {file ? (
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-white tracking-tight">{file.name}</p>
                          <p className="text-xs text-white/30 font-bold uppercase tracking-widest">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="ml-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5 text-white/50" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                          <Upload className="w-8 h-8 text-white/70" />
                        </div>
                        <div>
                          <p className="text-white font-bold tracking-tight mb-1">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-white/30 font-bold uppercase tracking-widest">
                            PDF, DOC, or DOCX (Max 10 MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !file || !formData.role}
                  className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-full h-16 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  {isSubmitting ? "Processing Application..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-6 h-6" />}
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}
