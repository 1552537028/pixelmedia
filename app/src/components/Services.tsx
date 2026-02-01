"use client";

import { title } from "process";
import { Carousel } from "../ui/Service";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Social Media Management (Instagram, Facebook & more)",
      src: "https://i.pinimg.com/736x/5a/6a/96/5a6a96d046c84ebfd42fd9e3f08ceb21.jpg",
    },      
    {
      title: "Professional Videography & Photography",
      src: "https://i.pinimg.com/1200x/63/41/13/63411320b625d58054e696a55e8d65f4.jpg",
    },
    {
      title: "High-Quality Video Editing & Reels Creation",
      src: "https://i.pinimg.com/736x/2e/57/2d/2e572d2d05087efa9e03bc14696aae21.jpg",
    },
    {
      title: "Meta Ads (Facebook & Instagram Ads)",
      src: "https://i.pinimg.com/736x/66/31/da/6631dacb8856e9ac18212789e8cdd674.jpg",
    },
    {
      title: "Search Engine Optimization (SEO, SEM Services)",
      src: "https://i.pinimg.com/1200x/8d/0f/45/8d0f457811294a4e1993fea47335c602.jpg",
    },
    {
      title: "Website Design & Development",
      src: "https://i.pinimg.com/736x/4b/ea/e2/4beae20cd7b5b44d1ed20b8f808d9a5d.jpg",
    },
    {
      title: "Brand Strategy & Digital Positioning",
      src: "https://i.pinimg.com/736x/1c/53/5e/1c535ece9f13e52b19c2a9bc27374e63.jpg",
    },
    {
      title: "Content Planning & Script Writing",
      src: "https://i.pinimg.com/736x/81/8b/f5/818bf5127a0c9bcd2e557add27a60630.jpg",
    },
    {
      title: "Creative Ad Campaigns",
      src: "https://i.pinimg.com/736x/bd/c2/a0/bdc2a01017ca3dc942dad1dff7356535.jpg",
    },
    {
      title: "Analytics, Insights & Performance Reporting",
      src: "https://i.pinimg.com/1200x/81/38/fb/8138fbd86197f17374d4a40a4eabbcf4.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
