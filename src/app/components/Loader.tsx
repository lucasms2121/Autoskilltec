import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../imports/logosemfundo.png";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2800;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const eased = Math.min(100, Math.pow(current / steps, 0.6) * 100);
      setProgress(Math.round(eased));

      if (current >= steps) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #0D0B2B 0%, #1E1B4B 100%)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Circuit dots background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#00C2FF" : "#A855F7",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${1.5 + Math.random()}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="mb-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Logo mark */}
            <div className="mb-6 relative">
              <img
                src={logo}
                alt="Autoskilltec"
                className="h-20 w-auto"
                style={{ filter: 'drop-shadow(0 0 24px rgba(0,194,255,0.6))' }}
              />
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <circle
                    cx="70" cy="70" r="64"
                    fill="none"
                    stroke="#00C2FF"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="10 20"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Brand name */}
            <div
              className="tracking-widest text-white"
              style={{ fontFamily: "'Petrona', serif", fontSize: "22px", fontWeight: 800, letterSpacing: "0.25em" }}
            >
              AUTOSKILLTEC
            </div>
            <div
              className="mt-2 tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "#8080B8", letterSpacing: "0.15em" }}
            >
              SOLUÇÕES INTELIGENTES
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-64 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-full h-[2px] rounded-full" style={{ background: "rgba(128,128,184,0.2)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00C2FF, #A855F7)",
                  boxShadow: "0 0 12px #00C2FF80",
                  width: `${progress}%`,
                  transition: "width 0.1s ease-out",
                }}
              />
            </div>
            <div
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#8080B8" }}
            >
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}