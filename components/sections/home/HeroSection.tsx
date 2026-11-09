"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#faf8f3]">
      {/* Parallax Dubai background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/Golden Hour Curves by the Water.png"
          alt=""
          fill
          className="object-cover object-center opacity-85 saturate-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3]/95 via-[#faf8f3]/70 to-[#faf8f3]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f3] via-transparent to-transparent" />
      </motion.div>

      {/* Content fades out as you scroll */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 flex flex-col gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-[10px] font-semibold tracking-widest text-[#162056] uppercase shadow-sm w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d1740]" />
          Private investment firm | Dubai, UAE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[72px] font-bold text-[#0f1719] tracking-tight leading-[1.05] max-w-3xl"
        >
          Building long-term<br />value through{" "}
          <em className="not-italic text-[#c9a84c]">strategic</em><br />investments.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-sm sm:text-base text-[#4a5558] max-w-lg leading-relaxed"
        >
          We work with businesses through strategic investments, partnerships and active participation in growth, across borders and across stages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link href="/investment-focus" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,#8b6a14,#c9a84c,#e8d4a0)] text-[#0d1740] hover:opacity-90 transition-all shadow-sm">
            Explore our focus
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" /></svg>
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-full text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-200/90 shadow-sm transition-all">
            Make an enquiry
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-6 text-xs text-neutral-500"
        >
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />Dubai, UAE</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />Long-term capital</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />Global perspective</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-auto pt-10"
        >
          <Link href="#perspective" className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors">
            Scroll to discover
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" /></svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
