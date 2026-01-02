import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
export default function Index() {
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#FBFBFD]", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "glass-panel p-12 rounded-[16px] text-center", children: [_jsx("h1", { className: "text-4xl font-bold text-[#1D1D1F]", children: "Welcome to Zen App" }), _jsx("p", { className: "mt-4 text-[#86868B]", children: "Your minimalist dashboard starts here." })] }) }));
}
