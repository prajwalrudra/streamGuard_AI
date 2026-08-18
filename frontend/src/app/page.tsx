/* ── StreamGuard AI - Front UI Landing Page ────────────── */
"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(220,20%,6%)] text-[hsl(0,0%,95%)] relative overflow-hidden font-sans">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[hsl(168,85%,52%,0.12)] via-[hsl(280,80%,60%,0.08)] to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[hsl(168,85%,52%,0.06)] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[hsl(280,80%,60%,0.06)] blur-[150px] pointer-events-none rounded-full" />

      {/* ── Top Navigation Bar ──────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[hsl(220,12%,18%)] bg-[hsl(220,20%,6%,0.8)] backdrop-blur-xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* StreamGuard Logo */}
          <Logo size="lg" clickable={false} />

          {/* Nav Items & Status */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Live Engine Status Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(220,16%,12%)] border border-[hsl(220,12%,22%)] text-xs font-medium text-[hsl(220,10%,70%)]">
              <span className="w-2 h-2 rounded-full bg-[hsl(152,70%,50%)] animate-pulse shadow-[0_0_8px_hsl(152,70%,50%)]" />
              <span>AI Engine Active</span>
            </div>

            {/* OBS Overlay Quick-Link */}
            <Link
              href="/overlay"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[hsl(220,10%,75%)] hover:text-white hover:bg-[hsl(220,16%,14%)] border border-transparent hover:border-[hsl(220,12%,22%)] transition-all"
            >
              <span>📺</span> OBS Overlay
            </Link>

            {/* Dashboard Button */}
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[hsl(168,85%,45%)] via-[hsl(185,85%,45%)] to-[hsl(280,80%,55%)] hover:from-[hsl(168,85%,50%)] hover:to-[hsl(280,80%,60%)] shadow-[0_0_20px_hsl(168,85%,52%,0.3)] hover:shadow-[0_0_30px_hsl(168,85%,52%,0.5)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Dashboard</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero Section ────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 pt-12 pb-20 flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Animated Main Logo Badge */}
        <div className="relative mb-8 group cursor-pointer">
          {/* Outer Pulse Rings */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[hsl(168,85%,52%)] to-[hsl(280,80%,60%)] opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500" />
          
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-[hsl(220,18%,14%)] to-[hsl(220,20%,8%)] border border-[hsl(168,85%,52%,0.4)] p-1 shadow-[0_0_40px_hsl(168,85%,52%,0.2)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <div className="w-full h-full rounded-[22px] bg-[hsl(220,20%,7%)] flex flex-col items-center justify-center gap-2 relative overflow-hidden">
              <svg
                className="w-14 h-14 md:w-20 md:h-20 text-[hsl(168,85%,52%)] drop-shadow-[0_0_15px_hsl(168,85%,52%,0.8)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8M9 12h6" stroke="hsl(280,80%,70%)" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="1.8" fill="hsl(168,85%,52%)" />
              </svg>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(168,85%,52%)] to-[hsl(280,80%,60%)]" />
            </div>
          </div>
        </div>

        {/* Hero Tagline pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(168,85%,52%,0.1)] border border-[hsl(168,85%,52%,0.25)] text-xs md:text-sm font-semibold text-[hsl(168,85%,60%)] mb-6 shadow-sm">
          <span>⚡ Real-Time Live Streaming Assistant</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6">
          Elevate Your Live Stream with{" "}
          <span className="bg-gradient-to-r from-[hsl(168,85%,52%)] via-[hsl(190,90%,60%)] to-[hsl(280,80%,65%)] bg-clip-text text-transparent">
            StreamGuard AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[hsl(220,10%,70%)] max-w-2xl font-normal leading-relaxed mb-10">
          The ultimate intelligent co-pilot for YouTube & Twitch streamers. Automatically filter spam, prioritize high-value super chats, and respond effortlessly using hands-free voice AI.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[hsl(168,85%,45%)] via-[hsl(185,85%,45%)] to-[hsl(280,80%,55%)] hover:from-[hsl(168,85%,50%)] hover:to-[hsl(280,80%,60%)] shadow-[0_0_30px_hsl(168,85%,52%,0.4)] hover:shadow-[0_0_45px_hsl(168,85%,52%,0.6)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>🚀 Launch Dashboard</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href="/overlay"
            target="_blank"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold text-base text-[hsl(220,10%,80%)] hover:text-white bg-[hsl(220,18%,12%)] hover:bg-[hsl(220,16%,16%)] border border-[hsl(220,12%,22%)] hover:border-[hsl(168,85%,52%,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>📺 OBS Overlay</span>
          </Link>
        </div>

        {/* ── Dashboard Direct Access Banner ──────────────── */}
        <div className="w-full max-w-4xl p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[hsl(220,18%,12%)] to-[hsl(220,20%,8%)] border border-[hsl(220,12%,20%)] shadow-2xl relative overflow-hidden text-left mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(168,85%,52%,0.08)] blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[hsl(168,85%,52%)] uppercase tracking-wider mb-2">
                <span>🛡️ Quick Dashboard Access</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Ready to manage your Super Chats live?
              </h2>
              <p className="text-sm text-[hsl(220,10%,65%)]">
                Access your real-time chat queue, voice recognition controls, and stream activity stats.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm bg-[hsl(168,85%,52%)] text-[hsl(220,20%,6%)] hover:bg-[hsl(168,85%,60%)] shadow-[0_0_20px_hsl(168,85%,52%,0.3)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Go to Main Dashboard</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* ── Feature Cards Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl text-left">
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-[hsl(220,18%,10%)] border border-[hsl(220,12%,18%)] hover:border-[hsl(168,85%,52%,0.3)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[hsl(168,85%,52%,0.15)] text-[hsl(168,85%,52%)] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Smart Super Chat Ranking
            </h3>
            <p className="text-sm text-[hsl(220,10%,60%)] leading-relaxed">
              AI prioritizes high-value donations, tier colors, and audience urgency so you never miss a top contributor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-[hsl(220,18%,10%)] border border-[hsl(220,12%,18%)] hover:border-[hsl(280,80%,60%,0.3)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[hsl(280,80%,60%,0.15)] text-[hsl(280,80%,65%)] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🎤
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Voice AI Co-Pilot
            </h3>
            <p className="text-sm text-[hsl(220,10%,60%)] leading-relaxed">
              Use hands-free voice commands while gaming to accept, skip, or auto-read super chats without touching your mouse.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-[hsl(220,18%,10%)] border border-[hsl(220,12%,18%)] hover:border-[hsl(195,100%,65%,0.3)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[hsl(195,100%,65%,0.15)] text-[hsl(195,100%,65%)] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              📺
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              OBS Stream Overlay
            </h3>
            <p className="text-sm text-[hsl(220,10%,60%)] leading-relaxed">
              Seamlessly broadcast live super chat animations directly into OBS Studio or Streamlabs with built-in transparent widgets.
            </p>
          </div>
        </div>

      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-[hsl(220,12%,16%)] bg-[hsl(220,20%,5%)] py-8 px-6 text-center text-xs text-[hsl(220,10%,45%)] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" showText={false} clickable={false} />
            <span className="font-semibold text-[hsl(220,10%,70%)]">StreamGuard AI</span>
            <span>— Super Chat Co-Pilot System</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="hover:text-[hsl(168,85%,52%)] transition-colors">
              Open Dashboard
            </Link>
            <Link href="/overlay" target="_blank" className="hover:text-[hsl(168,85%,52%)] transition-colors">
              OBS Overlay
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
