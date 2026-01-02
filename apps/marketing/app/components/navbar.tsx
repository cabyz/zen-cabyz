export const Navbar = () => {
    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
            {['hero', 'problem', 'solution', 'methodology', 'impact', 'portfolio', 'contact'].map((id) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/60 transition-colors"
                    aria-label={`Scroll to ${id}`}
                />
            ))}
        </nav>
    )
}
