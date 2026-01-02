import { Navbar } from '~/components/navbar'
import { Download, ArrowRight, CheckCircle } from 'lucide-react'
import { lazy, Suspense, type ComponentType } from 'react'
import OrbitModel from '~/components/orbit-model'
import PortfolioCarousel from '~/components/portfolio-carousel'
import Header from '~/components/21st-navbar'

const SplineCanvas = lazy(() => import('~/components/spline-canvas'))

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Navbar (21st) */}
      <Header
        theme="dark"
        isSticky
        isStickyOverlay
        withBorder={false}
        logo={
          <a href="/" aria-label="cabyz home" className="inline-flex items-center h-8 md:h-9 gap-1 text-white" style={{ fontFamily: 'var(--font-atamiga), Inter, sans-serif' }}>
            <img
              src="/cabyz.svg"
              alt=""
              className="w-8 h-8 md:w-9 md:h-9 object-contain shrink-0"
            />
            <span className="text-[14px] md:text-[15px] leading-none font-medium tracking-tight select-none">cabyz</span>
          </a>
        }
        menuItems={[
          { to: '#hero', text: 'Home' },
          { to: '#problem', text: 'Problem' },
          { to: '#solution', text: 'Solution' },
          { to: '#methodology', text: 'Method' },
          { to: '#impact', text: 'Results' },
          { to: '#portfolio', text: 'Portfolio' },
          { to: '#contact', text: 'Contact' },
        ]}
      />

      {/* Right-side section progress dots */}
      <Navbar />

      <main>
        {/* Hero Section with Spline */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 relative bg-black overflow-hidden scroll-mt-24 md:scroll-mt-28">
          {/* Spline 3D Background - Scaled to hide watermark */}
          <div className="absolute inset-0 z-0 transform-gpu scale-[1.08] -translate-y-[6vh] md:-translate-y-[8vh] lg:-translate-y-[10vh]">
            <Suspense fallback={
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[420px] w-full bg-black/50 border-y border-gray-900" />
              </div>
            }>
              <SplineCanvas scene="https://prod.spline.design/ufUgFPE08coSA9RX/scene.splinecode" className="w-full h-full" />
            </Suspense>
          </div>

          {/* Prominent bottom gradient blend to black */}
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[rgb(12,13,13)] via-[rgba(12,13,13,0.8)] to-transparent z-10 pointer-events-none" />

          {/* Perfectly Centered Hero Content */}
          <div className="relative z-20 text-center w-full max-w-[700px] mx-auto">

            {/* Subheader with delayed elegant animation */}
            <div className="hero-subtitle-enter">
              <h1 className="h1 mx-auto mb-0 hero-text-shadow max-w-[540px]">
                We invest in service businesses—and turn them into scalable assets.
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction Section - Overlapping */}
        <section className="content-wrap px-6 md:px-8 bg-transparent relative z-30 -mt-24 pt-32 text-white scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto">
            <div className="mb-6">
              <div className="w-8 h-8 mb-4 opacity-60">
                <div className="w-full h-full border border-gray-600 rounded-full" />
              </div>
              <h2 className="h2">Introduction</h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-300 max-w-2xl text-left">
              <p className="leading-relaxed">
                Turn a founder-dependent service business into a self-scaling cash machine—by installing acquisition
                infrastructure, AI-run ops, and an on-demand talent engine—without raising or using your capital.
              </p>
            </div>

            {/* Benefits / Outcomes */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {[
                'More booked revenue',
                'Less payroll drag',
                'Founder freed from the calendar',
                'Valuation compounding',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-800 bg-gray-900/50 text-gray-200">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Current vs End Outcome Table */}
            <div className="mt-8 border border-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-gray-900/50 px-4 py-3 border-r border-gray-800">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">CURRENT</div>
                  <div className="text-sm text-gray-300">World Class Entrepreneur</div>
                </div>
                <div className="bg-gray-900/50 px-4 py-3">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">END OUTCOME</div>
                  <div className="text-sm text-gray-300">Achieve scale in your current business and partner on $10mil+ opportunity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Full Viewport */}
        <section id="problem" className="min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto">
            <div className="mb-6">
              <div className="w-8 h-8 mb-4 opacity-60">
                <div className="w-full h-full border border-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-l border-gray-400 rounded-full animate-spin" />
                </div>
              </div>
              <h2 className="h2">The Problem</h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-300 max-w-3xl text-left">
              <p className="leading-relaxed">
                Professional services firms are stuck trading time for money. You're maxed out on hours,
                struggling with feast-or-famine revenue cycles, and constantly starting over with custom projects.
              </p>
              <p className="leading-relaxed">
                While you're burning out delivering one-off work, smart competitors are building
                scalable systems that generate predictable revenue.
              </p>
              <p className="leading-relaxed">
                The solution isn't working harder—it's working systematically.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section - Full Viewport */}
        <section id="solution" className="min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto">
            <div className="mb-6">
              <div className="w-8 h-8 mb-4 opacity-60">
                <div className="w-full h-full border border-gray-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <h2 className="h2">Solution</h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-300 max-w-3xl mb-8 text-left">
              <p className="leading-relaxed">
                We build complete <span className="text-white font-medium">Growth Systems</span>—not just software, but entire business transformations
                that turn your expertise into scalable, repeatable revenue engines.
              </p>
              <p className="leading-relaxed">
                Each $25k system handles automated lead generation, client acquisition,
                delivery optimization, and expansion. Everything runs 24/7 while you focus on strategy.
              </p>
              <p className="leading-relaxed">
                Professional services firms scale from $500K to $3M+ ARR
                without hiring additional delivery staff.
              </p>
            </div>

            {/* Transformation Table */}
            <div className="border border-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-gray-900/50 px-4 py-3 border-r border-gray-800">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current</div>
                  <div className="text-sm text-gray-300">Hours for Money</div>
                </div>
                <div className="bg-gray-900/50 px-4 py-3">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Outcome</div>
                  <div className="text-sm text-white font-medium">Scalable Systems</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section - Full Viewport */}
        <section id="methodology" className="min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto">
            <div className="mb-6">
              <div className="w-8 h-8 mb-4 opacity-60">
                <div className="w-full h-full border border-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full animate-pulse" />
                </div>
              </div>
              <h2 className="h2">Methodology</h2>
              <p className="text-gray-400 max-w-2xl">
                Seven systematically optimized phases that transform your business model from linear to exponential growth:
              </p>
            </div>

            {/* 7-Phase System Breakdown - Condensed Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  phase: "01",
                  title: "Awareness",
                  description: "Automated lead generation systems that attract high-value prospects 24/7 through content, SEO, and targeted outreach."
                },
                {
                  phase: "02",
                  title: "Education",
                  description: "Value-first nurture sequences that build trust and position you as the obvious choice before sales conversations."
                },
                {
                  phase: "03",
                  title: "Selection",
                  description: "Qualification systems that ensure you only speak with ready-to-buy prospects who value premium services."
                },
                {
                  phase: "04",
                  title: "Mutual Commit",
                  description: "Proven sales processes and proposals that consistently close 6-figure engagements with confidence."
                },
                {
                  phase: "05",
                  title: "Onboarding",
                  description: "Streamlined client activation that reduces time-to-value and sets clear expectations from day one."
                },
                {
                  phase: "06",
                  title: "Retention",
                  description: "Systematic value delivery and communication that ensures long-term client relationships and renewals."
                },
                {
                  phase: "07",
                  title: "Expansion",
                  description: "Upselling and cross-selling frameworks that maximize lifetime value and create predictable growth."
                }
              ].map((item, index) => (
                <div key={index} className="p-4 border border-gray-800 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <div className="text-lg font-medium mb-1 text-white">{item.phase}</div>
                  <h4 className="text-base font-medium mb-2 text-white">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">
                Each phase is systematically optimized with automation, processes, and technology
                to create <span className="text-white font-medium">predictable, scalable revenue growth</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Orbit Model - Native Placement */}
        <section id="orbit" className="px-6 md:px-8 py-16 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto w-full">
            <OrbitModel />
          </div>
        </section>

        {/* Impact Section - Full Viewport */}
        <section id="impact" className="min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto">
            <div className="mb-6">
              <div className="w-8 h-8 mb-4 opacity-60">
                <div className="w-full h-full border border-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-l-2 border-gray-400 rounded-full animate-spin" />
                </div>
              </div>
              <h2 className="h2">Impact</h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-300 max-w-3xl text-left">
              <p className="leading-relaxed">
                Law firms: <span className="text-white font-medium">847% case volume increase</span>. Insurance agencies: <span className="text-white font-medium">94% retention</span>.
                Marketing agencies: <span className="text-white font-medium">$10M+ ARR</span> without expanding teams.
              </p>
              <p className="leading-relaxed">
                Consistent metrics across implementations: <span className="text-white font-medium">13.9x ROI</span>, <span className="text-white font-medium">27-day payback</span>,
                <span className="text-white font-medium">$2.3M average revenue increase</span> annually.
              </p>
              <p className="leading-relaxed">
                These results reflect systematic business transformation,
                not individual performance variations.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Full Viewport */}
        <section id="portfolio" className="min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[960px] mx-auto w-full">
            <div className="mb-6">
              <div className="w-8 h-8 mb-4 opacity-60">
                <div className="w-full h-full border border-gray-600 rounded-full" />
              </div>
              <h2 className="h2">Portfolio</h2>
              <p className="text-gray-400 max-w-2xl">
                Selected initiatives and incubations. Metrics shown are directional and for illustration.
              </p>
            </div>

            <div className="mt-4">
              <PortfolioCarousel />
            </div>
          </div>
        </section>

        {/* Contact Section - Full Viewport */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-8 border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-[540px] mx-auto">
            <div className="mb-6">
              <h2 className="h2">Ready to Scale?</h2>
              <p className="text-gray-400 max-w-2xl">
                Only 3 spots remaining this quarter. Book your Growth Systems consultation
                and discover how to transform your professional services firm.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors">
                Book Strategy Call
              </button>

              <div className="text-sm text-gray-500 mt-2 sm:mt-3">
                🔒 No commitment required • 30-minute consultation
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}
