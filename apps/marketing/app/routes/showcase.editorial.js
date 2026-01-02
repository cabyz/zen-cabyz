import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function FluidEditorial() {
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current)
            return;
        const ctx = gsap.context(() => {
            // reveal lines animation
            const lines = gsap.utils.toArray(".editorial-line");
            lines.forEach((line) => {
                gsap.fromTo(line, { opacity: 0, y: 50, skewY: 5 }, {
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
                });
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
    return (_jsxs("div", { ref: containerRef, className: "min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black overflow-x-hidden pb-40", children: [_jsx("header", { className: "p-8 md:p-24 border-b border-white/5", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-12", children: [_jsxs("h1", { className: "font-display text-[12vw] leading-[0.85] font-black tracking-tighter", children: ["FLUID", _jsx("br", {}), "CABYZ."] }), _jsxs("div", { className: "max-w-sm space-y-6 text-zinc-500 font-light lowercase leading-relaxed", children: [_jsx("p", { children: "Establishing the new aesthetic standard for service-business transformation." }), _jsxs("div", { className: "flex gap-4", children: [_jsx("span", { className: "w-8 h-[1px] bg-zinc-800 self-center" }), _jsx("span", { className: "text-[10px] uppercase tracking-widest font-bold", children: "Volume 7.8" })] })] })] }) }), _jsxs("article", { className: "px-8 md:px-24 py-32 space-y-32", children: [_jsxs("section", { className: "max-w-5xl", children: [_jsx("div", { className: "editorial-line overflow-hidden mb-4", children: _jsxs("h2", { className: "text-4xl md:text-7xl font-display font-medium tracking-tight", children: ["Design is the ", _jsx("span", { className: "italic font-light", children: "invisible" }), " structure of truth."] }) }), _jsx("div", { className: "editorial-line overflow-hidden", children: _jsxs("p", { className: "text-xl md:text-3xl text-zinc-400 font-light leading-relaxed", children: ["We don't just build interfaces. We build", _jsx("span", { className: "inline-flex items-center px-4 mx-2", children: _jsx("svg", { className: "blob-svg w-12 h-12 text-white/20", viewBox: "0 0 100 100", children: _jsx("circle", { cx: "50", cy: "50", r: "45", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeDasharray: "10 5" }) }) }), "ecosystems that command attention and drive conversion. Every element is weighed, measured, and verified."] }) })] }), _jsxs("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-24", children: [_jsxs("div", { className: "editorial-line", children: [_jsx("div", { className: "aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden relative mb-8", children: _jsxs("div", { className: "absolute inset-0 p-12 flex flex-col justify-end", children: [_jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 mb-2", children: "Aesthetic Alpha" }), _jsx("h3", { className: "text-4xl font-display font-bold", children: "Zinc-950 Core." })] }) }), _jsx("p", { className: "text-zinc-500 max-w-sm font-light leading-relaxed", children: "Using the deep end of the spectrum to create focus. No distractions. No clutter. Just the essence of your brand." })] }), _jsxs("div", { className: "editorial-line md:mt-40", children: [_jsx("div", { className: "aspect-[4/3] bg-white rounded-lg overflow-hidden relative mb-8", children: _jsxs("div", { className: "absolute inset-0 p-12 flex flex-col justify-end", children: [_jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-2", children: "The Orbit" }), _jsx("h3", { className: "text-4xl font-display font-bold text-black", children: "Radical Contrast." })] }) }), _jsx("p", { className: "text-zinc-500 max-w-sm font-light leading-relaxed", children: "Where many fear the void, we embrace it. Contrast isn't just color; it's the space between ideas." })] })] }), _jsxs("section", { className: "py-40 text-center", children: [_jsx("div", { className: "editorial-line inline-block mb-12", children: _jsx("span", { className: "px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.5em] font-bold", children: "The Manifesto" }) }), _jsx("div", { className: "editorial-line", children: _jsxs("h2", { className: "text-5xl md:text-9xl font-display font-black tracking-tighter text-gradient leading-none", children: ["NO PLACEHOLDERS.", _jsx("br", {}), "NO MEDIOCRE."] }) })] })] }), _jsx("a", { href: "/", className: "fixed bottom-8 right-8 text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold z-50", children: "\u2190 Return Menu" })] }));
}
