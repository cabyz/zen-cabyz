import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Toaster } from "sonner";
import { initAnalytics, trackPageView } from "./lib/analytics";
import "./app.css";
export function Layout({ children }) {
    const location = useLocation();
    useEffect(() => {
        initAnalytics();
    }, []);
    useEffect(() => {
        trackPageView();
    }, [location]);
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap", rel: "stylesheet" }), _jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { children: [children, _jsx(Toaster, { richColors: true, position: "top-center" }), _jsx(ScrollRestoration, {}), _jsx(Scripts, {})] })] }));
}
export default function App() {
    return _jsx(Outlet, {});
}
