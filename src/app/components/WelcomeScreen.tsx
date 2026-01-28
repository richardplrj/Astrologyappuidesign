import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { MovingWhiteSparkles } from "./AnimatedBackground";
import logo from "figma:asset/949856970a546c4b083d254e08d25bb6580ae538.png";

interface WelcomeScreenProps {
  onContinue: () => void;
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1614965300148-5d032dfad3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycyUyMGNvc21vcyUyMG5pZ2h0JTIwc2t5fGVufDF8fHx8MTc2NzgwMjY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cosmos background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#FAF8F3]/90 to-[#F5EFE7]/95"></div>
      </div>

      {/* Animated Elements */}
      <MovingWhiteSparkles />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-md flex flex-col items-center space-y-7">
          {/* Logo & Branding */}
          <motion.div 
            className="flex flex-col items-center space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo with App Name Included */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={logo} 
                alt="MyDay Astro" 
                className="w-64 h-auto"
              />
            </motion.div>
            
            <div className="text-center space-y-2">
              <motion.p 
                className="text-sm max-w-xs leading-relaxed px-2"
                style={{ color: '#6B6360' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Daily guidance rooted in Vedic astrology, thoughtfully personalized using your birth chart (kundli) and planetary timings.
              </motion.p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="w-full space-y-2.5 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button 
              onClick={onContinue}
              className="w-full h-12 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform"
              style={{ 
                background: 'linear-gradient(135deg, #F5EFE7 0%, #E8DCC8 100%)',
                color: '#3D4E73',
                border: '1px solid rgba(201, 168, 106, 0.3)'
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.p 
            className="text-xs text-center pt-8 max-w-xs"
            style={{ color: '#6B6360' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            A safe space for self-discovery. Your data is private and secure.
          </motion.p>
        </div>
      </div>
    </div>
  );
}