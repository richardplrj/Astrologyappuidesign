import { motion } from "motion/react";
import northChartImage from "figma:asset/72e67e5ee30a14b53acb363826508197344cbb1b.png";
import southChartImage from "figma:asset/4feb7acf98a635daab917030d85bbf4100440e5a.png";

interface KundliChartProps {
  style: "North Indian" | "South Indian";
}

export function KundliChart({ style }: KundliChartProps) {
  if (style === "North Indian") {
    return <NorthIndianChart />;
  }
  return <SouthIndianChart />;
}

function NorthIndianChart() {
  // North Indian style - diamond shaped chart with planetary positions
  return (
    <motion.div 
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={northChartImage} 
        alt="North Indian Kundli Chart" 
        className="w-full h-auto"
      />
    </motion.div>
  );
}

function SouthIndianChart() {
  // South Indian style - square grid chart with planetary positions
  return (
    <motion.div 
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={southChartImage} 
        alt="South Indian Kundli Chart" 
        className="w-full h-auto"
      />
    </motion.div>
  );
}
