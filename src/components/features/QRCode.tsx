import { useEffect, useRef } from "react";

interface QRCodeProps {
  value: string;
  size?: number;
}

// Simple QR code generator using a canvas-based approach
export default function QRCode({ value, size = 80 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw a basic QR-like pattern (decorative)
    const cellSize = size / 25;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Generate deterministic pattern from value
    const hash = value.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

    ctx.fillStyle = "#1a3a6b";

    // Fixed corner squares (finder patterns)
    const drawFinderPattern = (x: number, y: number) => {
      const s = cellSize;
      ctx.fillRect(x * s, y * s, 7 * s, 7 * s);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect((x + 1) * s, (y + 1) * s, 5 * s, 5 * s);
      ctx.fillStyle = "#1a3a6b";
      ctx.fillRect((x + 2) * s, (y + 2) * s, 3 * s, 3 * s);
    };

    drawFinderPattern(0, 0);
    drawFinderPattern(18, 0);
    drawFinderPattern(0, 18);

    // Data cells
    for (let row = 0; row < 25; row++) {
      for (let col = 0; col < 25; col++) {
        // Skip finder pattern areas
        const inFinder =
          (row < 8 && col < 8) ||
          (row < 8 && col >= 17) ||
          (row >= 17 && col < 8);
        if (inFinder) continue;

        const seed = (row * 31 + col * 17 + hash) % 100;
        if (seed < 45) {
          ctx.fillStyle = "#1a3a6b";
          ctx.fillRect(col * cellSize, row * cellSize, cellSize - 0.5, cellSize - 0.5);
        }
      }
    }
  }, [value, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ width: size, height: size, imageRendering: "pixelated" }}
    />
  );
}
