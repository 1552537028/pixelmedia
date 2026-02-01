"use client"
import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight-new"
import { BackgroundRippleEffect } from "./background-ripple-effect"

export function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-grid-white/[0.02] antialiased">
      <Spotlight />
      <BackgroundRippleEffect />

      {/* Top-right corner container */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
        <Image
          src="/logo.jpg"      // make sure this exists in /public
          alt="Profile image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-yellow-500 font-bold text-xl">
          Golden Pixel Media
        </span>
      </div>

      {/* Center heading */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-center text-yellow-500">
          BUILDING BRANDS THAT SPEAKS <span className="text-red-500">LOUDER</span>
        </h1>
      </div>
    </div>
  )
}
