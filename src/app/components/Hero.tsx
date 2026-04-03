import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import videoHero from "../../imports/videohero1.mp4";
import image1Src from "../../imports/image1.jpeg";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

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
              {/* Video plays once like a GIF */}
              <video
                ref={videoRef}
                src={videoHero}
                autoPlay
                muted
                playsInline
                onTimeUpdate={() => {
                  const v = videoRef.current;
                  if (v && !videoEnded && v.duration - v.currentTime <= 1) {
                    setVideoEnded(true);
                  }
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: videoEnded ? "none" : "block",
                }}
              />

              {/* After video ends: image1 with lightning effect */}
              <AnimatePresence>
                {videoEnded && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0 }}
                  >
                    {/* Base image */}
                    <img
                      src={image1Src}
                      alt="Autoskilltec"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />

                    {/* Lightning SVG — electrified logo edges + pulsing glow */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 700"
                      preserveAspectRatio="xMidYMid slice"
                      style={{ pointerEvents: "none" }}
                    >
                      <defs>
                        <filter id="lg" x="-100%" y="-100%" width="300%" height="300%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <filter id="softglow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="18" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <radialGradient id="pulseGrad" cx="50%" cy="72%" r="55%">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.22" />
                          <stop offset="55%" stopColor="#A855F7" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#0D0B2B" stopOpacity="0" />
                        </radialGradient>
                        <style>{`
                          @keyframes pulse  { 0%,100%{opacity:0.4} 50%{opacity:0.75} }
                          @keyframes bA { 0%,100%{opacity:0} 5%,10%{opacity:1} 12%{opacity:0} 52%,57%{opacity:0.9} 59%{opacity:0} }
                          @keyframes bB { 0%,100%{opacity:0} 18%,23%{opacity:1} 25%{opacity:0} 68%,73%{opacity:0.85} 75%{opacity:0} }
                          @keyframes bC { 0%,100%{opacity:0} 33%,38%{opacity:1} 40%{opacity:0} 80%,85%{opacity:0.9} 87%{opacity:0} }
                          @keyframes bD { 0%,100%{opacity:0} 45%,50%{opacity:1} 52%{opacity:0} 12%,16%{opacity:0.8} 18%{opacity:0} }
                          @keyframes bE { 0%,100%{opacity:0} 62%,67%{opacity:1} 69%{opacity:0} 25%,29%{opacity:0.75} 31%{opacity:0} }
                        `}</style>
                      </defs>

                      {/* Pulsing purple radial glow over whole image */}
                      <rect x="0" y="0" width="400" height="700"
                        fill="url(#pulseGrad)"
                        style={{ animation: "pulse 2.4s ease-in-out infinite" }}
                      />

                      {/*
                        Logo = play button, ponta para DIREITA:
                          TopLeft:   (147, 380)
                          BotLeft:   (147, 527)
                          RightTip:  (283, 453)
                        — 30% menor que anterior, centro mantido em (215,453)
                      */}

                      {/* LEFT EDGE — vertical: TopLeft → BotLeft */}
                      <g filter="url(#lg)" style={{ animation: "bA 4s ease-in-out infinite" }}>
                        <polyline
                          points="147,380 141,405 153,430 141,453 153,478 141,503 147,527"
                          fill="none" stroke="#C084FC" strokeWidth="2.6" strokeLinejoin="round" />
                        <polyline
                          points="147,380 141,405 153,430 141,453 153,478 141,503 147,527"
                          fill="none" stroke="white" strokeWidth="0.7" strokeLinejoin="round" />
                      </g>
                      {/* LEFT EDGE — echo */}
                      <g filter="url(#lg)" style={{ animation: "bD 5s ease-in-out infinite 0.9s" }}>
                        <polyline
                          points="147,380 153,407 141,432 153,453 141,480 153,505 147,527"
                          fill="none" stroke="#A855F7" strokeWidth="1.4" strokeLinejoin="round" />
                      </g>

                      {/* TOP EDGE — diagonal: TopLeft → RightTip */}
                      <g filter="url(#lg)" style={{ animation: "bB 4.5s ease-in-out infinite 0.4s" }}>
                        <polyline
                          points="147,380 178,393 197,413 233,421 252,443 283,453"
                          fill="none" stroke="#C084FC" strokeWidth="2.6" strokeLinejoin="round" />
                        <polyline
                          points="147,380 178,393 197,413 233,421 252,443 283,453"
                          fill="none" stroke="white" strokeWidth="0.7" strokeLinejoin="round" />
                      </g>
                      {/* TOP EDGE — echo */}
                      <g filter="url(#lg)" style={{ animation: "bE 5.5s ease-in-out infinite 1.3s" }}>
                        <polyline
                          points="147,380 171,398 205,407 226,428 261,437 283,453"
                          fill="none" stroke="#7C3AED" strokeWidth="1.4" strokeLinejoin="round" />
                      </g>

                      {/* BOTTOM EDGE — diagonal: RightTip → BotLeft */}
                      <g filter="url(#lg)" style={{ animation: "bC 4.2s ease-in-out infinite 0.8s" }}>
                        <polyline
                          points="283,453 252,470 233,487 197,500 171,516 147,527"
                          fill="none" stroke="#D946EF" strokeWidth="2.6" strokeLinejoin="round" />
                        <polyline
                          points="283,453 252,470 233,487 197,500 171,516 147,527"
                          fill="none" stroke="white" strokeWidth="0.7" strokeLinejoin="round" />
                      </g>
                      {/* BOTTOM EDGE — echo */}
                      <g filter="url(#lg)" style={{ animation: "bA 5.8s ease-in-out infinite 1.6s" }}>
                        <polyline
                          points="283,453 259,473 226,486 206,502 179,519 147,527"
                          fill="none" stroke="#A855F7" strokeWidth="1.4" strokeLinejoin="round" />
                      </g>

                      {/* Sparks nos vértices */}
                      <g filter="url(#lg)" style={{ animation: "bB 3s ease-in-out infinite 0.3s" }}>
                        <line x1="147" y1="380" x2="137" y2="370" stroke="#E9D5FF" strokeWidth="2"/>
                        <line x1="147" y1="380" x2="135" y2="384" stroke="#C084FC" strokeWidth="1.5"/>
                        <line x1="147" y1="527" x2="137" y2="537" stroke="#A855F7" strokeWidth="2"/>
                        <line x1="147" y1="527" x2="135" y2="523" stroke="#C084FC" strokeWidth="1.5"/>
                        <line x1="283" y1="453" x2="297" y2="448" stroke="#D946EF" strokeWidth="2"/>
                        <line x1="283" y1="453" x2="297" y2="458" stroke="#E9D5FF" strokeWidth="2"/>
                      </g>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
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
