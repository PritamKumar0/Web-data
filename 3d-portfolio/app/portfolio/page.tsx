import PortfolioGrid from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <div className="container px-4 py-24 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">My Portfolio</h1>
          <p className="max-w-[700px] text-white/70 md:text-xl">
            A showcase of my creative work across video editing, VFX, CGI, and web design.
          </p>
        </div>

        <PortfolioGrid />
      </div>
    </main>
  )
}

