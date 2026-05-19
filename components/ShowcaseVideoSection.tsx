"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/* ────────────────────────────────────────────────────────────────────────── */
/* Sketch Elements */
/* ────────────────────────────────────────────────────────────────────────── */

function SketchEyebrow() {
  return (
    <svg
      viewBox="0 0 52 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-2 shrink-0"
    >
      <motion.path
        d="M2 5 C 10 3, 22 6, 34 4 C 42 3, 48 5, 50 4"
        stroke="#20B2AA"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </svg>
  );
}

function SketchWordUnderline({
  color = "#20B2AA",
}: {
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 260 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 w-full"
      style={{ bottom: "-4px", height: "10px" }}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M3 6 C 35 3, 80 8, 130 5 C 180 2, 225 7, 257 5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
    </svg>
  );
}

function SketchArrow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-7 h-3.5 ${className}`}
    >
      <path
        d="M2 7 C 9 6.5, 18 7, 27 7 M 21 2.5 C 24 4.5, 27 7, 21 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SketchStatDivider() {
  return (
    <svg
      viewBox="0 0 6 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block w-[5px] h-14 self-center mx-auto"
      preserveAspectRatio="none"
    >
      <path
        d="M3 2 C 2 14, 4 28, 3 42 C 2 50, 3 56, 3 58"
        stroke="rgba(245,222,179,0.15)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Stat Item */
/* ────────────────────────────────────────────────────────────────────────── */

function StatItem({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="relative"
    >
      {/* Splash glow */}
      <div className="absolute -top-5 left-0 w-20 h-20 bg-[#20B2AA]/10 blur-2xl rounded-full" />

      <h3
        className="relative font-bold leading-none mb-1"
        style={{
          color: "rgba(245,222,179,0.95)",
          fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
        }}
      >
        {number}
      </h3>

      <p
        className="relative font-semibold"
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "var(--sketch-sm)",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { number: "150+", label: "Restaurants & Cafés" },
  { number: "80+", label: "Annual Events" },
  { number: "40+", label: "Family Attractions" },
  { number: "24/7", label: "City Experiences" },
];

/* ────────────────────────────────────────────────────────────────────────── */
/* Main Section */
/* ────────────────────────────────────────────────────────────────────────── */

export default function ShowcaseVideoSection() {
  return (
    <section
      className={`relative h-[92vh] overflow-hidden ${caveat.className}`}
    >

      {/* ───────────────── Video Background ───────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
      >
        <source
          src="/videos/fate-showcase.mp4"
          type="video/mp4"
        />
      </video>

      {/* ───────────────── Dark Cinematic Overlay ───────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/35" />

      {/* ───────────────── Splash Color Overlay ───────────────── */}
      <div className="absolute inset-0 overflow-hidden">

        {/* teal splash */}
        <div className="absolute top-[-10%] left-[-8%] w-[420px] h-[420px] bg-[#20B2AA]/20 blur-3xl rounded-full" />

        {/* orange splash */}
        <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] bg-[#CC4125]/20 blur-3xl rounded-full" />

        {/* center glow */}
        <div className="absolute top-[30%] left-[45%] w-[350px] h-[350px] bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* ───────────────── Vignette ───────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.58)_100%)]" />

      {/* ───────────────── Floating Decorative Lines ───────────────── */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 hidden lg:block opacity-30"
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path
            d="M10 90 C 45 30, 120 30, 170 90"
            stroke="#20B2AA"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 120 C 60 70, 120 75, 165 125"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ───────────────── Content ───────────────── */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-[12vw]">

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl relative"
        >

          {/* subtle splash behind content */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#20B2AA]/10 blur-3xl rounded-full" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-7 relative">
            <SketchEyebrow />

            <p
              className="uppercase font-semibold tracking-[0.3em]"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "var(--sketch-xs)",
              }}
            >
              Experience Fate
            </p>
          </div>

          {/* Heading */}
          <h2
            className="text-white font-bold leading-[1.0] mb-7 relative"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
            }}
          >
            Discover the{" "}
            <span className="relative inline-block">
              Energy,
              <SketchWordUnderline color="#20B2AA" />
            </span>

            <br />

            Culture &amp; Flavor
            <br />
            of Fate
          </h2>

          {/* Description */}
          <p
            className="leading-relaxed max-w-2xl mb-10"
            style={{
              color: "rgba(255,255,255,0.74)",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            }}
          >
            Explore local restaurants, live events, family attractions,
            shopping districts, nightlife, and unforgettable experiences
            across the city.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            {/* Primary Button */}
            <Link
              href="/discover"
              className="
                inline-flex items-center justify-center gap-2
                h-14 px-8
                font-bold tracking-wide
                transition-all duration-300
                group
                relative overflow-hidden
              "
              style={{
                background:
                  "linear-gradient(135deg,#20B2AA 0%, #1cc8be 100%)",
                color: "white",
                fontSize: "var(--sketch-sm)",
                boxShadow: "0 12px 40px rgba(32,178,170,0.35)",
              }}
            >

              {/* moving splash highlight */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute -left-10 top-0 h-full w-16 bg-white/20 blur-xl rotate-12 group-hover:left-[120%] transition-all duration-1000" />
              </span>

              <span className="relative z-10">
                Explore Fate
              </span>

              <SketchArrow className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/events"
              className="
                inline-flex items-center justify-center gap-2
                h-14 px-8
                font-bold tracking-wide
                backdrop-blur-md
                transition-all duration-300
                group
                relative overflow-hidden
              "
              style={{
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.92)",
                fontSize: "var(--sketch-sm)",
              }}
            >

              {/* glass splash */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              <span className="relative z-10">
                View Events
              </span>

              <SketchArrow className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>
        </motion.div>
      </div>

      {/* ───────────────── Bottom Stats Bar ───────────────── */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          backdrop-blur-xl
          border-t border-white/10
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(to right, rgba(24,30,35,0.94), rgba(36,45,50,0.94))",
        }}
      >

        {/* splash gradient */}
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-0 w-40 h-40 bg-[#20B2AA]/10 blur-3xl rounded-full" />
          <div className="absolute right-[15%] bottom-0 w-40 h-40 bg-[#CC4125]/10 blur-3xl rounded-full" />
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-7 gap-0 px-6 md:px-16 py-8 items-center">
          {stats.map((stat, i) => (
            <>
              <StatItem
                key={stat.number}
                number={stat.number}
                label={stat.label}
                delay={i * 0.1}
              />

              {i < stats.length - 1 && (
                <SketchStatDivider key={`div-${i}`} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}