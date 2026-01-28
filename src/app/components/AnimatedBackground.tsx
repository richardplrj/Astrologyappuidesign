import { motion } from "motion/react";

export function FloatingPlanets() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Purple Planet */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 30%, var(--astro-purple-light), var(--astro-purple))',
          filter: 'blur(2px)',
          top: '10%',
          left: '-5%',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Medium Gold Planet */}
      <motion.div
        className="absolute w-24 h-24 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle at 40% 40%, var(--astro-gold), var(--astro-saffron))',
          filter: 'blur(1px)',
          top: '60%',
          right: '-3%',
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small Teal Planet */}
      <motion.div
        className="absolute w-16 h-16 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 35% 35%, var(--astro-teal), var(--astro-indigo))',
          filter: 'blur(1px)',
          top: '35%',
          right: '15%',
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Tiny Indigo Planet */}
      <motion.div
        className="absolute w-12 h-12 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--astro-indigo), var(--astro-cosmic-purple))',
          filter: 'blur(0.5px)',
          top: '75%',
          left: '20%',
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function FloatingStars() {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            backgroundColor: 'rgba(107, 91, 149, 0.6)',
            boxShadow: '0 0 4px rgba(107, 91, 149, 0.8)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function MovingWhiteSparkles() {
  const sparkles = Array.from({ length: 12 }, (_, i) => {
    // Randomly choose which edge to start from
    const edge = Math.floor(Math.random() * 4); // 0: left, 1: right, 2: top, 3: bottom
    let startX, startY, endX, endY;
    
    switch(edge) {
      case 0: // Start from left edge
        startX = -5;
        startY = Math.random() * 100;
        endX = Math.random() * 70 + 30; // Move to right side
        endY = startY + (Math.random() * 40 - 20); // Slight vertical variation
        break;
      case 1: // Start from right edge
        startX = 105;
        startY = Math.random() * 100;
        endX = Math.random() * 30 + 30; // Move to left side
        endY = startY + (Math.random() * 40 - 20); // Slight vertical variation
        break;
      case 2: // Start from top edge
        startX = Math.random() * 100;
        startY = -5;
        endX = startX + (Math.random() * 40 - 20); // Slight horizontal variation
        endY = Math.random() * 70 + 30; // Move to bottom side
        break;
      case 3: // Start from bottom edge
        startX = Math.random() * 100;
        startY = 105;
        endX = startX + (Math.random() * 40 - 20); // Slight horizontal variation
        endY = Math.random() * 30 + 30; // Move to top side
        break;
      default:
        startX = 0;
        startY = 0;
        endX = 50;
        endY = 50;
    }
    
    return {
      id: i,
      startX,
      startY,
      endX,
      endY,
      delay: Math.random() * 8,
      duration: Math.random() * 5 + 8, // 8-13 seconds (slower)
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.startX}%`,
            top: `${sparkle.startY}%`,
          }}
          animate={{
            x: [`0%`, `${sparkle.endX - sparkle.startX}vw`],
            y: [`0%`, `${sparkle.endY - sparkle.startY}vh`],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "linear"
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 0L5.5 4.5L5 10L4.5 4.5L5 0Z"
              fill="rgba(255, 255, 255, 0.8)"
            />
            <path
              d="M0 5L4.5 5.5L10 5L4.5 4.5L0 5Z"
              fill="rgba(255, 255, 255, 0.8)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingSparkles() {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            top: sparkle.top,
            left: sparkle.left,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 0L9 7L8 16L7 7L8 0Z"
              fill="var(--astro-purple-light)"
              opacity="0.6"
            />
            <path
              d="M0 8L7 9L16 8L7 7L0 8Z"
              fill="var(--astro-purple-light)"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}