"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Caveat } from "next/font/google";
import { urlFor } from "@/lib/sanity/image";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"] });

/* ─── Animated sketchy underline beneath the main heading ───────────────────── */
function TitleUnderline() {
  return (
    <svg
      viewBox="0 0 520 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[520px] mx-auto mt-1 block"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M4 9 C 40 4, 90 11, 140 7 C 190 3, 240 10, 290 6 C 340 2, 390 9, 440 6 C 470 4, 500 8, 516 7"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}

/* ─── Rough hand-drawn rectangle border for the active tab ──────────────────── */
function SketchBox() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 5 7 C 22 3, 58 2, 95 5 C 97 22, 98 58, 96 95 C 72 97, 32 98, 4 96 C 2 74, 3 28, 5 7 Z"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ─── Wobbly underline that draws in when a card is hovered ─────────────────── */
function CardUnderline({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 200 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 w-full"
      style={{ bottom: "-5px", height: "8px" }}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 5 C 28 2, 58 7, 90 4 C 122 1, 152 7, 178 4 C 188 3, 196 5, 198 4"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: visible ? 1 : 0 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ─── Individual card — needs local hover state for the sketch underline ────── */
function Card({ card }: { card: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/${card?.slug?.current || "#"}`}
      className="group block bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE */}
      <div className="relative h-[520px] overflow-hidden">
        {card?.image && (
          <Image
            src={urlFor(card.image).url()}
            alt={card.title}
            fill
            className="
              object-cover transition-all duration-700
              scale-100 brightness-[0.92]
              group-hover:scale-105 group-hover:brightness-100
            "
          />
        )}
        <div className="
          absolute inset-0 bg-black/5
          group-hover:bg-black/0 transition-all duration-500
        " />
      </div>

      {/* TEXT BAR */}
      <div className="bg-white px-5 py-4 border-t border-[#e8e8e8]">
        <span
          className={`
            relative inline-block
            text-[#111111] text-[28px] leading-tight font-bold
            ${caveat.className}
          `}
        >
          {card?.title}
          <CardUnderline visible={hovered} />
        </span>
      </div>
    </Link>
  );
}

/* ─── Main section ──────────────────────────────────────────────────────────── */
export default function DiscoverSection({ data }: any) {
  const categories = data?.categories || [];
  const [active, setActive] = useState(0);
  const currentCategory = categories[active];

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + categories.length) % categories.length);
  const handleNext = () =>
    setActive((prev) => (prev + 1) % categories.length);

  return (
    <section className={`bg-white py-10 overflow-hidden ${caveat.className}`}>
      <div className="max-w-[1900px] mx-auto">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="px-6 md:px-12 mb-8">
          <div className="relative flex items-start justify-center">

            {/* Centered block */}
            <div className="text-center">

              {/* Main heading */}
              <h2 className="
                text-[#111111] font-bold tracking-tight leading-none
                text-5xl md:text-[4.5rem]
              ">
                {data?.heading || "The Fate Experience"}
              </h2>

              {/* Animated hand-drawn underline */}
              <TitleUnderline />

              {/* Subheading */}
              <p className="text-[#555555] text-[1.05rem] mt-4 max-w-xl mx-auto leading-snug">
                {data?.subheading ||
                  "Find attractions, restaurants, entertainment, and experiences throughout Fate."}
              </p>

              {/* CATEGORY TABS */}
              <div className="flex flex-wrap justify-center gap-3 mt-5">
                {categories.map((category: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`
                      relative text-[1rem] font-bold tracking-wide
                      px-4 py-[6px] transition-colors duration-200
                      ${active === index
                        ? "text-[#111111]"
                        : "text-[#111111]/45 hover:text-[#111111]"
                      }
                    `}
                  >
                    {/* Sketchy box border that draws in when active */}
                    <AnimatePresence>
                      {active === index && (
                        <motion.span
                          key="sketch-box"
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <SketchBox />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span className="relative z-10">{category?.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Explore button — floated top-right */}
            <div className="absolute right-0 top-0">
              <button className="
                text-[1rem] font-bold text-[#111111]
                px-5 py-3
                border border-[#111111]
                hover:bg-[#111111] hover:text-white
                transition-all duration-200 tracking-wide
                flex items-center gap-2
              ">
                Explore More →
              </button>
            </div>

          </div>
        </div>

        {/* ── IMAGE STRIP ─────────────────────────────────────────────────── */}
        <div className="relative">

          {/* LEFT ARROW */}
          {categories.length > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="
                absolute left-3 top-1/2 -translate-y-1/2 z-10
                bg-white border border-[#cccccc] w-10 h-10
                flex items-center justify-center shadow-sm text-xl
                hover:bg-[#111111] hover:text-white hover:border-[#111111]
                transition-all duration-200
              "
            >
              ←
            </button>
          )}

          {/* RIGHT ARROW */}
          {categories.length > 1 && (
            <button
              onClick={handleNext}
              aria-label="Next"
              className="
                absolute right-3 top-1/2 -translate-y-1/2 z-10
                bg-white border border-[#cccccc] w-10 h-10
                flex items-center justify-center shadow-sm text-xl
                hover:bg-[#111111] hover:text-white hover:border-[#111111]
                transition-all duration-200
              "
            >
              →
            </button>
          )}

          {/* CARDS GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]"
            >
              {currentCategory?.cards?.map((card: any, index: number) => (
                <Card key={index} card={card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}