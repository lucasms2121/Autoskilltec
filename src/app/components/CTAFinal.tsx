import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { ArrowRight, MessageCircle, Shield, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  nome: string;
  whatsapp: string;
  empresa: string;
}

function formatWhatsApp(value: string) {
  const nums = value.replace(/\D/g, "").slice(0, 11);
  if (nums.length <= 2) return nums;
  if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
  return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
}

export function CTAFinal() {
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const whatsappValue = watch("whatsapp", "");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: contentRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    // In production: integrate with EmailJS, n8n webhook, or similar
    const message = `Olá! Vim pelo site da Autoskilltec.%0ANome: ${data.nome}%0AEmpresa: ${data.empresa}`;
    const phone = data.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/55${phone}?text=${message}`, "_blank");
  };

  return (
    <section ref={sectionRef} id="cta" className="relative py-28 px-6">
      {/* CTA background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(13,11,43,0) 0%, rgba(59,7,100,0.15) 40%, rgba(59,7,100,0.2) 60%, rgba(13,11,43,0) 100%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div ref={contentRef} className="max-w-2xl mx-auto opacity-0">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-1 rounded-full mb-6 border"
            style={{
              borderColor: "rgba(236,72,153,0.35)",
              background: "rgba(236,72,153,0.08)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              color: "#EC4899",
              letterSpacing: "0.12em",
            }}
          >
            COMECE AGORA — GRATUITO
          </div>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "'Petrona', serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 50px)",
              lineHeight: 1.15,
            }}
          >
            Pronto para sua empresa{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #EC4899, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              crescer com tecnologia?
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "#B4B4CC",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Preencha abaixo e nossa equipe entra em contato em até 24h para agendar o diagnóstico gratuito.
          </p>
        </div>

        {/* Form */}
        {isSubmitSuccessful ? (
          <div
            className="text-center py-16 px-8 rounded-2xl border"
            style={{
              borderColor: "rgba(0,194,255,0.3)",
              background: "linear-gradient(135deg, rgba(30,27,75,0.9) 0%, rgba(13,11,43,0.95) 100%)",
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(0,194,255,0.15)", border: "1px solid rgba(0,194,255,0.3)" }}
            >
              <MessageCircle size={28} color="#00C2FF" />
            </div>
            <h3
              className="text-white mb-3"
              style={{ fontFamily: "'Petrona', serif", fontWeight: 800, fontSize: "26px" }}
            >
              Recebemos sua mensagem!
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#B4B4CC", lineHeight: 1.7 }}>
              Nossa equipe entrará em contato via WhatsApp em até 24h. <br />
              Mal podemos esperar para conhecer o seu negócio!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border p-8 flex flex-col gap-5"
            style={{
              background: "linear-gradient(135deg, rgba(30,27,75,0.9) 0%, rgba(13,11,43,0.95) 100%)",
              borderColor: "rgba(168,85,247,0.2)",
              boxShadow: "0 0 80px rgba(168,85,247,0.08), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#B4B4CC",
                  letterSpacing: "0.05em",
                }}
              >
                SEU NOME
              </label>
              <input
                {...register("nome", { required: "Nome é obrigatório" })}
                placeholder="João Silva"
                className="px-4 py-3.5 rounded-xl outline-none transition-all duration-200"
                style={{
                  background: "rgba(13,11,43,0.8)",
                  border: `1px solid ${errors.nome ? "#EC4899" : "rgba(168,85,247,0.2)"}`,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
                onFocus={e => { e.target.style.borderColor = "#00C2FF"; e.target.style.boxShadow = "0 0 0 2px rgba(0,194,255,0.15)"; }}
                onBlur={e => { e.target.style.borderColor = errors.nome ? "#EC4899" : "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }}
              />
              {errors.nome && <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#EC4899" }}>{errors.nome.message}</span>}
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#B4B4CC",
                  letterSpacing: "0.05em",
                }}
              >
                SEU WHATSAPP
              </label>
              <input
                {...register("whatsapp", {
                  required: "WhatsApp é obrigatório",
                  minLength: { value: 14, message: "WhatsApp inválido" },
                })}
                placeholder="(11) 99999-9999"
                value={whatsappValue}
                onChange={e => setValue("whatsapp", formatWhatsApp(e.target.value))}
                className="px-4 py-3.5 rounded-xl outline-none transition-all duration-200"
                style={{
                  background: "rgba(13,11,43,0.8)",
                  border: `1px solid ${errors.whatsapp ? "#EC4899" : "rgba(168,85,247,0.2)"}`,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
                onFocus={e => { e.target.style.borderColor = "#00C2FF"; e.target.style.boxShadow = "0 0 0 2px rgba(0,194,255,0.15)"; }}
                onBlur={e => { e.target.style.borderColor = errors.whatsapp ? "#EC4899" : "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }}
              />
              {errors.whatsapp && <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#EC4899" }}>{errors.whatsapp.message}</span>}
            </div>

            {/* Empresa */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#B4B4CC",
                  letterSpacing: "0.05em",
                }}
              >
                NOME DA EMPRESA
              </label>
              <input
                {...register("empresa", { required: "Empresa é obrigatória" })}
                placeholder="Minha Empresa Ltda."
                className="px-4 py-3.5 rounded-xl outline-none transition-all duration-200"
                style={{
                  background: "rgba(13,11,43,0.8)",
                  border: `1px solid ${errors.empresa ? "#EC4899" : "rgba(168,85,247,0.2)"}`,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
                onFocus={e => { e.target.style.borderColor = "#00C2FF"; e.target.style.boxShadow = "0 0 0 2px rgba(0,194,255,0.15)"; }}
                onBlur={e => { e.target.style.borderColor = errors.empresa ? "#EC4899" : "rgba(168,85,247,0.2)"; e.target.style.boxShadow = "none"; }}
              />
              {errors.empresa && <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#EC4899" }}>{errors.empresa.message}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center justify-center gap-3 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              style={{
                background: isSubmitting
                  ? "rgba(236,72,153,0.5)"
                  : "linear-gradient(135deg, #EC4899, #A855F7)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "white",
                boxShadow: "0 0 40px rgba(236, 72, 153, 0.4), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Quero o diagnóstico gratuito
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              {[
                { icon: Shield, text: "100% sem compromisso" },
                { icon: Clock, text: "Resposta em até 24h" },
                { icon: MessageCircle, text: "Contato via WhatsApp" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} color="#B4B4CC" />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#B4B4CC" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
