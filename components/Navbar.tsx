"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      "
    >
      {/* Backdrop */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
          backdrop-blur-md
          border-b
          border-white/10
        "
      />

      {/* Content */}
      <nav
        className="
          relative
          flex
          items-center
          justify-between

          px-6
          md:px-12
          lg:px-16

          h-[84px]
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-14">

          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
              group
            "
          >
            {/* Icon */}
            <div
              className="
                relative
                flex
                items-center
                justify-center

                w-11
                h-11

                rounded-full

                border
                border-[#7FFFD4]/60

                bg-white/5
                backdrop-blur-sm

                shadow-[0_0_30px_rgba(127,255,212,0.18)]

                transition-all
                duration-300

                group-hover:scale-105
              "
            >
              <span
                className="
                  text-white
                  text-lg
                  font-black
                  tracking-tight
                "
              >
                F
              </span>
            </div>

            {/* Text */}
            <div className="leading-none">
              <p
                className="
                  text-white
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  opacity-70
                  mb-1
                "
              >
                Visit
              </p>

              <h1
                className="
                  text-white
                  text-2xl
                  font-black
                  tracking-tight
                "
              >
                Fate
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-10
            "
          >
            {[
              "Discover",
              "Eat & Drink",
              "Events",
              "Stay",
              "Explore",
            ].map((item) => (
              <Link
                key={item}
                href="/"
                className="
                  group
                  relative

                  text-white/75
                  text-[13px]
                  uppercase
                  tracking-[0.18em]
                  font-medium

                  hover:text-white

                  transition-colors
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2

                    h-[2px]
                    w-0

                    bg-[#7FFFD4]

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button
            className="
              hidden
              md:flex

              items-center
              justify-center

              w-11
              h-11

              rounded-full

              border
              border-white/15

              bg-white/5
              backdrop-blur-sm

              text-white/80

              hover:bg-white/10
              hover:text-white

              transition-all
            "
          >
            <Search size={18} />
          </button>

          {/* CTA */}
          <button
            className="
              hidden
              md:flex

              items-center
              justify-center

              px-6
              h-11

              rounded-full

              bg-[#20B2AA]
              text-white

              text-[12px]
              font-bold
              uppercase
              tracking-[0.18em]

              hover:bg-[#26c8bf]

              shadow-[0_0_25px_rgba(32,178,170,0.35)]

              transition-all
              duration-300
            "
          >
            Plan Your Visit
          </button>

          {/* Mobile Menu */}
          <button
            className="
              flex
              lg:hidden

              items-center
              justify-center

              w-11
              h-11

              rounded-full

              border
              border-white/15

              bg-white/5

              text-white

              hover:bg-white/10

              transition-all
            "
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}