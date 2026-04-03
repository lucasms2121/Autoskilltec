import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Zap, BarChart3, Brain, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "sistemas",
    icon: Code2,
    color: "#00C2FF",
    title: "Sistemas sob medida",
    description:
      "Desenvolvemos sistemas que se encaixam exatamente no seu processo — não o contrário. Do cadastro de clientes ao controle de estoque, tudo integrado e funcionando do jeito que você precisa.",
    features: ["ERP personalizado", "Portais web e apps", "Integrações de sistemas", "APIs sob medida"],
    size: "large",
  },
  {
    id: "automacao",
    icon: Zap,
    color: "#A855F7",
    title: "Automação de processos",
    description:
      "Automatizamos tarefas repetitivas com n8n, chatbots no WhatsApp e Make. Seu time foca no que importa.",
    features: ["Chatbots WhatsApp", "Automação n8n/Make", "Fluxos de aprovação", "Notificações automáticas"],
    size: "medium",
  },
  {
    id: "dados",
    icon: BarChart3,
    color: "#EC4899",
    title: "Análise de dados",
    description:
      "Dashboards e relatórios que transformam dados espalhados em decisões claras. Sem precisar de cientista de dados.",
    features: ["Dashboards em tempo real", "Relatórios automáticos", "KPIs do seu negócio", "Power BI / Looker"],
    size: "medium",
  },
  {
    id: "ia",
    icon: Brain,
    color: "#6B21A8",
    title: "IA aplicada",
    description:
      "Implementamos e treinamos inteligência artificial que realmente resolve problemas do seu negócio — e treinamos sua equipe para usar.",
    features: ["Agentes de IA", "Treinamento de equipes", "Chatbots com IA", "Análise preditiva"],
    size: "large",
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
    <section ref={sectionRef} id="servicos" className="relative py-28 px-6">
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

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Card 1 - Large (2 cols) */}
          <ServiceCard service={services[0]} className="lg:col-span-2" />
          {/* Card 2 */}
          <ServiceCard service={services[1]} className="" />
          {/* Card 3 */}
          <ServiceCard service={services[2]} className="" />
          {/* Card 4 - Large (2 cols) */}
          <ServiceCard service={services[3]} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, className }: { service: typeof services[0]; className: string }) {
  return (
    <div
      className={`service-card opacity-0 group relative rounded-2xl border p-7 flex flex-col gap-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className}`}
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
      {/* Glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `${service.color}12`,
          border: `1px solid ${service.color}30`,
        }}
      >
        <service.icon size={26} color={service.color} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          className="text-white mb-3"
          style={{
            fontFamily: "'Petrona', serif",
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>
        <p
          className="mb-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "#8080B8",
            lineHeight: 1.7,
          }}
        >
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feat) => (
            <span
              key={feat}
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
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-end">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
          style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
        >
          <ArrowRight size={16} color={service.color} />
        </div>
      </div>
    </div>
  );
}
