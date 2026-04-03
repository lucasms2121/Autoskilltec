import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Minha empresa é pequena. Vale a pena investir em tecnologia agora?",
    answer:
      "Sim — na verdade, quanto menor a empresa, maior o impacto de uma automação ou sistema bem feito. Uma pequena empresa que automatiza 3 horas de trabalho manual por dia já economiza o equivalente a um salário por mês. Começamos pelo que traz retorno mais rápido.",
  },
  {
    question: "Preciso entender de tecnologia para trabalhar com vocês?",
    answer:
      "Não. Esse é justamente o nosso diferencial. Nós falamos a língua do seu negócio, não a língua do desenvolvedor. Você nos conta o problema, nós resolvemos. Sem jargão, sem complicação. Você só vai ver funcionando.",
  },
  {
    question: "Quanto tempo demora para entregar uma solução?",
    answer:
      "Depende da complexidade. Automações simples de processos podem ficar prontas em 1-2 semanas. Sistemas completos podem levar de 4 a 12 semanas. Trabalhamos em sprints — você já começa a ver resultado em 2 semanas, não espera meses para ver algo funcionando.",
  },
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer:
      "É uma conversa de 30 minutos via Google Meet. Você nos conta como funciona o seu negócio, onde estão os principais problemas e o que você gostaria de melhorar. A partir disso, criamos uma proposta personalizada com as soluções mais adequadas e o investimento necessário. Zero compromisso.",
  },
  {
    question: "E se eu precisar de suporte depois da entrega?",
    answer:
      "Oferecemos acompanhamento contínuo após a entrega. Não sumimos depois que entregamos. Temos planos de suporte mensais e estamos disponíveis para ajustes, melhorias e para responder dúvidas. Parceiro de verdade, não só fornecedor.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );
      gsap.fromTo(listRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: listRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
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
            PERGUNTAS FREQUENTES
          </div>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "'Petrona', serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.2,
            }}
          >
            Dúvidas que todo mundo tem{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00C2FF, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              antes de começar
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#8080B8", lineHeight: 1.7 }}>
            Respondemos as principais objeções com honestidade.
          </p>
        </div>

        {/* FAQ list */}
        <div ref={listRef} className="opacity-0 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                borderColor: openIndex === i ? "rgba(0,194,255,0.3)" : "rgba(168,85,247,0.12)",
                background: openIndex === i
                  ? "linear-gradient(135deg, rgba(30,27,75,0.95) 0%, rgba(13,11,43,1) 100%)"
                  : "linear-gradient(135deg, rgba(30,27,75,0.5) 0%, rgba(13,11,43,0.7) 100%)",
              }}
            >
              {/* Question */}
              <button
                className="w-full p-6 flex items-center justify-between gap-4 text-left transition-all duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: openIndex === i ? "#FFFFFF" : "#C4C4D4",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i ? "rgba(0,194,255,0.15)" : "rgba(168,85,247,0.1)",
                    border: `1px solid ${openIndex === i ? "rgba(0,194,255,0.3)" : "rgba(168,85,247,0.2)"}`,
                  }}
                >
                  {openIndex === i
                    ? <Minus size={14} color="#00C2FF" />
                    : <Plus size={14} color="#A855F7" />
                  }
                </div>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: openIndex === i ? "400px" : "0", opacity: openIndex === i ? 1 : 0 }}
              >
                <div className="px-6 pb-6">
                  <div className="h-px mb-4" style={{ background: "rgba(0,194,255,0.1)" }} />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      color: "#8080B8",
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
