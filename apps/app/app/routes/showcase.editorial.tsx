import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FluidEditorial() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // reveal lines animation
            const lines = gsap.utils.toArray(".editorial-line");
            lines.forEach((line: any) => {
                gsap.fromTo(line,
                    { opacity: 0, y: 50, skewY: 5 },
                    {
                        opacity: 1,
                        y: 0,
                        skewY: 0,
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 90%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // SVG blob animation
            gsap.to(".blob-svg", {
                rotate: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black overflow-x-hidden pb-40">

            {/* Editorial Header */}
            <header className="p-8 md:p-24 border-b border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <h1 className="font-display text-[12vw] leading-[0.85] font-black tracking-tighter">
                        FLUID<br />CABYZ.
                    </h1>
                    <div className="max-w-sm space-y-6 text-zinc-500 font-light lowercase leading-relaxed">
                        <p>Establishing the new aesthetic standard for service-business transformation.</p>
                        <div className="flex gap-4">
                            <span className="w-8 h-[1px] bg-zinc-800 self-center" />
                            <span className="text-[10px] uppercase tracking-widest font-bold">Volume 7.8</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Body */}
            <article className="px-8 md:px-24 py-32 space-y-32">

                {/* Paragraph 1 - The Monolith */}
                <section className="max-w-5xl">
                    <div className="editorial-line overflow-hidden mb-4">
                        <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight">
                            Design is the <span className="italic font-light">invisible</span> structure of truth.
                        </h2>
                    </div>
                    <div className="editorial-line overflow-hidden">
                        <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed">
                            We don't just build interfaces. We build
                            <span className="inline-flex items-center px-4 mx-2">
                                <svg className="blob-svg w-12 h-12 text-white/20" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                                </svg>
                            </span>
                            ecosystems that command attention and drive conversion. Every element is weighed, measured, and verified.
                        </p>
                    </div>
                </section>

                {/* Feature Grid with High Contrast */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="editorial-line">
                        <div className="aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden relative mb-8">
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 mb-2">Aesthetic Alpha</div>
                                <h3 className="text-4xl font-display font-bold">Zinc-950 Core.</h3>
                            </div>
                        </div>
                        <p className="text-zinc-500 max-w-sm font-light leading-relaxed">
                            Using the deep end of the spectrum to create focus. No distractions. No clutter. Just the essence of your brand.
                        </p>
                    </div>

                    <div className="editorial-line md:mt-40">
                        <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden relative mb-8">
                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-2">The Orbit</div>
                                <h3 className="text-4xl font-display font-bold text-black">Radical Contrast.</h3>
                            </div>
                        </div>
                        <p className="text-zinc-500 max-w-sm font-light leading-relaxed">
                            Where many fear the void, we embrace it. Contrast isn't just color; it's the space between ideas.
                        </p>
                    </div>
                </section>

                {/* Big Statement Section */}
                <section className="py-40 text-center">
                    <div className="editorial-line inline-block mb-12">
                        <span className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.5em] font-bold">
                            The Manifesto
                        </span>
                    </div>
                    <div className="editorial-line">
                        <h2 className="text-5xl md:text-9xl font-display font-black tracking-tighter text-gradient leading-none">
                            NO PLACEHOLDERS.<br />NO MEDIOCRE.
                        </h2>
                    </div>
                </section>

            </article>

            {/* Back to Home */}
            <a href="/" className="fixed bottom-8 right-8 text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold z-50">
                ← Return Menu
            </a>
        </div>
    );
}
