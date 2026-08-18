/* ── StreamGuard AI - Logo Component ─────────────────── */
"use client";

import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  clickable?: boolean;
  className?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  clickable = true,
  className = "",
}: LogoProps) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-base", subText: "text-[9px]", gap: "gap-2" },
    md: { icon: "w-9 h-9", text: "text-lg", subText: "text-[10px]", gap: "gap-2.5" },
    lg: { icon: "w-12 h-12", text: "text-2xl", subText: "text-xs", gap: "gap-3.5" },
    xl: { icon: "w-16 h-16", text: "text-3xl", subText: "text-xs", gap: "gap-4" },
  };

  const currentSize = sizeMap[size];

  const logoContent = (
    <div className={`flex items-center ${currentSize.gap} group ${className}`}>
      {/* Icon Badge */}
      <div
        className={`relative ${currentSize.icon} rounded-xl bg-gradient-to-br from-[hsl(168,85%,52%)] via-[hsl(200,90%,45%)] to-[hsl(280,80%,60%)] p-[1px] shadow-[0_0_20px_hsl(168,85%,52%,0.25)] group-hover:shadow-[0_0_30px_hsl(168,85%,52%,0.45)] transition-all duration-300 flex items-center justify-center shrink-0`}
      >
        {/* Inner Dark Surface */}
        <div className="w-full h-full bg-[hsl(220,20%,7%)] rounded-[11px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(168,85%,52%,0.15)] to-[hsl(280,80%,60%,0.15)] opacity-80 group-hover:opacity-100 transition-opacity" />
          
          {/* Cyber Shield Vector SVG */}
          <svg
            className="w-[60%] h-[60%] relative z-10 text-[hsl(168,85%,52%)] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_hsl(168,85%,52%,0.6)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Shield Outer */}
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            {/* AI Signal Core */}
            <path
              d="M12 8v8M9 12h6"
              className="stroke-[hsl(280,80%,70%)]"
              strokeWidth="2.5"
            />
            {/* Glowing Center Node */}
            <circle cx="12" cy="12" r="1.5" fill="hsl(168,85%,52%)" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`${currentSize.text} font-extrabold tracking-tight bg-gradient-to-r from-white via-[hsl(0,0%,95%)] to-[hsl(168,85%,75%)] bg-clip-text text-transparent group-hover:from-[hsl(168,85%,65%)] group-hover:to-[hsl(280,80%,70%)] transition-all duration-300`}>
              StreamGuard
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[hsl(168,85%,52%,0.15)] text-[hsl(168,85%,52%)] border border-[hsl(168,85%,52%,0.3)]">
              AI
            </span>
          </div>
          <span className={`${currentSize.subText} font-medium text-[hsl(220,10%,55%)] uppercase tracking-widest mt-1`}>
            Super Chat Co-Pilot
          </span>
        </div>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" className="inline-block transition-transform hover:scale-[1.01] active:scale-[0.99]">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
