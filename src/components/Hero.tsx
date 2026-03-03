"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 bg-brand-dark overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-slate to-brand-dark opacity-80"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
                <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-white">
                    Build the Driver Network{" "}
                    <span className="block text-brand-yellow mt-2">for Direct Freight</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Eliminate freight middlemen. Return margin back to drivers and shippers. <br /><span className="text-lg opacity-80">Stop brokers from capturing 15-30% just for passing information.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="w-full sm:w-auto font-bold" onClick={() => document.getElementById('invest')?.scrollIntoView({ behavior: 'smooth' })}>
                        Express Interest
                    </Button>
                    <Link href="/schedule" className="w-full sm:w-auto">
                        <Button size="lg" variant="secondary" className="w-full font-bold text-white border-slate-600 hover:bg-white/5">
                            Schedule a Call
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Video Placeholder */}
            <div className="mt-16 relative z-10 w-full max-w-5xl mx-auto aspect-video bg-brand-slate rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex items-center justify-center group text-slate-400">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="flex flex-col items-center space-y-3">
                    <svg className="w-16 h-16 text-slate-500 group-hover:text-brand-yellow transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">Founder Video (Placeholder)</span>
                </div>
                {/* TODO: Replace with actual `iframe` or `<video>` player once brand assets are ready */}
            </div>
        </section>
    );
}
