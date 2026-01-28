import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface BirthDetailsScreenProps {
  onComplete: (details: BirthDetails) => void;
}

export interface BirthDetails {
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  language: string;
  chartStyle: string;
}

const indianCities = ["Mumbai", "Delhi", "Agra"].sort();

export function BirthDetailsScreen({ onComplete }: BirthDetailsScreenProps) {
  const [details, setDetails] = useState<BirthDetails>({
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    language: "English",
    chartStyle: "North Indian"
  });

  const [cityInput, setCityInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);

  const handleCityInputChange = (value: string) => {
    setCityInput(value);
    setDetails({ ...details, placeOfBirth: value });
    
    if (value.trim()) {
      const filtered = indianCities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredCities([]);
      setShowSuggestions(false);
    }
  };

  const handleCitySelect = (city: string) => {
    setCityInput(city);
    setDetails({ ...details, placeOfBirth: city });
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(details);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #FAF8F3 100%)' }}>
      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col space-y-6 px-6 py-8">
        {/* Header with logo */}
        <motion.div 
          className="space-y-4 text-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h1 className="text-2xl tracking-tight" style={{ color: '#1A237E' }}>
              Your Birth Details
            </h1>
            <p className="text-sm leading-relaxed px-4" style={{ color: '#6B6360' }}>
              We use this to create your authentic Vedic birth chart. Your privacy is sacred—we never share or sell your data.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-5 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Date of Birth Card */}
          <div className="rounded-2xl p-5 space-y-3 shadow-sm" style={{ background: 'white', border: '1px solid rgba(26, 35, 126, 0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(26, 35, 126, 0.08)' }}>
                <Calendar className="w-5 h-5" style={{ color: '#1A237E' }} />
              </div>
              <Label htmlFor="dob" className="text-base font-medium" style={{ color: '#1A237E' }}>
                Date of Birth
              </Label>
            </div>
            <Input
              id="dob"
              type="date"
              required
              value={details.dateOfBirth}
              onChange={(e) => setDetails({ ...details, dateOfBirth: e.target.value })}
              className="rounded-xl border-0 bg-gray-50 h-12"
              style={{ colorScheme: 'light' }}
            />
          </div>

          {/* Time of Birth Card */}
          <div className="rounded-2xl p-5 space-y-3 shadow-sm" style={{ background: 'white', border: '1px solid rgba(26, 35, 126, 0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255, 193, 7, 0.12)' }}>
                <Clock className="w-5 h-5" style={{ color: '#FFC107' }} />
              </div>
              <Label htmlFor="tob" className="text-base font-medium" style={{ color: '#1A237E' }}>
                Time of Birth
              </Label>
            </div>
            <Input
              id="tob"
              type="time"
              required
              value={details.timeOfBirth}
              onChange={(e) => setDetails({ ...details, timeOfBirth: e.target.value })}
              className="rounded-xl border-0 bg-gray-50 h-12"
              style={{ colorScheme: 'light' }}
            />
          </div>

          {/* Place of Birth Card */}
          <div className="rounded-2xl p-5 space-y-3 shadow-sm relative" style={{ background: 'white', border: '1px solid rgba(26, 35, 126, 0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(55, 71, 79, 0.08)' }}>
                <MapPin className="w-5 h-5" style={{ color: '#37474F' }} />
              </div>
              <Label htmlFor="pob" className="text-base font-medium" style={{ color: '#1A237E' }}>
                Place of Birth
              </Label>
            </div>
            <Input
              id="pob"
              type="text"
              required
              placeholder="City"
              value={cityInput}
              onChange={(e) => handleCityInputChange(e.target.value)}
              onFocus={() => cityInput.trim() && setShowSuggestions(filteredCities.length > 0)}
              className="rounded-xl border-0 bg-gray-50 h-12"
              style={{ colorScheme: 'light' }}
            />
            {showSuggestions && filteredCities.length > 0 && (
              <div 
                className="absolute z-20 left-5 right-5 bg-white rounded-xl shadow-lg max-h-40 overflow-y-auto border"
                style={{ borderColor: 'rgba(26, 35, 126, 0.15)' }}
              >
                {filteredCities.map(city => (
                  <div
                    key={city}
                    className="px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors text-sm"
                    style={{ color: '#1A237E' }}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs" style={{ color: '#9E9E9E' }}>
              Geographic coordinates help calculate your chart accurately
            </p>
          </div>

          <Button 
            type="submit"
            className="w-full h-14 rounded-2xl shadow-lg font-medium text-base hover:scale-[1.02] transition-transform mt-6"
            style={{ 
              background: 'linear-gradient(135deg, #3D4E73 0%, #6B5B95 100%)',
              color: 'white'
            }}
          >
            Generate My Astrological Birth Chart
          </Button>
        </motion.form>

        {/* Privacy Footer */}
        <motion.div 
          className="flex items-center justify-center gap-2 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <p className="text-xs" style={{ color: '#9E9E9E' }}>
            End-to-end encrypted • Never shared with third parties
          </p>
        </motion.div>
      </div>
    </div>
  );
}