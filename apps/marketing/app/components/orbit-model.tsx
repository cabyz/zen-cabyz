export default function OrbitModel() {
    return (
        <div className="aspect-square w-full rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden bg-zinc-950/50">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border border-white/10 rounded-full animate-pulse" />
            </div>
            <span className="text-zinc-600 text-xs tracking-widest uppercase">Growth_Orbit</span>
        </div>
    )
}
