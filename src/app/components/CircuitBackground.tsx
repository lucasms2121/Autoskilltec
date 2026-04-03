import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
}

interface Line {
  startNode: Node;
  endNode: Node;
  progress: number;
  speed: number;
  active: boolean;
  delay: number;
  color: string;
}

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lines: Line[] = [];
    let nodes: Node[] = [];

    const colors = ["#00C2FF", "#A855F7", "#6B21A8"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateCircuit();
    };

    const generateCircuit = () => {
      nodes = [];
      lines = [];

      const cols = Math.floor(canvas.width / 80);
      const rows = Math.floor(canvas.height / 80);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          nodes.push({
            x: (i * canvas.width) / cols,
            y: (j * canvas.height) / rows,
          });
        }
      }

      const lineCount = Math.floor((cols * rows) * 0.4);
      for (let i = 0; i < lineCount; i++) {
        const startIdx = Math.floor(Math.random() * nodes.length);
        let endIdx = startIdx;

        const colsPerRow = cols + 1;
        const col = startIdx % colsPerRow;
        const row = Math.floor(startIdx / colsPerRow);

        const dirs = [
          [0, 1], [0, -1], [1, 0], [-1, 0]
        ];
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        const newCol = col + dir[0];
        const newRow = row + dir[1];

        if (newCol >= 0 && newCol <= cols && newRow >= 0 && newRow <= rows) {
          endIdx = newRow * colsPerRow + newCol;
        }

        if (startIdx !== endIdx) {
          lines.push({
            startNode: nodes[startIdx],
            endNode: nodes[endIdx],
            progress: Math.random(),
            speed: 0.001 + Math.random() * 0.003,
            active: Math.random() > 0.3,
            delay: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw static lines
      lines.forEach((line) => {
        const { startNode, endNode } = line;
        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(endNode.x, endNode.y);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw animated pulses
      lines.forEach((line) => {
        if (!line.active || frame < line.delay) return;
        line.progress += line.speed;
        if (line.progress > 1) {
          line.progress = 0;
          line.active = Math.random() > 0.2;
        }

        const { startNode, endNode, progress, color } = line;
        const px = startNode.x + (endNode.x - startNode.x) * progress;
        const py = startNode.y + (endNode.y - startNode.y) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = color + "40";
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        if (i % 5 !== 0) return;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 194, 255, 0.08)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.07 }}
    />
  );
}
