import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "construtora",
    identifier: "Gestor · Construtora",
    text: "Nosso controle de pedidos era todo no papel e no WhatsApp — perdia prazo, material chegava atrasado na obra. Criaram um sistema sob medida com alerta automático no WhatsApp. Hoje o pedido entra, o fornecedor é notificado na hora e o material chega no prazo.",
    result: "Tempo de entrega reduzido em 50%",
    color: "#00C2FF",
  },
  {
    id: "advocacia",
    identifier: "Diretor · Escritório de Advocacia",
    text: "Tínhamos dezenas de planilhas que ninguém confiava — controle de prazos, processos e clientes tudo espalhado. Organizaram nosso fluxo de dados inteiro, automatizaram as planilhas e entregaram dashboards com relatórios automáticos. Agora abro um painel e sei exatamente o status de cada caso.",
    result: "Dados centralizados + relatórios automáticos",
    color: "#A855F7",
  },
  {
    id: "clinica",
    identifier: "Diretora · Clínica de Saúde",
    text: "Nosso WhatsApp era um caos — paciente mandava mensagem e ficava horas sem resposta, perdia agendamento. Implantaram um chatbot de IA que tira dúvidas, verifica disponibilidade e agenda consultas direto na agenda. Atendimento virou 24h sem contratar ninguém.",
    result: "Atendimento 24h no WhatsApp com IA",
    color: "#EC4899",
  },
];

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );
      testimonialsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: i * 0.12, scrollTrigger: { trigger: card, start: "top 85%" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="resultados" className="relative py-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(168,85,247,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <div
            className="inline-block px-4 py-1 rounded-full mb-5 border"
            style={{
              borderColor: "rgba(0,194,255,0.3)",
              background: "rgba(0,194,255,0.06)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              color: "#00C2FF",
              letterSpacing: "0.12em",
            }}
          >
            RESULTADOS REAIS
          </div>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "'Petrona', serif",
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.2,
            }}
          >
            O que nossos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C2FF, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              clientes dizem
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => { testimonialsRef.current[i] = el; }}
              className="opacity-0 relative rounded-2xl border p-7 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(30,27,75,0.9) 0%, rgba(13,11,43,0.95) 100%)",
                borderColor: `${t.color}20`,
              }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${t.color}12`, border: `1px solid ${t.color}25` }}
              >
                <Quote size={18} color={t.color} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} fill="#00C2FF" color="#00C2FF" />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#C4C4D4",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                "{t.text}"
              </p>

              {/* Result badge */}
              <div
                className="px-3 py-2 rounded-xl"
                style={{
                  background: `${t.color}10`,
                  border: `1px solid ${t.color}25`,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: t.color,
                }}
              >
                ✦ {t.result}
              </div>

              {/* Identifier */}
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, color: "#CECEE8" }}>
                {t.identifier}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
