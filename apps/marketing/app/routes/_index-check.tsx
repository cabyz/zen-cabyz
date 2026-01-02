import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Cabyz Zen | Sovereign Automation" },
        { name: "description", content: "High-fidelity simulated product demo showcasing the Zen ecosystem's automation capabilities." },
    ];
};

const TASKS = [
    { id: "deploy", label: "Initialize Cloud Sync", icon: "☁️" },
    { id: "audit", label: "Perform Security Audit", icon: "🛡️" },
    { id: "zen", label: "Align Zen Standard", icon: "✨" }
];

export default function Index() {
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);

    // Refs for bounding boxes
    const taskRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

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
        };

        const timer = setTimeout(sequence, 1000);
        return () => clearTimeout(timer);
    }, [completedTasks.length === 0]); // Re-run when reset

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-hidden selection:bg-white/10">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto pt-24 md:pt-32 px-8">
                <header className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-6"
                    >
                        System Status: Active
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-7xl font-bold mb-4 tracking-tighter"
                    >
                        Sovereign <span className="text-zinc-500">Automation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed"
                    >
                        Watch the system optimize itself in real-time.
                        Zero placeholders. Zero mediocrity.
                    </motion.p>
                </header>

                {/* The Dashboard UI */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-zinc rounded-[32px] p-8 md:p-12 overflow-hidden relative"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Control Sidebar */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-6">Operations Queue</h3>
                            {TASKS.map((task) => (
                                <button
                                    key={task.id}
                                    ref={(el) => { taskRefs.current[task.id] = el; }}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-500 ${completedTasks.includes(task.id)
                                            ? "bg-white/10 border-white/20 text-white"
                                            : "bg-zinc-900 border-white/5 text-zinc-500"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl">{task.icon}</span>
                                        <span className="text-sm font-medium">{task.label}</span>
                                    </div>
                                    <AnimatePresence>
                                        {completedTasks.includes(task.id) && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4">
                                                    <path d="M20 6L9 17L4 12" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            ))}
                        </div>

                        {/* Status Panel */}
                        <div className="bg-black/40 rounded-2xl border border-white/5 p-6 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <div className="flex gap-2 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-2 font-mono text-[11px] text-zinc-500">
                                    <p>{">"} initializing sovereign_sync_v2...</p>
                                    {completedTasks.map(id => (
                                        <p key={id} className="text-zinc-300 tracking-tight">
                                            {">"} Task {id} success [ACK_0x99]
                                        </p>
                                    ))}
                                    {completedTasks.length < TASKS.length && <p className="animate-pulse">_</p>}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-[10px] uppercase font-bold text-zinc-600 mb-1">Health Metric</div>
                                        <div className="text-3xl font-display font-medium tabular-nums">
                                            {Math.round(completedTasks.length * 33.3) + (completedTasks.length > 0 ? 0.1 : 0)}%
                                        </div>
                                    </div>
                                    <div className="w-24 h-1 bg-zinc-900 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: `${completedTasks.length * 33.3}%` }}
                                            className="h-full bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                <footer className="mt-24 pb-12 text-center text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
                    © 2026 Cabyz Zen • Genesis Integration
                </footer>
            </div>

            {/* THE SENTIENT CURSOR */}
            <motion.div
                animate={{
                    x: cursorPos.x - 10,
                    y: cursorPos.y - 10,
                    scale: isClicking ? 0.8 : 1,
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.23, 1, 0.32, 1], // Sovereign Easing
                    scale: { duration: 0.1 }
                }}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] flex items-center justify-center"
            >
                {/* Glow */}
                <div className="absolute inset-0 bg-white/20 blur-md rounded-full animate-pulse" />

                {/* Pointer */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>

                {/* Click Indicator */}
                {isClicking && (
                    <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 3, opacity: 0 }}
                        className="absolute inset-0 border border-white rounded-full"
                    />
                )}
            </motion.div>
        </div>
    );
}
