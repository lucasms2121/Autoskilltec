import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AsteroidBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ─── Subtle aurora glow (very transparent) ───────────────────────────────
    const auroraGeo = new THREE.PlaneGeometry(20, 12);
    const auroraMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;

        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
        float noise(vec2 p){
          vec2 i=floor(p), f=fract(p), u=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
        }
        float fbm(vec2 p){
          float v=0.0,a=0.5;
          for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.1; a*=0.5; }
          return v;
        }

        void main(){
          float t = uTime * 0.12;
          vec2 uv = vUv;
          vec2 d = vec2(fbm(uv*2.0+vec2(t*0.5,t*0.3)), fbm(uv*2.0+vec2(t*0.3,t*0.6)));
          float b = fbm((uv + d*0.2)*1.6 + t*0.15);

          vec3 col = mix(vec3(0.3,0.1,0.55), vec3(0.0,0.45,0.72), b);
          float fade = smoothstep(0.0,0.5,uv.y)*smoothstep(1.0,0.5,uv.y);
          float alpha = clamp(b*fade*0.12, 0.0, 0.12);
          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const auroraPlane = new THREE.Mesh(auroraGeo, auroraMat);
    auroraPlane.position.z = -1;
    scene.add(auroraPlane);

    // ─── Asteroid streaks ─────────────────────────────────────────────────────
    const COUNT = 40;
    const pos   = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const cols  = new Float32Array(COUNT * 3);
    // Each asteroid drifts at a slightly different angle — store per-particle angle offset
    const angles = new Float32Array(COUNT);
    const phases = new Float32Array(COUNT); // per-particle pulse phase

    for (let i = 0; i < COUNT; i++) {
      pos[i*3+0] = (Math.random()-0.5)*24;
      pos[i*3+1] = (Math.random()-0.5)*15;
      pos[i*3+2] = (Math.random()-0.5)*4;

      // Larger size = longer streak
      sizes[i] = Math.random()*3.5 + 1.5;

      // Mostly diagonal down-right (~-30°) with small variation ±10°
      angles[i] = -0.52 + (Math.random()-0.5) * 0.35;
      phases[i] = Math.random() * Math.PI * 2.0;

      const t = Math.random();
      if (t < 0.55) {
        // Purple / violet
        cols[i*3+0] = 0.55 + Math.random()*0.3;
        cols[i*3+1] = 0.10 + Math.random()*0.18;
        cols[i*3+2] = 0.85 + Math.random()*0.15;
      } else if (t < 0.78) {
        // Cyan
        cols[i*3+0] = 0.0  + Math.random()*0.1;
        cols[i*3+1] = 0.65 + Math.random()*0.25;
        cols[i*3+2] = 0.90 + Math.random()*0.1;
      } else {
        // Pale lavender / white
        cols[i*3+0] = 0.72 + Math.random()*0.28;
        cols[i*3+1] = 0.60 + Math.random()*0.30;
        cols[i*3+2] = 1.0;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSize",    new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aColor",   new THREE.BufferAttribute(cols, 3));
    geo.setAttribute("aAngle",   new THREE.BufferAttribute(angles, 1));
    geo.setAttribute("aPhase",   new THREE.BufferAttribute(phases, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:       { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
      },
      vertexShader: `
        attribute float aSize;
        attribute vec3  aColor;
        attribute float aAngle;
        attribute float aPhase;
        uniform   float uTime;
        uniform   float uPixelRatio;
        varying   vec3  vColor;
        varying   float vAlpha;
        varying   float vAngle;
        varying   float vPulse;

        void main(){
          vColor = aColor;
          vAngle = aAngle;
          // Pulse: slow sine wave, range 0.3 → 1.0
          vPulse = 0.3 + 0.7 * (0.5 + 0.5 * sin(uTime * 0.9 + aPhase));

          vec3 p = position;
          // Move in the direction the streak is pointing
          float speed = aSize * 0.06 + 0.025;
          float dx = uTime * speed * cos(aAngle);
          float dy = uTime * speed * sin(aAngle);
          // Large offset (1000) ensures mod always gets a positive input
          p.x = mod(p.x + 1000.0 + dx, 24.0) - 12.0;
          p.y = mod(p.y + 1000.0 + dy, 15.0) - 7.5;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          // Large sprite to accommodate the long trail
          gl_PointSize = aSize * uPixelRatio * (420.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;

          float ex = abs(p.x/12.0);
          float ey = abs(p.y/7.5);
          vAlpha = (1.0 - smoothstep(0.8,1.0,ex)) * (1.0 - smoothstep(0.8,1.0,ey));
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vAlpha;
        varying float vAngle;
        varying float vPulse;

        void main(){
          // Rotate so streak aligns with motion angle
          vec2 p = gl_PointCoord - 0.5;
          float c = cos(vAngle), s = sin(vAngle);
          p = vec2(c*p.x - s*p.y, s*p.x + c*p.y);

          // ── Tail: long thin line, fades from head (right) to tip (left) ──
          float tailT  = clamp((0.46 - p.x) / 0.92, 0.0, 1.0);
          float lineW  = 0.008;
          float lineY  = 1.0 - smoothstep(0.0, lineW, abs(p.y));
          float inStreak = step(p.x, 0.39) * step(-0.46, p.x);
          float fade   = pow(1.0 - tailT, 1.4);
          float tail   = inStreak * lineY * fade;

          // ── Head: circular dot at front tip ──
          float headD = length(vec2(p.x - 0.41, p.y * 1.1));
          float head  = (1.0 - smoothstep(0.0, 0.07, headD)) * 1.3;

          float bright = max(head, tail) * vPulse;
          if(bright < 0.015) discard;

          vec3 col = mix(vColor, vec3(1.0), head * 0.45);
          gl_FragColor = vec4(col, clamp(bright, 0.0, 1.0) * vAlpha * 0.9);
        }
      `,
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ─── Animation ────────────────────────────────────────────────────────────
    let animId: number;
    let elapsed = 0;
    let last = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const now = performance.now();
      elapsed += (now - last) * 0.001;
      last = now;
      auroraMat.uniforms.uTime.value = elapsed;
      mat.uniforms.uTime.value       = elapsed;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      auroraGeo.dispose(); auroraMat.dispose();
      geo.dispose(); mat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
