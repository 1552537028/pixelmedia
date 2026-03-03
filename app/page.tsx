import React from "react";
import { SpotlightNewDemo } from "./src/ui/Spotlight";
import { InfiniteMovingCardsDemo } from "./src/components/Reviews";
import AboutUs from "./src/components/AboutUs";
import { BackgroundRippleEffect } from "./src/ui/background-ripple-effect";
import ContactUs from "./src/ui/ContactUs";
import Chatbot from "./src/components/Chatbot";
import { CarouselDemo } from "./src/components/Services";
export default function Home() {
  return (
    <div className="min-h-screen bg-black dark:bg-black text-black dark:text-white">
      <SpotlightNewDemo />
      <AboutUs />
      <center className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 dark:text-white">
          SERVICES
        </h2>
      </center>
      <CarouselDemo />
      <center className="mb-12 py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 dark:text-white">
          REVIEWS
        </h2>
      </center>
      <InfiniteMovingCardsDemo />
      <BackgroundRippleEffect />
      <center className="mb-5 mt-10 py-10 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 dark:text-white">
          CONTACT US
        </h2>
      </center>
      <ContactUs />

      <center className="mt-10">
        <h1 className="text-lg font-bold text-yellow-500 dark:text-white">
          FOLLOW US ON SOCIAL MEDIA
        </h1>
      </center>
      <center className="mt-10">
        <h1 className="text-2xl font-bold text-yellow-500 dark:text-white">
          Thanks for Visiting Our Website!
        </h1>
      </center>
      <center className="mt-10">
        <hr className="border-gray-300 dark:border-neutral-700 w-3/4 mx-auto" />
      </center>

      <center className="mb-10 mt-5 py-5 text-center">
        <h2 className="text-sm font-medium text-gray-500 dark:text-neutral-400">
          © 2026 GOLDEN PIXEL MEDIA . All rights reserved.
        </h2>
      </center>
      <Chatbot/>
    </div>
  );
}
