import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Handshake, Lightbulb, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Target, color: "#00C2FF", title: "Foco em resultado", desc: "Não entregamos código — entregamos resultado para o seu negócio." },
  { icon: Handshake, color: "#A855F7", title: "Parceria de verdade", desc: "Estamos com você antes, durante e depois. Não somos só fornecedor." },
  { icon: Lightbulb, color: "#EC4899", title: "Tecnologia acessível", desc: "Traduzimos o tecnês para o português. Sem jargão, sem complicação." },
  { icon: Users, color: "#00C2FF", title: "Time especializado", desc: "Desenvolvedores, analistas e especialistas em IA — tudo em um só lugar." },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: leftRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: rightRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="relative py-28 px-6">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(13,11,43,0) 0%, rgba(59,7,100,0.12) 50%, rgba(13,11,43,0) 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div ref={leftRef} className="opacity-0">
            <div
              className="inline-block px-4 py-1 rounded-full mb-6 border"
              style={{
                borderColor: "rgba(168,85,247,0.3)",
                background: "rgba(168,85,247,0.06)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "11px",
                color: "#A855F7",
                letterSpacing: "0.12em",
              }}
            >
              QUEM SOMOS
            </div>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Petrona', serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              Tecnologia que trabalha{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A855F7, #00C2FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                para você dormir tranquilo
              </span>
            </h2>
            <p
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: "#B4B4CC",
                lineHeight: 1.8,
              }}
            >
              A Autoskilltec nasceu com um propósito claro: tornar tecnologia de ponta acessível para quem mais precisa — os donos e gestores de pequenas e médias empresas brasileiras.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: "#B4B4CC",
                lineHeight: 1.8,
              }}
            >
              Sabemos que você não quer entender de tecnologia — você quer que o processo funcione, que os dados estejam organizados e que sua equipe possa focar no que realmente importa. É exatamente isso que a gente entrega.
            </p>

            {/* Slogan */}
            <div
              className="p-5 rounded-2xl border"
              style={{
                borderColor: "rgba(0,194,255,0.2)",
                background: "rgba(0,194,255,0.04)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Petrona', serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#00C2FF",
                  lineHeight: 1.5,
                }}
              >
                "Soluções Inteligentes para Empresas que Querem Crescer"
              </p>
            </div>
          </div>

          {/* Right - Values */}
          <div ref={rightRef} className="opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border p-6 flex flex-col gap-4 hover:scale-[1.03] transition-transform duration-300 group"
                style={{
                  background: "linear-gradient(135deg, rgba(30,27,75,0.8) 0%, rgba(13,11,43,0.9) 100%)",
                  borderColor: `${value.color}20`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${value.color}40`;
                  e.currentTarget.style.boxShadow = `0 0 40px ${value.color}10`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${value.color}20`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${value.color}12`,
                    border: `1px solid ${value.color}30`,
                  }}
                >
                  <value.icon size={22} color={value.color} strokeWidth={1.5} />
                </div>
                <div>
                  <h4
                    className="text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px" }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#B4B4CC",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
