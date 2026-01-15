import "./globals.css";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { FooterWrapper } from "@/components/FooterWrapper";
// import WhatsAppButtonWrapper from "@/components/WhatsAppButtonWrapper"; // Optional: Uncomment if available/desired

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <NavbarWrapper />
        {children}
        <FooterWrapper />
        {/* <WhatsAppButtonWrapper /> */}
      </body>
    </html>
  );
}
