import { motion } from "motion/react";

export default function Index() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FBFBFD]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel p-12 rounded-[16px] text-center"
            >
                <h1 className="text-4xl font-bold text-[#1D1D1F]">Welcome to Zen App</h1>
                <p className="mt-4 text-[#86868B]">Your minimalist dashboard starts here.</p>
            </motion.div>
        </div>
    );
}
