import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "../../imports/logosemfundo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13, 11, 43, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168, 85, 247, 0.1)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
          <img 
            src={logo}
            alt="Autoskilltec" 
            className="h-10 w-auto transition-transform duration-200 hover:scale-105"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#CECEE8" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00C2FF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#CECEE8")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#cta")}
            className="px-5 py-2 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #EC4899, #A855F7)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "white",
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
            }}
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden px-6 pb-6"
          style={{ background: "rgba(13, 11, 43, 0.98)" }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col gap-4 pt-2">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left py-2 border-b"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#CECEE8",
                  borderColor: "rgba(168,85,247,0.1)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#cta")}
              className="mt-2 py-3 rounded-xl text-center"
              style={{
                background: "linear-gradient(135deg, #EC4899, #A855F7)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "white",
              }}
            >
              Fale Conosco
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}