import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { BirthDetailsScreen, BirthDetails } from "./components/BirthDetailsScreen";
import { HomeScreen } from "./components/HomeScreen";
import { BirthChartScreen } from "./components/BirthChartScreen";
import { DailyInsightScreen } from "./components/DailyInsightScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { AnimatePresence, motion } from "motion/react";

type Screen = 
  | "welcome" 
  | "birthDetails" 
  | "home" 
  | "birthChart" 
  | "dailyInsight" 
  | "settings";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [insightCategory, setInsightCategory] = useState<string>("Daily");

  const handleBirthDetailsComplete = (details: BirthDetails) => {
    setBirthDetails(details);
    setCurrentScreen("home");
  };

  const handleViewInsight = (category: string) => {
    setInsightCategory(category);
    setCurrentScreen("dailyInsight");
  };

  const handleLogout = () => {
    setBirthDetails(null);
    setCurrentScreen("welcome");
  };

  // Page transition variants
  const pageVariants = {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="sync">
        {currentScreen === "welcome" && (
          <motion.div
            key="welcome"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <WelcomeScreen onContinue={() => setCurrentScreen("birthDetails")} />
          </motion.div>
        )}

        {currentScreen === "birthDetails" && (
          <motion.div
            key="birthDetails"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <BirthDetailsScreen onComplete={handleBirthDetailsComplete} />
          </motion.div>
        )}

        {currentScreen === "home" && (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <HomeScreen 
              onViewChart={() => setCurrentScreen("birthChart")}
              onViewInsight={handleViewInsight}
              onSettings={() => setCurrentScreen("settings")}
            />
          </motion.div>
        )}

        {currentScreen === "birthChart" && (
          <motion.div
            key="birthChart"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <BirthChartScreen 
              chartStyle={birthDetails?.chartStyle as "North Indian" | "South Indian" || "North Indian"}
              onBack={() => setCurrentScreen("home")}
            />
          </motion.div>
        )}

        {currentScreen === "dailyInsight" && (
          <motion.div
            key="dailyInsight"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <DailyInsightScreen 
              category={insightCategory}
              onBack={() => setCurrentScreen("home")}
            />
          </motion.div>
        )}

        {currentScreen === "settings" && (
          <motion.div
            key="settings"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <SettingsScreen 
              onBack={() => setCurrentScreen("home")}
              onLogout={handleLogout}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}