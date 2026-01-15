"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-display leading-tight mb-6 text-center">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-white/40 text-center mb-16 font-bold uppercase tracking-widest text-xs">
              Last updated: January 2025
            </p>

            <div className="glass-card p-10 md:p-16 space-y-12 relative group">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10">
                <section>
                  <h2 className="text-2xl font-bold mb-6 font-display">1. Introduction</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    AdmirerX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">2. Information We Collect</h2>
                  <p className="text-white/60 leading-relaxed mb-6 font-medium">
                    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                  </p>
                  <ul className="space-y-4 text-white/60 font-medium">
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span><strong className="text-white">Personal Data:</strong> Name, email address, phone number, company name, and other contact information you voluntarily provide.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span><strong className="text-white">Resume/CV Data:</strong> Employment history, education, skills, and other professional information submitted through our careers portal.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span><strong className="text-white">Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span><strong className="text-white">Communication Data:</strong> Messages, inquiries, and feedback you send to us through our contact forms or email.</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">3. How We Use Your Information</h2>
                  <p className="text-white/60 leading-relaxed mb-6 font-medium">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="space-y-4 text-white/60 font-medium">
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>To provide, maintain, and improve our services</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>To process job applications and recruitment activities</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>To respond to your inquiries and customer service requests</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>To send you marketing and promotional communications (with your consent)</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>To analyze website usage and improve user experience</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>To comply with legal obligations and protect our rights</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">4. Data Security</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">5. Data Retention</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. The retention period may vary depending on the context of the processing and our legal obligations.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">6. Your Rights</h2>
                  <p className="text-white/60 leading-relaxed mb-6 font-medium">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/60 font-medium">
                    <li className="glass p-4 rounded-2xl border border-white/5">Right to access your personal data</li>
                    <li className="glass p-4 rounded-2xl border border-white/5">Right to rectify inaccurate data</li>
                    <li className="glass p-4 rounded-2xl border border-white/5">Right to erasure (&quot;right to be forgotten&quot;)</li>
                    <li className="glass p-4 rounded-2xl border border-white/5">Right to restrict processing</li>
                    <li className="glass p-4 rounded-2xl border border-white/5">Right to data portability</li>
                    <li className="glass p-4 rounded-2xl border border-white/5">Right to withdraw consent</li>
                  </ul>
                </section>

                <section className="mt-12 pt-12 border-t border-white/10">
                  <h2 className="text-2xl font-bold mb-6 font-display">7. Contact Us</h2>
                  <p className="text-white/60 leading-relaxed mb-8 font-medium">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="glass p-8 rounded-3xl border border-white/10">
                    <p className="text-xl font-bold mb-4 font-display">AdmirerX</p>
                    <div className="space-y-2 text-white/50 font-medium">
                      <p>Email: management@admirerx.net</p>
                      <p>Phone: +91 88269 36399</p>
                      <p>Address: Plot No - 761, Noida Sector 21, India</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">
                <span>←</span> Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
