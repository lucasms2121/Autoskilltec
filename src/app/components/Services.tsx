import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Zap, BarChart3, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "sistemas",
    icon: Code2,
    color: "#00C2FF",
    title: "Desenvolvimento de sistemas",
    description: "Sistemas personalizados e adaptados para a sua necessidade.",
    tags: ["ERP personalizado", "Portais web e apps"],
  },
  {
    id: "automacao",
    icon: Zap,
    color: "#A855F7",
    title: "Automação de processos",
    description: "Automatizamos tarefas repetitivas para sua equipe focar no que importa.",
    tags: ["Fluxos automáticos", "Chatbots inteligentes"],
  },
  {
    id: "dados",
    icon: BarChart3,
    color: "#EC4899",
    title: "Análise de dados",
    description: "Dashboards, relatórios e fluxo de dados otimizado de ponta a ponta.",
    tags: ["Dashboards em tempo real", "KPIs do seu negócio"],
  },
  {
    id: "ia",
    icon: Brain,
    color: "#6B21A8",
    title: "IA aplicada",
    description: "Integramos IA nos seus processos e treinamos sua equipe para usar.",
    tags: ["Treinamento de equipes", "Agentes de IA"],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="servicos" className="relative py-16 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,194,255,0.04) 0%, transparent 60%)",
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
            NOSSAS SOLUÇÕES
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
            Tudo que sua empresa precisa{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C2FF, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              para crescer com tecnologia
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "#8080B8",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Do sistema ao robô de atendimento — implementamos, treinamos e acompanhamos.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div
      className="service-card opacity-0 group relative rounded-2xl border p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: "linear-gradient(135deg, rgba(30,27,75,0.9) 0%, rgba(13,11,43,0.95) 100%)",
        borderColor: `${service.color}20`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.borderColor = `${service.color}45`;
        el.style.boxShadow = `0 0 60px ${service.color}12, 0 20px 40px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.borderColor = `${service.color}20`;
        el.style.boxShadow = "none";
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
      />
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${service.color}12`, border: `1px solid ${service.color}30` }}
      >
        <service.icon size={24} color={service.color} strokeWidth={1.5} />
      </div>
      <div>
        <h3
          className="text-white mb-2"
          style={{ fontFamily: "'Petrona', serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.3 }}
        >
          {service.title}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#8080B8", lineHeight: 1.6, marginBottom: "14px" }}>
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: service.color,
                background: `${service.color}10`,
                border: `1px solid ${service.color}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
