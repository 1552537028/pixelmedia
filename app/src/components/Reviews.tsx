"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/Infinite-movingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We’re extremely happy with the marketing support from Golden Pixel Media. Their creative approach, consistent execution, and understanding of our brand have helped us reach the right audience and improve our visibility. Truly one of the best marketing teams we’ve worked with.",
    name: "Figaro’s Pizza",
    title: "Team Figaro’s Pizza",
  },
  {
    quote:
      "Working with Golden Pixel Media has been a great experience for us at Ask Interiorz. Their photography and video shoots perfectly captured the detailing, textures, and finish of our interior projects. The visuals truly elevated our brand presentation and helped us showcase our work in a premium way. Highly impressed with their shoot quality and professionalism.",
    name: "Ask Interiorz",
    title: "Team Ask Interiorz",
  },
  {
    quote:
      "Partnering with Golden Pixel Media has been a valuable experience for Halcyon Pain Management Center. Their team understood the sensitivity of healthcare branding and delivered clean, professional visuals and content that clearly communicate trust and care. The overall presentation has helped us connect better with our patients and strengthen our brand presence.",
    name: "Halcyon Pain Management Center",
    title: "Team Halcyon Pain Management Center",
  },
];
