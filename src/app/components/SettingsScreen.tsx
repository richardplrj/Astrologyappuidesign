import { useState } from "react";
import { ArrowLeft, Globe, Bell, Shield, LogOut, ChevronRight, MessageCircle } from "lucide-react";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SettingsScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

export function SettingsScreen({ onBack, onLogout }: SettingsScreenProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationTime, setNotificationTime] = useState("08:00");
  const [language, setLanguage] = useState("English");

  const handleWhatsAppFeedback = () => {
    // WhatsApp link with pre-filled message
    const phoneNumber = ""; // Add your WhatsApp number here (e.g., "919876543210" for +91 9876543210)
    const message = encodeURIComponent("Hi! I'd like to share my feedback about MyDay Astro app.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
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

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="px-6 pt-7 pb-5">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" style={{ color: 'var(--astro-indigo)' }} />
            <span className="text-sm" style={{ color: 'var(--astro-indigo)' }}>Back</span>
          </button>

          <h1 className="text-2xl" style={{ color: 'var(--astro-warm-text)' }}>
            Settings
          </h1>
        </div>

        {/* Settings List */}
        <div className="px-6 space-y-5 pb-7">
          {/* Language */}
          <div className="rounded-2xl p-4 border-2 hover:shadow-lg transition-all" 
               style={{ 
                 background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                 borderColor: 'rgba(201, 168, 106, 0.35)',
                 boxShadow: '0 3px 12px rgba(107, 91, 149, 0.12)'
               }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(61, 78, 115, 0.15)' }}>
                <Globe className="w-5 h-5" style={{ color: 'var(--astro-indigo)' }} />
              </div>
              <Label className="text-sm font-medium" style={{ color: 'var(--astro-warm-text)' }}>
                Language
              </Label>
            </div>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-10 rounded-xl bg-white border-0 shadow-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Hindi">हिन्दी (Hindi)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl p-4 border-2 hover:shadow-lg transition-all" 
               style={{ 
                 background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                 borderColor: 'rgba(201, 168, 106, 0.35)',
                 boxShadow: '0 3px 12px rgba(107, 91, 149, 0.12)'
               }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(212, 149, 108, 0.2)' }}>
                <Bell className="w-5 h-5" style={{ color: 'var(--astro-saffron)' }} />
              </div>
              <Label className="text-sm flex-1 font-medium" style={{ color: 'var(--astro-warm-text)' }}>
                Daily Insight Notifications
              </Label>
              <Switch 
                checked={notificationsEnabled} 
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
            
            {notificationsEnabled && (
              <div className="space-y-2 pt-2">
                <Label className="text-sm" style={{ color: 'var(--astro-warm-text)' }}>
                  Delivery Time (IST)
                </Label>
                <Select value={notificationTime} onValueChange={setNotificationTime}>
                  <SelectTrigger className="h-10 rounded-xl bg-white border-0 shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="04:00">4:00 AM</SelectItem>
                    <SelectItem value="05:00">5:00 AM</SelectItem>
                    <SelectItem value="06:00">6:00 AM</SelectItem>
                    <SelectItem value="07:00">7:00 AM</SelectItem>
                    <SelectItem value="08:00">8:00 AM</SelectItem>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs pt-2" style={{ color: 'var(--astro-subtle-text)' }}>
                  We send one calm daily insight. No spam.
                </p>
              </div>
            )}
          </div>

          {/* Privacy & Terms */}
          <button className="w-full rounded-2xl p-4 border-2 hover:shadow-lg transition-all text-left" 
                  style={{ 
                    background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
                    borderColor: 'rgba(201, 168, 106, 0.35)',
                    boxShadow: '0 3px 12px rgba(107, 91, 149, 0.12)'
                  }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(201, 168, 106, 0.2)' }}>
                  <Shield className="w-5 h-5" style={{ color: 'var(--astro-gold)' }} />
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--astro-warm-text)' }}>
                  Privacy & Terms
                </span>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: 'var(--astro-subtle-text)' }} />
            </div>
          </button>

          {/* Give Instant Feedback - WhatsApp */}
          <button 
            onClick={handleWhatsAppFeedback}
            className="w-full rounded-2xl p-4 border-2 hover:shadow-lg transition-all text-left" 
            style={{ 
              background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
              borderColor: 'rgba(201, 168, 106, 0.35)',
              boxShadow: '0 3px 12px rgba(107, 91, 149, 0.12)'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)' }}>
                  {/* WhatsApp Logo SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                  </svg>
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--astro-warm-text)' }}>
                  Give Instant Feedback
                </span>
              </div>
              <ChevronRight className="w-5 h-5" style={{ color: 'var(--astro-subtle-text)' }} />
            </div>
          </button>

          {/* Logout */}
          <button 
            onClick={onLogout}
            className="w-full rounded-2xl p-4 border-2 hover:shadow-lg transition-all text-left" 
            style={{ 
              background: 'linear-gradient(135deg, #FFFBF6 0%, #F7F2EA 100%)',
              borderColor: 'rgba(201, 168, 106, 0.35)',
              boxShadow: '0 3px 12px rgba(107, 91, 149, 0.12)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(212, 24, 61, 0.15)' }}>
                <LogOut className="w-5 h-5" style={{ color: '#d4183d' }} />
              </div>
              <span className="text-sm font-medium" style={{ color: '#d4183d' }}>
                Logout
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}