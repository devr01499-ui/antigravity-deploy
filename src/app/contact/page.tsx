"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  Mail,
  Phone,
  Clock,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  Upload,
  FileText,
  X,
  CheckCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "management@admirerx.net",
    href: "mailto:management@admirerx.net",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 88269 36399",
    href: "tel:+918826936399",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7 Support Available",
    href: null,
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "Plot No - 761, Noida Sector 21",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const services = [
  "Customer Support",
  "Back-Office Operations",
  "Sales & Lead Generation",
  "Finance & Accounting",
  "HR Outsourcing",
  "AI Services",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
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

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("companyName", formData.companyName);
      data.append("service", formData.service);
      data.append("message", formData.message);
      if (file) {
        data.append("attachment", file);
      }

      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-20">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop"
          alt="Contact AdmirerX Team"
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
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-8">
              Get In Touch
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-10">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Ready to transform your business? Get in touch with our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-6 tracking-tight">Send Us a Message</h2>
              <p className="text-white/50 text-lg mb-12 font-medium">
                Fill out the form below, and we&apos;ll get back to you within 24 hours.
              </p>

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
                    <h3 className="text-3xl font-bold mb-6 font-display">Message Sent!</h3>
                    <p className="text-white/50 text-lg mb-12 font-medium leading-relaxed">
                      Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          companyName: "",
                          service: "",
                          message: "",
                        });
                        setFile(null);
                      }}
                      variant="outline"
                      className="border-white/20 hover:bg-white/10 rounded-full px-10 h-14 font-bold glass"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 relative group">
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
                      <div className="space-y-3">
                        <Label htmlFor="companyName" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                          Company Name
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                          placeholder="Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                        Service Interested In *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0a] border-white/10">
                          <SelectGroup>
                            <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] font-bold">Solutions</SelectLabel>
                            {services.map((service) => (
                              <SelectItem key={service} value={service} className="text-white focus:bg-white/10 focus:text-white">
                                {service}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="min-h-[150px] rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                        Attach a File (PDF, DOC, or DOCX)
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
                      disabled={isSubmitting || !formData.service}
                      className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-full h-16 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-10 md:p-12 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-display mb-10 tracking-tight">Get In Touch</h3>
                  <div className="space-y-8">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-start gap-6 group/info">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/info:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                          <info.icon className="w-6 h-6 text-white/70" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">{info.title}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-xl font-bold hover:text-white transition-colors tracking-tight"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-xl font-bold tracking-tight">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card p-10 md:p-12 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-display mb-8 tracking-tight">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-10 bg-linear-to-r from-white/5 to-transparent relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 animate-pulse opacity-50" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Response Time</span>
                    <span className="text-2xl font-bold font-display tracking-tight text-gradient">Under 2 hours</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6">Our Location</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Visit Our <span className="text-gradient">Headquarters</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              Connect with our team at our global headquarters in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">Global Headquarters</span>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8 text-white/70" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-8 font-display tracking-tight">AdmirerX Global Headquarters</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Location</p>
                      <p className="text-xl font-bold tracking-tight mb-1">Noida, India</p>
                      <p className="text-sm text-white/50 font-medium">Plot No. 761, Sector 21, Noida, Uttar Pradesh</p>
                    </div>
                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Phone</p>
                      <a href="tel:+918826936399" className="text-xl font-bold hover:text-white transition-colors tracking-tight">
                        +91 88269 36399
                      </a>
                    </div>
                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Email</p>
                      <a href="mailto:management@admirerx.net" className="text-xl font-bold hover:text-white transition-colors tracking-tight break-all">
                        management@admirerx.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 relative group/map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0108459168396!2d77.31261047549895!3d28.58997757568746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f5e5f5e5f%3A0x5e5f5e5f5e5f5e5f!2sSector%2021%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=" hover:-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-white/5 pointer-events-none group-hover/map:opacity-0 transition-opacity duration-1000" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
