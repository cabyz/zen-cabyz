export default function Header({ menuItems, logo }: any) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {logo}
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item: any) => (
                        <a
                            key={item.to}
                            href={item.to}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
                <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors">
                    Contact
                </button>
            </div>
        </header>
    )
}
