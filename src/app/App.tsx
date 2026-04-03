import { useState } from "react";
import { Loader } from "./components/Loader";
import { CircuitBackground } from "./components/CircuitBackground";
import { AsteroidBackground } from "./components/AsteroidBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Results } from "./components/Results";
import { FAQ } from "./components/FAQ";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";
import "../styles/fonts.css";
import "../styles/autoskilltec.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />

      {loaded && (
        <div
          className="relative min-h-screen"
          style={{ background: "#0D0B2B" }}
        >
          {/* Animated backgrounds */}
          <CircuitBackground />
          <AsteroidBackground />

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <main>
            <Hero />
            <Services />
            <HowItWorks />
            <Results />
            <FAQ />
            <CTAFinal />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}