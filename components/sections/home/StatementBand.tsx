"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StatementBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative py-28 text-white overflow-hidden">
      {/* Parallax Dubai image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: bgY,
          backgroundImage: "url('/Dubai Skyline and Coastal Panorama.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale: 1.2,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1740]/75 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.3] tracking-tight"
        >
          &ldquo;We look beyond the horizon of the next quarter to build value that lasts.&rdquo;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-sm text-[#c9a84c] font-medium tracking-widest uppercase"
        >
          SADE INVESTMENT | Dubai
        </motion.p>
      </div>
    </section>
  );
}
