import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);
export default function NarrativeScrub() {
    const containerRef = useRef(null);
    const monolithRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current || !monolithRef.current)
            return;
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
            sections.forEach((section) => {
                gsap.fromTo(section, { opacity: 0, y: 100 }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (_jsxs("div", { ref: containerRef, className: "relative bg-zinc-950 text-white min-h-[300vh]", children: [_jsx("div", { className: "fixed inset-0 flex items-center justify-center pointer-events-none z-0", children: _jsx("div", { ref: monolithRef, className: "w-64 h-64 bg-gradient-to-br from-white to-zinc-800 opacity-40 shadow-[0_0_100px_rgba(255,255,255,0.1)]" }) }), _jsxs("nav", { className: "fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference", children: [_jsx("a", { href: "/", className: "font-display text-xl font-bold tracking-tighter", children: "CABYZ_ZEN" }), _jsxs("div", { className: "flex gap-8 text-[10px] uppercase tracking-widest font-bold", children: [_jsx("span", { children: "01 / Story" }), _jsx("span", { children: "02 / Vision" }), _jsx("span", { children: "03 / Impact" })] })] }), _jsxs("div", { className: "relative z-10 pt-[50vh] px-8 md:px-24", children: [_jsxs("section", { className: "narrative-section h-screen flex flex-col justify-center", children: [_jsxs("h2", { className: "font-display text-6xl md:text-8xl font-black mb-6 leading-tight", children: ["THE ARCHITECTURE", _jsx("br", {}), "OF SILENCE."] }), _jsx("p", { className: "text-zinc-400 text-xl max-w-xl font-light leading-relaxed", children: "Every pixel is a decision. Every interaction is an intention. We build tools for the sovereign builder\u2014those who reject mediocrity." })] }), _jsxs("section", { className: "narrative-section h-screen flex flex-col justify-center items-end text-right", children: [_jsxs("h2", { className: "font-display text-6xl md:text-8xl font-black mb-6 leading-tight", children: ["MORPHING", _jsx("br", {}), "REALITY."] }), _jsx("p", { className: "text-zinc-400 text-xl max-w-xl font-light leading-relaxed ml-auto", children: "Our systems adapt as you grow. The Monolith isn't static; it is a living reflection of your architectural evolution." })] }), _jsxs("section", { className: "narrative-section h-screen flex flex-col justify-center", children: [_jsxs("h2", { className: "font-display text-6xl md:text-8xl font-black mb-6 leading-tight text-gradient", children: ["GENESIS", _jsx("br", {}), "INTEGRATED."] }), _jsx("p", { className: "text-zinc-400 text-xl max-w-xl font-light leading-relaxed", children: "Ready to deploy? The sovereign lifecycle is now automated via Zen." }), _jsx("div", { className: "mt-12 flex gap-4", children: _jsx("button", { className: "px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors", children: "Initialize Stack" }) })] })] }), _jsxs("div", { className: "fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold z-50", children: [_jsx("span", { children: "Scroll Triggered" }), _jsx("div", { className: "w-[1px] h-12 bg-white/10 relative overflow-hidden", children: _jsx(motion.div, { animate: { y: [0, 48] }, transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }, className: "w-full h-4 bg-white" }) })] })] }));
}
