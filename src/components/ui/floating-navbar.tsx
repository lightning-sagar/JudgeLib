"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", link: "/" },
  { name: "Microservice", link: "/microservice" },
  { name: "NPM Library", link: "/npm" },
  { name: "Docs", link: "/docs" },
]

export const FloatingNav = ({ className }: { className?: string }) => {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false)
        } else {
          setVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-gray-200 dark:border-white/[0.2] rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg z-[5000] px-6 py-3 items-center justify-center space-x-4",
          className,
        )}
      >
        <Link href="/" className="text-xl font-bold text-gray-900 mr-4">
          Judge<span className="text-orange-500">Lib</span>
        </Link>
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-3 py-2 rounded-full transition-colors",
              pathname === navItem.link && "text-orange-500",
            )}
          >
            <span className="block sm:hidden">{navItem.name}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {pathname === navItem.link && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute inset-0 bg-orange-100 rounded-full -z-10"
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                }}
              />
            )}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
