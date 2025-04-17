"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { motion, useScroll } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          JOHN DOE
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/#about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/95 border-white/10">
              <nav className="flex flex-col gap-6 mt-12">
                <Link href="/" className="text-white text-lg hover:text-white/80 transition-colors">
                  Home
                </Link>
                <Link href="/portfolio" className="text-white text-lg hover:text-white/80 transition-colors">
                  Portfolio
                </Link>
                <Link href="/#about" className="text-white text-lg hover:text-white/80 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-white text-lg hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

