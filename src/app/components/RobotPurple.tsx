export function RobotPurple({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="purpleBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="purpleHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="purpleVisorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0D0B2B" />
        </linearGradient>
        <filter id="purpleGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="purpleGlowStrong">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Antenna double */}
      <line x1="90" y1="12" x2="90" y2="35" stroke="#A855F7" strokeWidth="2.5" />
      <line x1="110" y1="12" x2="110" y2="35" stroke="#EC4899" strokeWidth="2.5" />
      <circle cx="90" cy="8" r="4" fill="#A855F7" filter="url(#purpleGlow)">
        <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="8" r="4" fill="#EC4899" filter="url(#purpleGlow)">
        <animate attributeName="r" values="5;3;5" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Head - slightly wider/rounder */}
      <rect x="52" y="35" width="96" height="82" rx="20" fill="url(#purpleHeadGrad)" />
      <rect x="52" y="35" width="96" height="82" rx="20" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Visor */}
      <rect x="63" y="48" width="74" height="42" rx="12" fill="url(#purpleVisorGrad)" />
      <rect x="63" y="48" width="74" height="42" rx="12" fill="none" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.5" />

      {/* Eyes - star/diamond shape for different look */}
      <circle cx="84" cy="69" r="11" fill="#A855F7" filter="url(#purpleGlowStrong)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="116" cy="69" r="11" fill="#A855F7" filter="url(#purpleGlowStrong)">
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="84" cy="69" r="5" fill="#0D0B2B" />
      <circle cx="116" cy="69" r="5" fill="#0D0B2B" />
      <circle cx="82" cy="67" r="2" fill="white" />
      <circle cx="114" cy="67" r="2" fill="white" />

      {/* Smile */}
      <path d="M76 99 Q100 112 124 99" stroke="#C084FC" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <animate attributeName="d" values="M76 99 Q100 112 124 99;M76 101 Q100 110 124 101;M76 99 Q100 112 124 99" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Neck */}
      <rect x="86" y="117" width="28" height="13" rx="5" fill="#9333EA" />

      {/* Body */}
      <rect x="42" y="130" width="116" height="98" rx="18" fill="url(#purpleBodyGrad)" />
      <rect x="42" y="130" width="116" height="98" rx="18" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* Chest panel */}
      <rect x="58" y="143" width="84" height="55" rx="12" fill="#0D0B2B" fillOpacity="0.6" />

      {/* AI chip design on chest */}
      <rect x="75" y="155" width="50" height="30" rx="4" fill="none" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.6" />
      <rect x="82" y="162" width="36" height="16" rx="3" fill="#A855F7" fillOpacity="0.15" />
      <text x="100" y="174" textAnchor="middle" fill="#C084FC" fontSize="8" fontFamily="Space Grotesk" fontWeight="700">A.I.</text>

      {/* Pins on chip */}
      {[0,1,2].map(i => (
        <line key={`top-${i}`} x1={80 + i * 12} y1="155" x2={80 + i * 12} y2="150" stroke="#EC4899" strokeWidth="1.5" />
      ))}
      {[0,1,2].map(i => (
        <line key={`bot-${i}`} x1={80 + i * 12} y1="185" x2={80 + i * 12} y2="190" stroke="#EC4899" strokeWidth="1.5" />
      ))}

      {/* Indicators on chest sides */}
      <circle cx="68" cy="160" r="4" fill="#EC4899">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="68" cy="173" r="4" fill="#A855F7">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="132" cy="160" r="4" fill="#A855F7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="132" cy="173" r="4" fill="#EC4899">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
      </circle>

      {/* Left Arm */}
      <rect x="10" y="132" width="28" height="82" rx="13" fill="url(#purpleBodyGrad)" />
      <rect x="10" y="132" width="28" height="82" rx="13" fill="none" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
      {/* Left Hand - wave gesture */}
      <rect x="8" y="207" width="32" height="24" rx="12" fill="#9333EA" />
      <line x1="16" y1="212" x2="16" y2="225" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="24" y1="210" x2="24" y2="225" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="32" y1="212" x2="32" y2="225" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* Right Arm */}
      <rect x="162" y="132" width="28" height="82" rx="13" fill="url(#purpleBodyGrad)" />
      <rect x="162" y="132" width="28" height="82" rx="13" fill="none" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
      {/* Right Hand */}
      <rect x="160" y="207" width="32" height="24" rx="12" fill="#9333EA" />
      <line x1="168" y1="212" x2="168" y2="225" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="176" y1="210" x2="176" y2="225" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="184" y1="212" x2="184" y2="225" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* Legs */}
      <rect x="63" y="226" width="30" height="44" rx="13" fill="#9333EA" />
      <rect x="107" y="226" width="30" height="44" rx="13" fill="#9333EA" />

      {/* Feet */}
      <rect x="55" y="262" width="46" height="16" rx="8" fill="url(#purpleHeadGrad)" />
      <rect x="99" y="262" width="46" height="16" rx="8" fill="url(#purpleHeadGrad)" />

      {/* Shoulder indicators */}
      <circle cx="47" cy="140" r="5" fill="#EC4899" filter="url(#purpleGlow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="153" cy="140" r="5" fill="#EC4899" filter="url(#purpleGlow)">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
