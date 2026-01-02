import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function NarrativeScrub() {
    const containerRef = useRef<HTMLDivElement>(null);
    const monolithRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !monolithRef.current) return;

        const ctx = gsap.context(() => {
            // 1. The Monolith Animation (Scrub)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            tl.to(monolithRef.current, {
                scale: 0.5,
                rotate: 180,
                borderRadius: "50%",
                opacity: 0.2,
                ease: "none"
            })
                .to(monolithRef.current, {
                    scale: 5,
                    rotate: 360,
                    borderRadius: "0%",
                    opacity: 0.05,
                    ease: "none"
                });

            // 2. Sections staggered entrance
            const sections = gsap.utils.toArray(".narrative-section");
            sections.forEach((section: any) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: 1,
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative bg-zinc-950 text-white min-h-[300vh]">
            {/* Fixed Monolith Aspect */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
                <div
                    ref={monolithRef}
                    className="w-64 h-64 bg-gradient-to-br from-white to-zinc-800 opacity-40 shadow-[0_0_100px_rgba(255,255,255,0.1)]"
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
                <a href="/" className="font-display text-xl font-bold tracking-tighter">CABYZ_ZEN</a>
                <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
                    <span>01 / Story</span>
                    <span>02 / Vision</span>
                    <span>03 / Impact</span>
                </div>
            </nav>

            {/* Narrative Flow */}
            <div className="relative z-10 pt-[50vh] px-8 md:px-24">
                {/* Section 1 */}
                <section className="narrative-section h-screen flex flex-col justify-center">
                    <h2 className="font-display text-6xl md:text-8xl font-black mb-6 leading-tight">
                        THE ARCHITECTURE<br />OF SILENCE.
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-xl font-light leading-relaxed">
                        Every pixel is a decision. Every interaction is an intention.
                        We build tools for the sovereign builder—those who reject mediocrity.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="narrative-section h-screen flex flex-col justify-center items-end text-right">
                    <h2 className="font-display text-6xl md:text-8xl font-black mb-6 leading-tight">
                        MORPHING<br />REALITY.
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-xl font-light leading-relaxed ml-auto">
                        Our systems adapt as you grow. The Monolith isn't static;
                        it is a living reflection of your architectural evolution.
                    </p>
                </section>

                {/* Section 3 */}
                <section className="narrative-section h-screen flex flex-col justify-center">
                    <h2 className="font-display text-6xl md:text-8xl font-black mb-6 leading-tight text-gradient">
                        GENESIS<br />INTEGRATED.
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-xl font-light leading-relaxed">
                        Ready to deploy? The sovereign lifecycle is now automated via Zen.
                    </p>
                    <div className="mt-12 flex gap-4">
                        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
                            Initialize Stack
                        </button>
                    </div>
                </section>
            </div>

            {/* Scroll Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold z-50">
                <span>Scroll Triggered</span>
                <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-4 bg-white"
                    />
                </div>
            </div>
        </div>
    );
}
