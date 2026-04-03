import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, BarChart2, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: Clock,
    color: "#00C2FF",
    title: "Tempo desperdiçado em tarefas manuais",
    description:
      "Sua equipe gasta horas copiando dados entre planilhas, respondendo sempre as mesmas mensagens e fazendo tarefas que uma máquina faria em segundos. Isso custa caro e desmotiva quem poderia estar gerando resultado.",
    impact: "8h/semana perdidas por colaborador, em média.",
  },
  {
    icon: BarChart2,
    color: "#A855F7",
    title: "Dados espalhados, decisões no escuro",
    description:
      "As informações do seu negócio estão no WhatsApp, em planilhas diferentes, em e-mails e na cabeça de pessoas. Quando você precisa de um número para decidir, ou não encontra ou não confia no que tem.",
    impact: "72% dos gestores de PMEs tomam decisões sem dados confiáveis.",
  },
  {
    icon: RefreshCw,
    color: "#EC4899",
    title: "Processos que dependem de uma só pessoa",
    description:
      "Se o fulano tirar férias, o processo para. Se a sicrana sair da empresa, o conhecimento vai junto. Negócios que dependem de pessoas específicas para funcionar não escalam — e ficam reféns de quem detém o processo.",
    impact: "Empresas assim crescem 3x mais devagar que a média.",
  },
];

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards staggered reveal
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 px-6" id="problema">
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 opacity-0">
          <div
            className="inline-block px-4 py-1 rounded-full mb-5 border"
            style={{
              borderColor: "rgba(236,72,153,0.3)",
              background: "rgba(236,72,153,0.07)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              color: "#EC4899",
              letterSpacing: "0.12em",
            }}
          >
            O PROBLEMA
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
            Você se identifica com{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              algum desses problemas?
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "#CECEE8",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Esses são os desafios mais comuns das PMEs brasileiras. Nós resolvemos todos eles.
          </p>
        </div>

        {/* Problem cards */}
        <div className="flex flex-col gap-8">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="opacity-0 relative rounded-2xl border p-8 flex flex-col md:flex-row gap-6 items-start group transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "linear-gradient(135deg, rgba(30,27,75,0.8) 0%, rgba(13,11,43,0.9) 100%)",
                borderColor: `${problem.color}20`,
                boxShadow: `0 0 40px ${problem.color}08`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${problem.color}40`;
                e.currentTarget.style.boxShadow = `0 0 60px ${problem.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${problem.color}20`;
                e.currentTarget.style.boxShadow = `0 0 40px ${problem.color}08`;
              }}
            >
              {/* Number */}
              <div
                className="absolute top-6 right-6"
                style={{
                  fontFamily: "'Petrona', serif",
                  fontWeight: 800,
                  fontSize: "64px",
                  color: `${problem.color}08`,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${problem.color}12`,
                  border: `1px solid ${problem.color}30`,
                }}
              >
                <problem.icon size={24} color={problem.color} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: "'Petrona', serif",
                    fontWeight: 700,
                    fontSize: "21px",
                    lineHeight: 1.3,
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  className="mb-5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "#CECEE8",
                    lineHeight: 1.75,
                  }}
                >
                  {problem.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{
                    background: `${problem.color}10`,
                    border: `1px solid ${problem.color}25`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: problem.color }} />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      color: problem.color,
                      fontWeight: 600,
                    }}
                  >
                    {problem.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <div className="mt-20 text-center">
          <div
            className="inline-block px-6 py-3 rounded-2xl border"
            style={{
              borderColor: "rgba(0,194,255,0.25)",
              background: "rgba(0,194,255,0.05)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "15px",
              color: "#00C2FF",
              fontWeight: 600,
            }}
          >
            Nós resolvemos isso — sem complicação, sem jargão técnico.
          </div>
        </div>
      </div>
    </section>
  );
}
