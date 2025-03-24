"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen flex-col"
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

