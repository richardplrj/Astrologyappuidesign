import { ArrowLeft, Sparkles, Briefcase, Heart, TrendingUp, Activity, Volume2, TrendingUp as ArrowUpIcon, ThumbsUp, ThumbsDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { FloatingSparkles } from "./AnimatedBackground";

interface DailyInsightScreenProps {
  category: string;
  onBack: () => void;
}

const insightContent: Record<string, { icon: any; color: string; title: string; content: string; score: number }> = {
  Daily: {
    icon: Sparkles,
    color: "var(--astro-saffron)",
    title: "Daily Cosmic Guidance",
    score: 93,
    content: "Fortune smiles upon you, bringing positive shifts to your life. Rejoice in the harmonious energy that surrounds you, witnessing positivity in every aspect of your existence.\n\nThe cosmos aligns in your favor today, creating opportunities for growth and meaningful connections. Your natural charm and positive energy will attract beneficial circumstances.\n\nTrust in the divine timing of the universe. Everything is unfolding exactly as it should for your highest good."
  },
  Career: {
    icon: Briefcase,
    color: "#0891b2",
    title: "Career & Professional Life",
    score: 83,
    content: "For those in transportation-related businesses, especially imports and exports, profits are on the horizon. Your prudent investments will yield beneficial returns.\n\nThis is an auspicious time to take calculated risks in your professional endeavors. Your strategic thinking and careful planning will be rewarded with tangible results.\n\nStay focused on your long-term goals while remaining open to unexpected opportunities. Your dedication and hard work are about to bear fruit."
  },
  Health: {
    icon: Activity,
    color: "#FF9800",
    title: "Health & Wellbeing",
    score: 59,
    content: "Rest assured, health concerns that have plagued you will witness progress. With hope on the horizon, a renewed sense of well-being will inspire confidence.\n\nThis is a time of healing and restoration. Pay attention to your body's needs and prioritize self-care practices that nurture your physical and mental health.\n\nGentle exercise, proper rest, and mindful eating will support your journey back to optimal wellness. Have faith in your body's natural healing abilities."
  },
  Relationships: {
    icon: Heart,
    color: "#d4183d",
    title: "Relationships & Connections",
    score: 92,
    content: "Your compassionate and helpful disposition will earn you favor in society and with your partner. Cooperation will flow effortlessly, and your partner will readily extend assistance when needed.\n\nThis is a beautiful period for deepening emotional bonds and creating lasting memories with loved ones. Your empathy and understanding create harmony in all relationships.\n\nOpen your heart to both giving and receiving love. The warmth you share with others will return to you manifold."
  },
  Finances: {
    icon: ArrowUpIcon,
    color: "#4CAF50",
    title: "Finances & Abundance",
    score: 74,
    content: "Your persistent efforts to accumulate funds are about to pay off, putting an end to your struggles and debts.\n\nFinancial stability is within reach as your hard work and disciplined approach to money management begin to yield results. This is a time to celebrate your progress while continuing wise financial practices.\n\nConsider this an opportunity to build a stronger foundation for future prosperity. Your patience and perseverance are being rewarded."
  }
};

export function DailyInsightScreen({ category, onBack }: DailyInsightScreenProps) {
  const insight = insightContent[category] || insightContent.Daily;
  const Icon = insight.icon;
  const [isReading, setIsReading] = useState(false);
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  const handleReadAloud = () => {
    if ('speechSynthesis' in window) {
      if (isReading) {
        window.speechSynthesis.cancel();
        setIsReading(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(insight.content);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        utterance.onend = () => setIsReading(false);
        utterance.onerror = () => setIsReading(false);
        
        window.speechSynthesis.speak(utterance);
        setIsReading(true);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1767542484661-570b591d24a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHplbnxlbnwxfHx8fDE3Njc3MTc2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Peaceful background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--astro-ivory)' }}></div>
      </div>

      {/* Animated Sparkles */}
      <FloatingSparkles />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="px-6 pt-7 pb-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 mb-5 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" style={{ color: 'var(--astro-indigo)' }} />
            <span className="text-sm" style={{ color: 'var(--astro-indigo)' }}>Back</span>
          </button>

          <div className="flex flex-col items-center text-center mb-5">
            <div className="p-3.5 rounded-2xl mb-3.5" style={{ backgroundColor: `${insight.color}20` }}>
              <Icon className="w-11 h-11" style={{ color: insight.color }} />
            </div>
            
            {/* Score Chip - Green with Arrow */}
            <div 
              className="px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 text-sm font-semibold mb-3"
              style={{ 
                background: 'rgba(74, 222, 128, 0.15)',
                color: '#15803d',
                boxShadow: '0 2px 8px rgba(74, 222, 128, 0.2)'
              }}
            >
              <ArrowUpIcon className="w-4 h-4" />
              <span>Today's Score: {insight.score}%</span>
            </div>
            
            <p className="text-xs mb-2" style={{ color: 'var(--astro-subtle-text)' }}>
              Wednesday, January 7, 2026
            </p>
            <h1 className="text-2xl" style={{ color: 'var(--astro-warm-text)' }}>
              {insight.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-7 flex-1 flex flex-col">
          <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 flex flex-col" 
               style={{ 
                 background: 'linear-gradient(135deg, var(--astro-deep-purple) 0%, var(--astro-cosmic-purple) 100%)',
                 borderColor: 'rgba(255, 255, 255, 0.5)',
                 maxHeight: '70vh'
               }}>
            {/* Shimmer/Glitter Effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  animation: 'shimmer 3s infinite',
                }}
              />
            </div>

            {/* Read Aloud Button */}
            <button
              onClick={handleReadAloud}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <Volume2 className={`w-4 h-4 text-white ${isReading ? 'animate-pulse' : ''}`} />
              <span className="text-xs text-white">
                {isReading ? 'Stop' : 'Listen'}
              </span>
            </button>
            
            <div className="relative z-10 p-6 pt-16 overflow-y-auto space-y-4 leading-relaxed text-white">
              {insight.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feedback Section */}
            <div className="relative z-10 px-6 pb-5 pt-4 border-t border-white/20">
              <div className="flex items-center justify-center gap-4">
                <span className="text-xs text-white/80 font-medium uppercase tracking-wide">
                  Was this useful?
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFeedback('helpful')}
                    className={`p-2 rounded-lg transition-all ${
                      feedback === 'helpful' 
                        ? 'bg-white/30 scale-110' 
                        : 'bg-white/15 hover:bg-white/25'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${feedback === 'helpful' ? 'text-white fill-white' : 'text-white/90'}`} />
                  </button>
                  <button
                    onClick={() => setFeedback('not-helpful')}
                    className={`p-2 rounded-lg transition-all ${
                      feedback === 'not-helpful' 
                        ? 'bg-white/30 scale-110' 
                        : 'bg-white/15 hover:bg-white/25'
                    }`}
                  >
                    <ThumbsDown className={`w-4 h-4 ${feedback === 'not-helpful' ? 'text-white fill-white' : 'text-white/90'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Safe space reminder */}
          <div className="mt-6 text-center">
            <p className="text-xs" style={{ color: 'var(--astro-subtle-text)' }}>
              Reflect on this guidance in your own time. This is your safe space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}