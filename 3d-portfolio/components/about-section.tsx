"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Dynamically import Three.js components with no SSR
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})
const DynamicOrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), {
  ssr: false,
})
const DynamicEnvironment = dynamic(() => import("@react-three/drei").then((mod) => mod.Environment), {
  ssr: false,
})
const DynamicContactShadows = dynamic(() => import("@react-three/drei").then((mod) => mod.ContactShadows), {
  ssr: false,
})

function Avatar() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#5046e5" metalness={0.7} roughness={0.2} />
    </mesh>
  )
}

const skills = [
  { name: "Video Editing", level: 95 },
  { name: "VFX", level: 90 },
  { name: "CGI & 3D Modeling", level: 85 },
  { name: "Web Design", level: 80 },
  { name: "UI/UX Design", level: 75 },
]

const technologies = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Cinema 4D",
  "Blender",
  "Houdini",
  "React",
  "Three.js",
  "Figma",
  "Photoshop",
  "Illustrator",
]

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-gray-900" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            className="h-[500px] relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {typeof window !== "undefined" && (
              <DynamicCanvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Avatar />
                <DynamicContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} />
                <DynamicEnvironment preset="city" />
                <DynamicOrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                  minPolarAngle={Math.PI / 2.5}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </DynamicCanvas>
            )}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 max-w-[80%] text-center">
                <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                <p className="text-white/70">Creative Director & Digital Artist</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">About Me</h2>
              <p className="text-white/70">
                With over 10 years of experience in the creative industry, I specialize in creating immersive digital
                experiences through video editing, VFX, CGI, and web design. My passion lies in blending technical
                expertise with artistic vision to deliver exceptional results for clients across various industries.
              </p>
              <p className="text-white/70 mt-4">
                Based in New York City, I've collaborated with global brands and agencies to create award-winning
                content that engages audiences and drives results.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-bold text-white">Skills</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-white/90 text-sm">{skill.name}</span>
                      <span className="text-white/50 text-sm">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-white/10"
                      indicatorClassName="bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

