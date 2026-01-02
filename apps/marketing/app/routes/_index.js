import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Link } from "react-router";
export const meta = () => {
    return [
        { title: "Cabyz Zen | Landing Page Showcase" },
        { name: "description", content: "High-fidelity landing page variations for the Cabyz ecosystem." },
    ];
};
const showcases = [
    {
        id: "narrative",
        title: "Narrative Scrub",
        description: "A scroll-driven storytelling experience powered by GSAP. Elements morph and react to your scroll position.",
        tech: ["GSAP", "ScrollTrigger", "SVG Morph"],
        path: "/showcase/narrative",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: "simulated",
        title: "Simulated Product",
        description: "SaaS-style product demo with a simulated 'Sentient Cursor' that interacts with UI elements via useRef logic.",
        tech: ["Motion.dev", "useRef", "UI Feedback"],
        path: "/showcase/simulated",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: "editorial",
        title: "Fluid Editorial",
        description: "High-end brand page featuring kinetic typography and inline SVG punctuation. Text flows like liquid.",
        tech: ["GSAP SplitText", "SVGs", "Layout Flow"],
        path: "/showcase/editorial",
        color: "from-orange-500/20 to-red-500/20"
    }
];
export default function Index() {
    return (_jsxs("div", { className: "min-h-screen bg-zinc-950 text-white selection:bg-white/10 p-8 md:p-24 overflow-x-hidden", children: [_jsxs("div", { className: "fixed inset-0 pointer-events-none", children: [_jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" }), _jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" })] }), _jsxs("main", { className: "relative z-10 max-w-7xl mx-auto", children: [_jsxs("header", { className: "mb-20", children: [_jsxs(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "font-display text-5xl md:text-7xl font-bold tracking-tight mb-4", children: ["Landing Page ", _jsx("span", { className: "text-zinc-500", children: "Showcase" })] }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" }, className: "text-zinc-400 text-xl max-w-2xl font-light", children: "Three distinct architectural directions for the Cabyz digital presence. Built for high-performance and emotional resonance." })] }), _jsx("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: showcases.map((item, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 + idx * 0.1 }, children: _jsxs(Link, { to: item.path, className: "group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-colors duration-500", children: [_jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700` }), _jsx("div", { className: "absolute inset-0 p-8 flex flex-col justify-end", children: _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: item.tech.map(t => (_jsx("span", { className: "px-2 py-1 text-[10px] uppercase tracking-widest font-bold bg-white/5 border border-white/10 rounded-full text-zinc-400", children: t }, t))) }), _jsxs("div", { children: [_jsx("h2", { className: "font-display text-3xl font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-500", children: item.title }), _jsx("p", { className: "text-zinc-400 text-sm leading-relaxed font-light", children: item.description })] })] }) }), _jsx("div", { className: "absolute top-8 right-8 w-12 h-12 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700", children: _jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M7 17L17 7M17 7H7M17 7V17" }) }) })] }) }, item.id))) }), _jsxs("footer", { className: "mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-zinc-600 text-sm", children: [_jsx("div", { children: "\u00A9 2026 Cabyz Zen" }), _jsxs("div", { className: "flex gap-6 uppercase tracking-widest text-[10px] font-bold", children: [_jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Twitter" }), _jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "GitHub" }), _jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Contact" })] })] })] })] }));
}
