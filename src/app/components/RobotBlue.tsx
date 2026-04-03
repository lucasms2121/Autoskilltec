export function RobotBlue({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="blueBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="blueHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="blueVisorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0D0B2B" />
        </linearGradient>
        <filter id="blueGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="blueGlowStrong">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Antenna */}
      <line x1="100" y1="10" x2="100" y2="35" stroke="#00C2FF" strokeWidth="2.5" />
      <circle cx="100" cy="7" r="5" fill="#00C2FF" filter="url(#blueGlow)">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Head */}
      <rect x="55" y="35" width="90" height="80" rx="18" fill="url(#blueHeadGrad)" />
      <rect x="55" y="35" width="90" height="80" rx="18" fill="none" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Visor */}
      <rect x="65" y="48" width="70" height="40" rx="10" fill="url(#blueVisorGrad)" />
      <rect x="65" y="48" width="70" height="40" rx="10" fill="none" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.5" />

      {/* Eyes */}
      <circle cx="85" cy="68" r="10" fill="#00C2FF" filter="url(#blueGlowStrong)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="115" cy="68" r="10" fill="#00C2FF" filter="url(#blueGlowStrong)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="85" cy="68" r="4" fill="#0D0B2B" />
      <circle cx="115" cy="68" r="4" fill="#0D0B2B" />
      <circle cx="87" cy="66" r="1.5" fill="white" />
      <circle cx="117" cy="66" r="1.5" fill="white" />

      {/* Mouth */}
      <rect x="80" y="97" width="40" height="8" rx="4" fill="#1E1B4B" />
      <rect x="84" y="99" width="6" height="4" rx="2" fill="#00C2FF">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="94" y="99" width="6" height="4" rx="2" fill="#00C2FF">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="104" y="99" width="6" height="4" rx="2" fill="#00C2FF">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* Neck */}
      <rect x="88" y="115" width="24" height="12" rx="4" fill="#0EA5E9" />

      {/* Body */}
      <rect x="45" y="127" width="110" height="100" rx="16" fill="url(#blueBodyGrad)" />
      <rect x="45" y="127" width="110" height="100" rx="16" fill="none" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* Chest panel */}
      <rect x="60" y="140" width="80" height="55" rx="10" fill="#0D0B2B" fillOpacity="0.6" />

      {/* Circuit lines on chest */}
      <line x1="70" y1="155" x2="95" y2="155" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="95" y1="155" x2="95" y2="170" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="95" y1="170" x2="80" y2="170" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <circle cx="70" cy="155" r="2" fill="#00C2FF" />
      <circle cx="80" cy="170" r="2" fill="#00C2FF">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
      </circle>

      <line x1="130" y1="155" x2="105" y2="155" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="105" y1="155" x2="105" y2="170" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="105" y1="170" x2="120" y2="170" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.7" />
      <circle cx="130" cy="155" r="2" fill="#A855F7" />
      <circle cx="120" cy="170" r="2" fill="#A855F7">
        <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Center indicator */}
      <circle cx="100" cy="185" r="8" fill="#00C2FF" filter="url(#blueGlow)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="185" r="4" fill="#0D0B2B" />

      {/* Left Arm */}
      <rect x="12" y="130" width="28" height="80" rx="12" fill="url(#blueBodyGrad)" />
      <rect x="12" y="130" width="28" height="80" rx="12" fill="none" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.4" />
      {/* Left Hand */}
      <rect x="10" y="205" width="32" height="22" rx="10" fill="#0EA5E9" />
      <line x1="18" y1="210" x2="18" y2="222" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="26" y1="210" x2="26" y2="222" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="34" y1="210" x2="34" y2="222" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Right Arm */}
      <rect x="160" y="130" width="28" height="80" rx="12" fill="url(#blueBodyGrad)" />
      <rect x="160" y="130" width="28" height="80" rx="12" fill="none" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.4" />
      {/* Right Hand */}
      <rect x="158" y="205" width="32" height="22" rx="10" fill="#0EA5E9" />
      <line x1="166" y1="210" x2="166" y2="222" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="174" y1="210" x2="174" y2="222" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="182" y1="210" x2="182" y2="222" stroke="#00C2FF" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Legs */}
      <rect x="65" y="225" width="30" height="45" rx="12" fill="#0EA5E9" />
      <rect x="105" y="225" width="30" height="45" rx="12" fill="#0EA5E9" />

      {/* Feet */}
      <rect x="58" y="262" width="44" height="16" rx="8" fill="url(#blueHeadGrad)" />
      <rect x="98" y="262" width="44" height="16" rx="8" fill="url(#blueHeadGrad)" />

      {/* Shoulder indicators */}
      <circle cx="50" cy="138" r="5" fill="#00C2FF" filter="url(#blueGlow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="138" r="5" fill="#00C2FF" filter="url(#blueGlow)">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
