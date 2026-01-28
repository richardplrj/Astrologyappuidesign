import { ChevronRight, Sparkles, Briefcase, Heart, TrendingUp, Activity, Settings, TrendingUp as ArrowUpIcon, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { FloatingSparkles } from "./AnimatedBackground";
import { useState } from "react";

interface HomeScreenProps {
  userName?: string;
  onViewChart: () => void;
  onViewInsight: (category: string) => void;
  onSettings: () => void;
}

export function HomeScreen({ userName = "there", onViewChart, onViewInsight, onSettings }: HomeScreenProps) {
  const categories = [
    { name: "Career", icon: Briefcase, color: "#0891b2", score: 83 },
    { name: "Health", icon: Activity, color: "#FF9800", score: 59 },
    { name: "Relationships", icon: Heart, color: "#d4183d", score: 92 },
    { name: "Finances", icon: ArrowUpIcon, color: "#4CAF50", score: 74 }
  ];

  const [insightFeedback, setInsightFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background with subtle image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1767542484661-570b591d24a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHplbnxlbnwxfHx8fDE3Njc3MTc2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Peaceful background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--astro-ivory)' }}></div>
      </div>

      {/* Animated Elements */}
      <FloatingSparkles />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="px-6 pt-7 pb-5 flex justify-between items-start">
          <div className="space-y-0.5">
            <h2 className="text-xl" style={{ color: 'var(--astro-warm-text)' }}>
              Hi, Good Morning ✨
            </h2>
            <p className="text-sm" style={{ color: 'var(--astro-subtle-text)' }}>
              Wednesday, January 7, 2026
            </p>
          </div>
          <button 
            onClick={onSettings}
            className="p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <Settings className="w-6 h-6" style={{ color: 'var(--astro-indigo)' }} />
          </button>
        </div>

        <div className="px-6 space-y-5 pb-6 flex-1">
          {/* Today's Insight Card - Purple Background with Shimmer Effect */}
          <div 
            className="relative overflow-hidden rounded-2xl border-2 shadow-lg p-7 hover:shadow-xl transition-all cursor-pointer mt-3"
            style={{ 
              background: 'linear-gradient(135deg, var(--astro-deep-purple) 0%, var(--astro-cosmic-purple) 100%)',
              borderColor: 'rgba(255, 255, 255, 0.5)'
            }}
            onClick={() => onViewInsight("Daily")}
          >
            {/* Shimmer/Glitter Effect */}
            <div className="absolute inset-0 opacity-30">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  animation: 'shimmer 3s infinite',
                }}
              />
            </div>
            
            <div className="flex items-start gap-3.5 relative z-10">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg text-white font-medium">
                    Today's Insight
                  </h3>
                  <div 
                    className="px-2 py-0.5 rounded-md flex items-center gap-1 text-[10px] font-semibold"
                    style={{ 
                      background: 'rgba(234, 196, 120, 0.25)',
                      color: '#EAC478',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 2px 8px rgba(234, 196, 120, 0.25)',
                      border: '1px solid rgba(234, 196, 120, 0.35)'
                    }}
                  >
                    <ArrowUpIcon className="w-3 h-3" />
                    <span>93%</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/90">
                  Fortune smiles upon you, bringing positive shifts to your life. Rejoice in the harmonious energy that surrounds you...
                </p>
              </div>
              <ChevronRight className="w-5 h-5 flex-shrink-0 mt-1 text-white/80" />
            </div>

            {/* Lucky Charms Section - Bottom of Card */}
            <div className="mt-5 pt-4 border-t border-white/20 relative z-10">
              <div className="flex items-center gap-2.5">
                {/* Lucky Numbers Pill */}
                <div 
                  className="flex-1 rounded-xl px-3 py-2 backdrop-blur-sm border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(234, 196, 120, 0.5)',
                    boxShadow: '0 0 12px rgba(234, 196, 120, 0.2)'
                  }}
                >
                  <p className="text-[10px] uppercase tracking-wide mb-0.5 font-medium" style={{ color: '#EAC478' }}>
                    Lucky Numbers
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-white">15</span>
                    <span className="text-sm text-white/70">&</span>
                    <span className="text-base font-bold text-white">5</span>
                  </div>
                </div>

                {/* Lucky Color Pill */}
                <div 
                  className="flex-1 rounded-xl px-3 py-2 backdrop-blur-sm border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(234, 196, 120, 0.5)',
                    boxShadow: '0 0 12px rgba(234, 196, 120, 0.2)'
                  }}
                >
                  <p className="text-[10px] uppercase tracking-wide mb-0.5 font-medium" style={{ color: '#EAC478' }}>
                    Lucky Color
                  </p>
                  <span className="text-base font-bold text-white capitalize">Green</span>
                </div>
              </div>
            </div>
          </div>

          {/* Birth Chart CTA - Premium Shadow */}
          <div className="relative overflow-hidden rounded-2xl hover:shadow-xl transition-all shadow-md border-2" 
               style={{ 
                 background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                 borderColor: 'rgba(201, 168, 106, 0.3)'
               }}>
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" stroke="var(--astro-purple)" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" stroke="var(--astro-purple)" strokeWidth="1" opacity="0.5" />
                <path d="M50 20 L50 30" stroke="var(--astro-purple)" strokeWidth="1.5" />
                <path d="M50 70 L50 80" stroke="var(--astro-purple)" strokeWidth="1.5" />
                <path d="M80 50 L70 50" stroke="var(--astro-purple)" strokeWidth="1.5" />
                <path d="M30 50 L20 50" stroke="var(--astro-purple)" strokeWidth="1.5" />
              </svg>
            </div>
            
            <Button 
              onClick={onViewChart}
              className="relative z-10 w-full h-12 rounded-xl text-sm justify-between px-5 bg-transparent hover:bg-white/40 transition-all border-0"
            >
              <span className="flex items-center gap-2 font-semibold" style={{ color: 'var(--astro-indigo)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="2" fill="var(--astro-gold)" />
                  <circle cx="12" cy="12" r="4" stroke="var(--astro-gold)" strokeWidth="1" fill="none" />
                  <circle cx="12" cy="12" r="7" stroke="var(--astro-purple)" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
                View My Birth Chart
              </span>
              <ChevronRight className="w-5 h-5" style={{ color: 'var(--astro-indigo)' }} />
            </Button>
          </div>

          {/* Category Cards */}
          <div className="space-y-2.5 pt-1">
            <h3 className="text-xs px-1" style={{ color: 'var(--astro-subtle-text)' }}>
              Explore Insights
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => onViewInsight(category.name)}
                    className="rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center min-h-[130px] border-2 relative overflow-hidden"
                    style={{ 
                      background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                      borderColor: 'rgba(201, 168, 106, 0.35)',
                      boxShadow: '0 3px 12px rgba(107, 91, 149, 0.12)'
                    }}
                  >
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-2.5"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--astro-warm-text)' }}>
                      {category.name}
                    </h4>
                    
                    {/* Score - Simple Text Below Category Name */}
                    <div className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: '#15803d' }}>
                      <ArrowUpIcon className="w-3 h-3" />
                      <span>Today's Score: {category.score}%</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Safe Space Message with Purple */}
          <div className="pt-3 text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" 
                 style={{ backgroundColor: 'rgba(139, 123, 168, 0.1)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--astro-purple)' }}></div>
              <p className="text-[10px]" style={{ color: 'var(--astro-subtle-text)' }}>
                Your daily insight arrives every morning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}