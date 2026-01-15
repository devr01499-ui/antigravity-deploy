"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
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
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-white/40 text-center mb-16 font-bold uppercase tracking-widest text-xs">
              Last updated: January 2025
            </p>

            <div className="glass-card p-10 md:p-16 space-y-12 relative group">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10">
                <section>
                  <h2 className="text-2xl font-bold mb-6 font-display">1. Agreement to Terms</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    By accessing or using the AdmirerX website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">2. Services Description</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    AdmirerX provides business process outsourcing (BPO), customer support, back-office operations, sales and lead generation, finance and accounting outsourcing, HR outsourcing, and AI-powered services. The specific terms of any service engagement will be outlined in a separate service agreement.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">3. User Responsibilities</h2>
                  <p className="text-white/60 leading-relaxed mb-6 font-medium">
                    When using our website and services, you agree to:
                  </p>
                  <ul className="space-y-4 text-white/60 font-medium">
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>Maintain the confidentiality of your account credentials</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>Use our services only for lawful purposes</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>Not attempt to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>Not interfere with or disrupt our services</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">4. Intellectual Property</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    All content on this website, including text, graphics, logos, images, and software, is the property of AdmirerX or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">5. Confidentiality</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    Any confidential information shared between parties in the course of business engagement shall be protected and not disclosed to third parties without prior written consent, except as required by law.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">6. Limitation of Liability</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    To the maximum extent permitted by law, AdmirerX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">7. Indemnification</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    You agree to indemnify, defend, and hold harmless AdmirerX and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these terms.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">8. Service Level Agreements</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    Specific service level agreements (SLAs) for our BPO and outsourcing services will be defined in individual service contracts. These SLAs may include response times, quality metrics, and performance standards tailored to each client&apos;s requirements.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">9. Termination</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 font-display">10. Governing Law</h2>
                  <p className="text-white/60 leading-relaxed font-medium">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
                  </p>
                </section>

                <section className="mt-12 pt-12 border-t border-white/10">
                  <h2 className="text-2xl font-bold mb-6 font-display">11. Contact Information</h2>
                  <p className="text-white/60 leading-relaxed mb-8 font-medium">
                    If you have any questions about these Terms and Conditions, please contact us:
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
