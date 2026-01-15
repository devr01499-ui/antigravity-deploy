"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  { href: "/careers", label: "Careers" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Support" },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8 group">
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Admirer<span className="text-white/40 group-hover:text-white transition-colors duration-500">X</span>
              </span>
            </Link>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Empowering global businesses with AI-driven solutions and
              exceptional human expertise. Together, we transform customer
              experiences and drive innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm font-medium inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-white group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm font-medium inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-white group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="glass p-4 rounded-2xl border border-white/5">
                <span className="block text-white/30 uppercase tracking-widest text-[10px] font-bold mb-2">Email</span>
                <a
                  href="mailto:management@admirerx.net"
                  className="text-white font-medium hover:text-white/70 transition-colors"
                >
                  management@admirerx.net
                </a>
              </li>
              <li className="glass p-4 rounded-2xl border border-white/5">
                <span className="block text-white/30 uppercase tracking-widest text-[10px] font-bold mb-2">Phone</span>
                <a
                  href="tel:+918826936399"
                  className="text-white font-medium hover:text-white/70 transition-colors"
                >
                  +91 88269 36399
                </a>
              </li>
              <li className="glass p-4 rounded-2xl border border-white/5">
                <span className="block text-white/30 uppercase tracking-widest text-[10px] font-bold mb-2">Address</span>
                <span className="text-white font-medium">Plot No - 761, Noida Sector 21</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} AdmirerX. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-white/30 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
