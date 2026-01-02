import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function PortfolioCarousel() {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [1, 2, 3].map((i) => (_jsx("div", { className: "aspect-video bg-zinc-900/50 border border-white/5 rounded-lg flex items-center justify-center", children: _jsxs("span", { className: "text-zinc-600 text-xs", children: ["Project_0", i] }) }, i))) }));
}
