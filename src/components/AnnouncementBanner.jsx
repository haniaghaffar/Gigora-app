import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("gigora-banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("gigora-banner-dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white shadow-lg">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Left */}
        <div className="flex flex-1 items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-indigo-300" />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide">
              Introducing Gigora Beta
            </p>

            <p className="text-xs text-slate-300 md:text-sm">
              Experience AI-powered tools designed for freelancers. Sign up today
              and enjoy complimentary <span className="font-medium text-white">Pro access</span> during
              our beta period.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Link
            to="/signup"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:scale-105 hover:bg-slate-100 active:scale-95"
          >
            Get Started
          </Link>

          <button
            onClick={handleClose}
            aria-label="Close banner"
            className="rounded-lg p-2 text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}