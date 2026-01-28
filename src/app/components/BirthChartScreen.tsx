import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { KundliChart } from "./KundliChart";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BirthChartScreenProps {
  chartStyle: "North Indian" | "South Indian";
  onBack: () => void;
}

export function BirthChartScreen({ chartStyle: initialStyle, onBack }: BirthChartScreenProps) {
  const [chartStyle, setChartStyle] = useState<"North Indian" | "South Indian">(initialStyle);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1766524791322-8753e582e652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBtZWRpdGF0aW9uJTIwY2FsbXxlbnwxfHx8fDE3Njc4MDI2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Spiritual background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--astro-ivory)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="px-6 pt-7 pb-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" style={{ color: 'var(--astro-indigo)' }} />
            <span className="text-sm" style={{ color: 'var(--astro-indigo)' }}>Back</span>
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                 style={{ background: 'linear-gradient(135deg, rgba(201, 168, 106, 0.2) 0%, rgba(61, 78, 115, 0.2) 100%)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="var(--astro-gold)" />
                <circle cx="12" cy="12" r="4" stroke="var(--astro-gold)" strokeWidth="1" fill="none" />
                <circle cx="12" cy="12" r="7" stroke="var(--astro-gold)" strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl" style={{ color: 'var(--astro-warm-text)' }}>
                Birth Chart
              </h1>
              <p className="text-sm" style={{ color: 'var(--astro-subtle-text)' }}>
                Your personalized Kundli
              </p>
            </div>
          </div>
        </div>

        {/* Chart Style Toggle */}
        <div className="px-6 pb-5">
          <div className="inline-flex rounded-xl p-1 shadow-md border-2" 
               style={{ 
                 background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                 borderColor: 'rgba(201, 168, 106, 0.3)' 
               }}>
            <button
              onClick={() => setChartStyle("North Indian")}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                chartStyle === "North Indian" ? "shadow-sm" : ""
              }`}
              style={{
                backgroundColor: chartStyle === "North Indian" ? "white" : "transparent",
                color: chartStyle === "North Indian" ? "var(--astro-indigo)" : "var(--astro-warm-text)"
              }}
            >
              North Indian Style
            </button>
            <button
              onClick={() => setChartStyle("South Indian")}
              className={`px-6 py-2 rounded-lg text-sm transition-all ${
                chartStyle === "South Indian" ? "shadow-sm" : ""
              }`}
              style={{
                backgroundColor: chartStyle === "South Indian" ? "white" : "transparent",
                color: chartStyle === "South Indian" ? "var(--astro-indigo)" : "var(--astro-warm-text)"
              }}
            >
              South Indian Style
            </button>
          </div>
        </div>

        {/* Chart Display */}
        <div className="px-6 pb-8 flex-1 flex flex-col items-center">
          <div className="w-full max-w-md rounded-2xl p-6 shadow-md border-2" 
               style={{ 
                 background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                 borderColor: 'rgba(201, 168, 106, 0.3)' 
               }}>
            <div className="bg-white rounded-xl p-4">
              <KundliChart style={chartStyle} />
            </div>
          </div>

          {/* Legend */}
          <div className="w-full max-w-md mt-6 space-y-2">
            <p className="text-xs px-2" style={{ color: 'var(--astro-subtle-text)' }}>
              Planetary Symbols
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>As</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Ascendant</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Su</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Sun</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Mo</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Moon</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Ma</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Mars</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Me</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Mercury</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Ju</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Jupiter</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Ve</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Venus</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Sa</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Saturn</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Ra</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Rahu</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span style={{ color: 'var(--astro-indigo)' }}>Ke</span>
                <span style={{ color: 'var(--astro-subtle-text)' }}>- Ketu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}