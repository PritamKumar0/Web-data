"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"

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
    client: "Universal Studios",
    year: "2023",
  },
  {
    id: 2,
    title: "Product Visualization",
    category: "cgi",
    image: "/placeholder.svg?height=600&width=800",
    description: "Photorealistic 3D product visualization for marketing campaign.",
    client: "Apple Inc.",
    year: "2023",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Modern e-commerce platform with custom animations and checkout flow.",
    client: "Fashion Brand",
    year: "2022",
  },
  {
    id: 4,
    title: "Visual Effects Sequence",
    category: "vfx",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complex visual effects sequence for a sci-fi short film.",
    client: "Independent Film",
    year: "2022",
  },
  {
    id: 5,
    title: "Corporate Video",
    category: "video",
    image: "/placeholder.svg?height=600&width=800",
    description: "Corporate promotional video with motion graphics and interviews.",
    client: "Microsoft",
    year: "2021",
  },
  {
    id: 6,
    title: "Character Animation",
    category: "cgi",
    image: "/placeholder.svg?height=600&width=800",
    description: "3D character animation for an animated short film.",
    client: "Animation Studio",
    year: "2021",
  },
  {
    id: 7,
    title: "Music Video",
    category: "video",
    image: "/placeholder.svg?height=600&width=800",
    description: "Creative music video with experimental visual techniques.",
    client: "Record Label",
    year: "2020",
  },
  {
    id: 8,
    title: "SaaS Dashboard",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "User-friendly dashboard for a SaaS platform with data visualization.",
    client: "Tech Startup",
    year: "2020",
  },
  {
    id: 9,
    title: "Architectural Visualization",
    category: "cgi",
    image: "/placeholder.svg?height=600&width=800",
    description: "Photorealistic architectural visualization for a luxury property.",
    client: "Real Estate Developer",
    year: "2019",
  },
]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden bg-black border border-white/20 hover:border-white/50 transition-all duration-300 group cursor-pointer">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button size="icon" variant="ghost" className="rounded-full bg-white/20 hover:bg-white/30">
                              <Play className="h-6 w-6 text-white" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-white text-lg">{project.title}</h3>
                          <p className="text-white/50 text-sm">
                            {categories.find((c) => c.id === project.category)?.label}
                          </p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] bg-gray-900 border-white/10">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                        <DialogDescription className="text-white/70">{project.description}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-6 py-4">
                        <div className="relative aspect-video overflow-hidden rounded-lg">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-white">
                          <div>
                            <h4 className="text-sm font-medium text-white/50">Client</h4>
                            <p>{project.client}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white/50">Year</h4>
                            <p>{project.year}</p>
                          </div>
                          <div className="col-span-2">
                            <h4 className="text-sm font-medium text-white/50">Category</h4>
                            <p>{categories.find((c) => c.id === project.category)?.label}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  )
}

