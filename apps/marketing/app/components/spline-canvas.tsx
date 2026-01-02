'use client'

export default function SplineCanvas({ scene, className }: { scene: string; className?: string }) {
    return (
        <div className={className} style={{ background: '#000' }}>
            {/* Spline Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-zinc-800 text-xs">
                3D_ENGINE_OFFLINE
            </div>
        </div>
    )
}
