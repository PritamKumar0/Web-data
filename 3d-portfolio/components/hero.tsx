"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Dynamically import Three.js components with no SSR
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})
const DynamicText = dynamic(() => import("@react-three/drei").then((mod) => mod.Text), {
  ssr: false,
})
const DynamicEnvironment = dynamic(() => import("@react-three/drei").then((mod) => mod.Environment), {
  ssr: false,
})
const DynamicFloat = dynamic(() => import("@react-three/drei").then((mod) => mod.Float), {
  ssr: false,
})
const DynamicPresentationControls = dynamic(() => import("@react-three/drei").then((mod) => mod.PresentationControls), {
  ssr: false,
})
const DynamicUseFrame = dynamic(() => import("@react-three/fiber").then((mod) => mod.useFrame), {
  ssr: false,
})

function AnimatedText() {
  const textRef = useRef()
  const useFrame = DynamicUseFrame

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 0.2
    }
  })

  return (
    <DynamicFloat speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <DynamicText
        ref={textRef}
        font="/fonts/Geist_Bold.json"
        fontSize={1.5}
        position={[0, 0.2, 0]}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        CREATIVE PORTFOLIO
      </DynamicText>
    </DynamicFloat>
  )
}

function Scene() {
  const boxRef = useRef()
  const useFrame = DynamicUseFrame

  useFrame(({ clock }) => {
    if (boxRef.current) {
      boxRef.current.rotation.y = clock.getElapsedTime() * 0.3
      boxRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <group ref={boxRef}>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#5046e5"
            emissive="#2a1f9c"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, 0, 0]} scale={1.1}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#5046e5" wireframe={true} transparent={true} opacity={0.2} />
        </mesh>
      </group>
      <AnimatedText />
      <DynamicEnvironment preset="city" />
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {typeof window !== "undefined" && (
        <DynamicCanvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full bg-black">
          <DynamicPresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-0.5, 0.5]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Scene />
          </DynamicPresentationControls>
        </DynamicCanvas>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="container flex flex-col items-center text-center gap-6 mt-[40vh] pointer-events-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
            John Doe
          </h1>
          <p className="max-w-[600px] text-white/80 md:text-xl">
            Creative Director & Digital Artist specializing in Video Editing, VFX, CGI, and Web Design
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

