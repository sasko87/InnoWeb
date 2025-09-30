import React, { useRef, useEffect } from "react";

export default function Background({
  starCount = 500,
  maxStarSize = 2.5,
  parallaxStrength = 30,
  subtleDrift = 0.0002,
} = {}) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);

  const starCanvasRef = useRef(null);
  const nebulaCanvasesRef = useRef([]);
  const targetOpacitiesRef = useRef([]);
  const currentOpacitiesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const starCanvas = document.createElement("canvas");
    const starCtx = starCanvas.getContext("2d");
    starCanvasRef.current = starCanvas;

    const clusterCount = 3; // number of nebula clusters
    nebulaCanvasesRef.current = [];
    targetOpacitiesRef.current = [];
    currentOpacitiesRef.current = [];

    for (let i = 0; i < clusterCount; i++) {
      const nebCanvas = document.createElement("canvas");
      nebulaCanvasesRef.current.push(nebCanvas);
      targetOpacitiesRef.current.push(0);
      currentOpacitiesRef.current.push(0);
    }

    function resize() {
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = height;

      // Make nebula bigger on small screens
      const sizeMultiplier = window.innerWidth < 768 ? 2 : 1.5;

      nebulaCanvasesRef.current.forEach((nebCanvas) => {
        nebCanvas.width = window.innerWidth * sizeMultiplier;
        nebCanvas.height = window.innerHeight * sizeMultiplier;
      });

      initStars();
      drawStarTexture(maxStarSize);
      drawNebulaClusters();
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function initStars() {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        const z = Math.pow(Math.random(), 2);
        const size = rand(0.2, maxStarSize) * (0.5 + z);
        if (size < 0.3) continue;
        starsRef.current.push({
          nx: rand(-1, 1),
          ny: rand(-1, 1),
          z,
          size,
          pulse: Math.random() * 0.9 + 0.1,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function drawStarTexture(size) {
      const diameter = size * 6;
      starCanvas.width = diameter;
      starCanvas.height = diameter;
      const cx = diameter / 2;
      const cy = diameter / 2;

      const grad = starCtx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        diameter / 2
      );
      grad.addColorStop(0, "rgba(18,175,239,1)");
      grad.addColorStop(0.2, "rgba(18,175,239,0.8)");
      grad.addColorStop(0.4, "rgba(18,175,239,0.5)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      starCtx.clearRect(0, 0, diameter, diameter);
      starCtx.fillStyle = grad;
      starCtx.beginPath();
      starCtx.arc(cx, cy, diameter / 2, 0, Math.PI * 2);
      starCtx.fill();
    }

    function drawAbstractNebula(nebCanvas) {
      const w = nebCanvas.width;
      const h = nebCanvas.height;
      const nebCtx = nebCanvas.getContext("2d");
      nebCtx.clearRect(0, 0, w, h);

      const centerX = w / 2;
      const centerY = h / 2;

      // Increase blobs on small screens
      const blobCount = window.innerWidth < 768 ? 25 : 15;

      for (let i = 0; i < blobCount; i++) {
        const offsetX = rand(-w * 0.3, w * 0.3);
        const offsetY = rand(-h * 0.3, h * 0.3);
        const radius = rand(w * 0.25, w * 0.55);

        const baseAlpha = window.innerWidth < 768 ? 0.08 : 0.04;
        const alpha = rand(baseAlpha, baseAlpha + 0.1);

        const hueShift = rand(-10, 10);
        const color = `hsla(${200 + hueShift}, 80%, 30%, ${alpha})`;

        const grad = nebCtx.createRadialGradient(
          centerX + offsetX,
          centerY + offsetY,
          0,
          centerX + offsetX,
          centerY + offsetY,
          radius
        );
        grad.addColorStop(0, color);
        grad.addColorStop(
          0.4,
          `hsla(${200 + hueShift}, 80%, 30%, ${alpha * 0.6})`
        );
        grad.addColorStop(1, "rgba(0,0,0,0)");

        nebCtx.fillStyle = grad;
        nebCtx.fillRect(0, 0, w, h);
      }
    }

    function drawNebulaClusters() {
      nebulaCanvasesRef.current.forEach((nebCanvas) => {
        drawAbstractNebula(nebCanvas);
      });
    }

    function handleScroll() {
      const scrollTop = window.scrollY;
      const sectionHeight = window.innerHeight;
      const totalSections = 8;

      nebulaCanvasesRef.current.forEach((_, i) => {
        let opacity = 0;

        if (scrollTop >= sectionHeight && scrollTop < sectionHeight * 4) {
          // Sections 2–4 -> fade in
          opacity = (scrollTop - sectionHeight) / (sectionHeight * 3);
        } else if (
          scrollTop >= sectionHeight * 4 &&
          scrollTop < sectionHeight * 8
        ) {
          // Sections 5–8 -> fade out
          opacity = 1 - (scrollTop - sectionHeight * 4) / (sectionHeight * 4);
        } else {
          opacity = 0; // Section 1 or beyond 8
        }

        targetOpacitiesRef.current[i] = Math.min(Math.max(opacity, 0), 1);
      });
    }

    function handleMouseMove(e) {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function draw(now) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#02030a");
      grad.addColorStop(1, "#000000");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const starTex = starCanvasRef.current;
      const timeFactor = now * subtleDrift;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      nebulaCanvasesRef.current.forEach((nebCanvas, i) => {
        currentOpacitiesRef.current[i] = lerp(
          currentOpacitiesRef.current[i],
          targetOpacitiesRef.current[i],
          0.05
        );
        ctx.globalAlpha = currentOpacitiesRef.current[i];

        const parallaxX = mx * 20 * (i + 1) * 0.2;
        const parallaxY = my * 20 * (i + 1) * 0.2;

        ctx.drawImage(
          nebCanvas,
          -nebCanvas.width / 2 + w / 2 + parallaxX,
          -nebCanvas.height / 2 + h / 2 + parallaxY,
          nebCanvas.width,
          nebCanvas.height
        );
      });
      ctx.globalAlpha = 1;

      // Draw stars
      starsRef.current.forEach((s) => {
        const px = cx + (s.nx * w) / 2 + mx * parallaxStrength * s.z;
        const py = cy + (s.ny * h) / 2 + my * parallaxStrength * s.z;

        const driftX = Math.sin(timeFactor + s.phase) * 0.3 * (1 - s.z);
        const driftY = Math.cos(timeFactor + s.phase) * 0.3 * (1 - s.z);

        const finalX = px + driftX;
        const finalY = py + driftY;

        const pulse =
          0.6 + 0.4 * Math.sin(now * 0.002 * (s.pulse * 3) + s.phase);
        const radius = Math.max(0.3, s.size * pulse);
        const drawSize = radius * 6;

        ctx.drawImage(
          starTex,
          finalX - drawSize / 2,
          finalY - drawSize / 2,
          drawSize,
          drawSize
        );
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    drawNebulaClusters();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [starCount, maxStarSize, parallaxStrength, subtleDrift]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
