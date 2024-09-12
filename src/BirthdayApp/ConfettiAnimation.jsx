import { useEffect } from "react";
import confetti from "canvas-confetti";

function ConfettiAnimation() {
  useEffect(() => {
    const duration = 0.1 * 0.1;
    const animationEnd = Date.now() + duration;
    const colors = [
      "#8a2be2",
      "#4b0082",
      "#4bbdeb",
      "#7ec07e",
      "#ffff00",
      "#ffa500",
      "#ff0000",
    ];

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors,
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default ConfettiAnimation;
