import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import videoHero from "../../imports/videohero1.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToCTA = () => {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,194,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* Badge — centered */}
        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className="px-4 py-1.5 rounded-full border flex items-center gap-2"
            style={{
              borderColor: "rgba(0,194,255,0.3)",
              background: "rgba(0,194,255,0.05)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px",
              color: "#00C2FF",
              letterSpacing: "0.1em",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
            IA + AUTOMAÇÃO + SISTEMAS PARA PMEs BRASILEIRAS
          </div>
        </motion.div>

        {/* Two-column layout: text left | video right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            <motion.h1
              className="mb-3"
              style={{
                fontFamily: "'Petrona', serif",
                fontWeight: 900,
                fontSize: "clamp(42px, 5.5vw, 80px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #00C2FF, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Autoskilltec
            </motion.h1>

            <motion.h2
              style={{
                fontFamily: "'Petrona', serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 2.4vw, 32px)",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: "#C4C4D4",
                marginBottom: "24px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Sua empresa no piloto automático.{" "}
              <span style={{ color: "#ffffff" }}>Você no controle.</span>
            </motion.h2>

            <motion.p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: "#8080B8",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "36px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Desenvolvemos sistemas, automações e inteligência artificial para PMEs que querem crescer sem contratar mais gente ou aumentar o caos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <button
                onClick={scrollToCTA}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #A855F7)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "white",
                  boxShadow: "0 0 40px rgba(236, 72, 153, 0.35), 0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                Quero automatizar minha empresa
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl border transition-all duration-200 hover:border-[#00C2FF] hover:text-[#00C2FF]"
                style={{
                  borderColor: "rgba(128,128,184,0.3)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#8080B8",
                }}
              >
                Ver soluções
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {[
                { value: "+50", label: "Empresas atendidas" },
                { value: "40%", label: "Redução de retrabalho" },
                { value: "3x", label: "Mais velocidade" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div style={{ fontFamily: "'Petrona', serif", fontWeight: 800, fontSize: "28px", color: "#00C2FF" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#8080B8" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — 9:16 video */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="relative"
              style={{
                width: "clamp(200px, 22vw, 320px)",
                aspectRatio: "9 / 16",
                maskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              {/* Video — pauses at second 7 */}
              <video
                ref={videoRef}
                src={videoHero}
                autoPlay
                muted
                playsInline
                onTimeUpdate={() => {
                  const v = videoRef.current;
                  if (v && v.currentTime >= 7) {
                    v.pause();
                  }
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "#8080B8", letterSpacing: "0.1em" }}>
            ROLE PARA BAIXO
          </span>
          <ChevronDown size={16} color="#8080B8" className="animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}
