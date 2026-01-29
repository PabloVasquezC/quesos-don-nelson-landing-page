"use client"

import { motion, useInView, UseInViewOptions, HTMLMotionProps } from "framer-motion"
import { useRef } from "react"

interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  viewport?: UseInViewOptions
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 30,
  once = true,
  viewport,
  className,
  ...props
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-50px", ...viewport })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
