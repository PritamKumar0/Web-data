"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Work" },
  { id: "video", label: "Video Editing" },
  { id: "vfx", label: "VFX" },
  { id: "cgi", label: "CGI" },
  { id: "web", label: "Web Design" },
]

const projects = [
  {
    id: 1,
    title: "Cinematic Trailer",
    category: "video",
    image: "/placeholder.svg?height=600&width=800",
    description: "Professional cinematic trailer with advanced color grading and sound design.",
  },
  {
    id: 2,
    title: "Product Visualization",
    category: "cgi",
    image: "/placeholder.svg?height=600&width=800",
    description: "Photorealistic 3D product visualization for marketing campaign.",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Modern e-commerce platform with custom animations and checkout flow.",
  },
  {
    id: 4,
    title: "Visual Effects Sequence",
    category: "vfx",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complex visual effects sequence for a sci-fi short film.",
  },
  {
    id: 5,
    title: "Corporate Video",
    category: "video",
    image: "/placeholder.svg?height=600&width=800",
    description: "Corporate promotional video with motion graphics and interviews.",
  },
  {
    id: 6,
    title: "Character Animation",
    category: "cgi",
    image: "/placeholder.svg?height=600&width=800",
    description: "3D character animation for an animated short film.",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="w-full py-24 bg-black" id="portfolio">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white mb-4">Portfolio</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Featured Projects</h2>
          <p className="max-w-[700px] text-white/70 md:text-xl">
            Explore my latest work across video editing, VFX, CGI, and web design.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/10">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden bg-black border border-white/20 hover:border-white/50 transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <h3 className="font-bold text-white text-lg">{project.title}</h3>
                          <p className="text-white/70 text-sm">{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-white">{project.title}</h3>
                      <p className="text-white/50 text-sm">
                        {categories.find((c) => c.id === project.category)?.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

