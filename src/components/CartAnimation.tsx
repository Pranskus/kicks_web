import React, { useEffect, useState } from "react";

interface CartAnimationProps {
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  onComplete: () => void;
}

const CartAnimation: React.FC<CartAnimationProps> = ({
  startPosition,
  endPosition,
  onComplete,
}) => {
  const [position, setPosition] = useState(startPosition);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start animation
    const animationDuration = 500; // 500ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Bezier curve for a more natural motion
      const easing = (t: number) => t * (2 - t);
      const easedProgress = easing(progress);

      // Calculate current position
      const currentX =
        startPosition.x + (endPosition.x - startPosition.x) * easedProgress;
      const currentY =
        startPosition.y + (endPosition.y - startPosition.y) * easedProgress;

      // Add a slight arc to the path
      const arcHeight = 100;
      const arcY = Math.sin(progress * Math.PI) * arcHeight;

      setPosition({
        x: currentX,
        y: currentY - arcY,
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsVisible(false);
        onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [startPosition, endPosition, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg" />
    </div>
  );
};

export default CartAnimation;
