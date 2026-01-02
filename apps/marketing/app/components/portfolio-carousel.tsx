export default function PortfolioCarousel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-zinc-900/50 border border-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-zinc-600 text-xs">Project_0{i}</span>
                </div>
            ))}
        </div>
    )
}
