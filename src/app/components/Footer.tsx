import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "../../imports/logosemfundo.png";

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t px-6 py-12"
      style={{
        borderColor: "rgba(168,85,247,0.12)",
        background: "rgba(13,11,43,0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo}
                alt="Autoskilltec" 
                className="h-9 w-auto"
              />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#8080B8", lineHeight: 1.7, maxWidth: "240px" }}>
              Soluções Inteligentes para Empresas que Querem Crescer.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(0,194,255,0.15)";
                    e.currentTarget.style.borderColor = "rgba(0,194,255,0.35)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(168,85,247,0.1)";
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
                  }}
                >
                  <Icon size={16} color="#8080B8" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#FFFFFF", letterSpacing: "0.1em", marginBottom: "16px" }}>
              NAVEGAÇÃO
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Resultados", href: "#resultados" },
                { label: "Sobre", href: "#sobre" },
                { label: "FAQ", href: "#faq" },
              ].map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#8080B8" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#FFFFFF", letterSpacing: "0.1em", marginBottom: "16px" }}>
              CONTATO
            </h4>
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#8080B8" }}>
                contato@autoskilltec.com.br
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#8080B8" }}>
                Brasil — Atendimento nacional
              </p>
            </div>
            <button
              onClick={() => scrollTo("#cta")}
              className="mt-5 px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #EC4899, #A855F7)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "white",
                boxShadow: "0 0 20px rgba(236,72,153,0.25)",
              }}
            >
              Fale conosco →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(168,85,247,0.08)" }}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#8080B8" }}>
            © 2026 Autoskilltec. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#8080B8" }}>
            Feito com ✦ e tecnologia para PMEs brasileiras
          </p>
        </div>
      </div>
    </footer>
  );
}