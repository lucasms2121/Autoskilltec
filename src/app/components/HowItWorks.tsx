import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Settings, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Search,
    color: "#00C2FF",
    title: "Diagnóstico gratuito",
    description:
      "Conversamos com você para entender os processos, os gargalos e os objetivos da sua empresa. Sem custo, sem compromisso. Em 30 minutos já sabemos o que precisa ser feito.",
    detail: "Reunião de 30 min via Google Meet",
  },
  {
    number: "02",
    icon: Settings,
    color: "#A855F7",
    title: "Solução personalizada",
    description:
      "Desenvolvemos ou configuramos a solução ideal para o seu caso. Pode ser um sistema, uma automação, um dashboard ou tudo junto — sempre do jeito que faz sentido pro seu negócio.",
    detail: "Entrega em sprints de 2 semanas",
  },
  {
    number: "03",
    icon: TrendingUp,
    color: "#EC4899",
    title: "Acompanhamento contínuo",
    description:
      "Não sumimos depois de entregar. Monitoramos os resultados, ajustamos o que for preciso e estamos disponíveis quando você precisar. Parceiro de verdade, não só fornecedor.",
    detail: "Suporte e otimizações mensais",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1, duration: 1.5, ease: "power2.out",
            scrollTrigger: { trigger: lineRef.current, start: "top 80%" },
          }
        );
      }

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: { trigger: step, start: "top 85%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="como-funciona" className="relative py-28 px-6">
      {/* Section background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(13,11,43,0) 0%, rgba(30,27,75,0.3) 50%, rgba(13,11,43,0) 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 opacity-0">
          <div
            className="inline-block px-4 py-1 rounded-full mb-5 border"
            style={{
              borderColor: "rgba(168,85,247,0.3)",
              background: "rgba(168,85,247,0.06)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              color: "#A855F7",
              letterSpacing: "0.12em",
            }}
          >
            COMO FUNCIONA
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
            Simples assim.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #00C2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Três passos
            </span>{" "}
            para transformar seu negócio.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "#8080B8",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Sem burocracia, sem processo interminável. Do diagnóstico à entrega em semanas.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-16 left-0 right-0 h-px origin-left"
            style={{
              background: "linear-gradient(90deg, #00C2FF, #A855F7, #EC4899)",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[i] = el; }}
                className="opacity-0 flex flex-col items-center text-center group"
              >
                {/* Number + Icon circle */}
                <div className="relative mb-8">
                  {/* Outer ring */}
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center relative"
                    style={{
                      background: "rgba(13,11,43,0.8)",
                      border: `2px solid ${step.color}35`,
                    }}
                  >
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${step.color}15 0%, transparent 70%)`,
                        boxShadow: `0 0 40px ${step.color}25`,
                      }}
                    />
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${step.color}12`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <step.icon size={28} color={step.color} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: step.color,
                      boxShadow: `0 0 20px ${step.color}60`,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#0D0B2B",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  className="text-white mb-4"
                  style={{
                    fontFamily: "'Petrona', serif",
                    fontWeight: 700,
                    fontSize: "21px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "#8080B8",
                    lineHeight: 1.75,
                  }}
                >
                  {step.description}
                </p>

                {/* Detail badge */}
                <div
                  className="px-4 py-2 rounded-xl border"
                  style={{
                    borderColor: `${step.color}25`,
                    background: `${step.color}08`,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: step.color,
                  }}
                >
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA inline */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #EC4899, #A855F7)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "white",
              boxShadow: "0 0 40px rgba(236,72,153,0.3)",
            }}
          >
            Agendar diagnóstico gratuito →
          </button>
        </div>
      </div>
    </section>
  );
}
