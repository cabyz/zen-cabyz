import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const TASKS = [
    { id: "deploy", label: "Initialize Cloud Sync", icon: "☁️" },
    { id: "audit", label: "Perform Security Audit", icon: "🛡️" },
    { id: "zen", label: "Align Zen Standard", icon: "✨" }
];
export default function SimulatedProduct() {
    const [activeTaskIndex, setActiveTaskIndex] = useState(0);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    // Refs for bounding boxes
    const taskRefs = useRef({});
    useEffect(() => {
        const sequence = async () => {
            // Loop through tasks
            for (let i = 0; i < TASKS.length; i++) {
                const task = TASKS[i];
                const element = taskRefs.current[task.id];
                if (element) {
                    // Bounding Box Logic: Find center of element
                    const rect = element.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    // 1. Move Cursor to target
                    setCursorPos({ x: centerX, y: centerY });
                    await new Promise(r => setTimeout(r, 1500));
                    // 2. Simulate Click
                    setIsClicking(true);
                    setCompletedTasks(prev => [...prev, task.id]);
                    await new Promise(r => setTimeout(r, 300));
                    setIsClicking(false);
                    await new Promise(r => setTimeout(r, 1000));
                }
            }
            // Reset loop
            await new Promise(r => setTimeout(r, 2000));
            setCompletedTasks([]);
            setActiveTaskIndex(0);
        };
        const timer = setTimeout(sequence, 1000);
        return () => clearTimeout(timer);
    }, [completedTasks.length === 0]); // Re-run when reset
    return (_jsxs("div", { className: "min-h-screen bg-zinc-950 text-white font-sans overflow-hidden", children: [_jsx("div", { className: "fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" }), _jsxs("div", { className: "relative z-10 max-w-4xl mx-auto pt-32 px-8", children: [_jsxs("header", { className: "text-center mb-16", children: [_jsxs(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "font-display text-4xl md:text-6xl font-bold mb-4", children: ["Sovereign ", _jsx("span", { className: "text-zinc-500", children: "Automation" })] }), _jsx("p", { className: "text-zinc-400 text-lg font-light", children: "Watch the system optimize itself in real-time." })] }), _jsx("div", { className: "glass-zinc rounded-[32px] p-8 md:p-12 overflow-hidden relative", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-6", children: "Operations Queue" }), TASKS.map((task) => (_jsxs("button", { ref: (el) => { taskRefs.current[task.id] = el; }, className: `w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-500 ${completedTasks.includes(task.id)
                                                ? "bg-white/10 border-white/20 text-white"
                                                : "bg-zinc-900 border-white/5 text-zinc-500"}`, children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-xl", children: task.icon }), _jsx("span", { className: "text-sm font-medium", children: task.label })] }), _jsx(AnimatePresence, { children: completedTasks.includes(task.id) && (_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, className: "w-5 h-5 rounded-full bg-green-500 flex items-center justify-center", children: _jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "black", strokeWidth: "4", children: _jsx("path", { d: "M20 6L9 17L4 12" }) }) })) })] }, task.id)))] }), _jsxs("div", { className: "bg-black/40 rounded-2xl border border-white/5 p-6 flex flex-col justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex gap-2 mb-6", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/50" }), _jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/50" }), _jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/50" })] }), _jsxs("div", { className: "space-y-2 font-mono text-[11px] text-zinc-500", children: [_jsxs("p", { children: [">", " initializing sovereign_sync_v2..."] }), completedTasks.map(id => (_jsxs("p", { className: "text-zinc-300 tracking-tight", children: [">", " Task ", id, " success [ACK_0x99]"] }, id))), completedTasks.length === 0 && _jsx("p", { className: "animate-pulse", children: "_" })] })] }), _jsx("div", { className: "pt-8 border-t border-white/5", children: _jsx("div", { className: "flex justify-between items-end", children: _jsxs("div", { children: [_jsx("div", { className: "text-[10px] uppercase font-bold text-zinc-600 mb-1", children: "Health Metric" }), _jsxs("div", { className: "text-3xl font-display font-medium tabular-nums", children: [completedTasks.length * 33.3 + 0.1, "%"] })] }) }) })] })] }) })] }), _jsxs(motion.div, { animate: {
                    x: cursorPos.x - 10,
                    y: cursorPos.y - 10,
                    scale: isClicking ? 0.8 : 1,
                }, transition: {
                    duration: 1.2,
                    ease: [0.23, 1, 0.32, 1], // Sovereign Easing
                    scale: { duration: 0.1 }
                }, className: "fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-white/20 blur-md rounded-full animate-pulse" }), _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "white", children: _jsx("path", { d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }) }), isClicking && (_jsx(motion.div, { initial: { scale: 0, opacity: 1 }, animate: { scale: 3, opacity: 0 }, className: "absolute inset-0 border border-white rounded-full" }))] }), _jsx("a", { href: "/", className: "fixed bottom-8 right-8 text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold", children: "\u2190 Return Menu" })] }));
}
