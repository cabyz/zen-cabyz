import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
// Actually Keystatic files are usually separate .json or .md files.
// Let's assume a standard pattern where we read the specific slug file.
export const loader = async ({ params }) => {
    const { slug } = params;
    // In a real build, we'd use a server-side read or a glob import.
    // For now, let's provide the structure.
    return { slug };
};
export default function Post() {
    const { slug } = useLoaderData();
    return (_jsx("div", { className: "min-h-screen bg-[#FBFBFD] py-20 px-4", children: _jsxs(motion.article, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "max-w-3xl mx-auto prose prose-blue lg:prose-xl", children: [_jsxs("h1", { children: ["Blog Post: ", slug] }), _jsx("p", { className: "text-[#86868B]", children: "This is a placeholder for your Keystatic-driven blog post." })] }) }));
}
