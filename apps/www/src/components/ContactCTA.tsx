"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="firsty-section relative w-full overflow-hidden bg-white"
    >
      <div className="firsty-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="firsty-card relative overflow-hidden bg-[#11153F] p-10 text-center md:p-16"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl"
            style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            성공적인 축제의 시작
            <br />
            <span className="text-[#FFD43A]">축제랑</span>과 함께 만들어요
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            기획단의 무거운 짐을 덜고 추억을 함께 만들어요
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="mailto:u.lento25@gmail.com"
              className="firsty-cta-yellow"
            >
              도입 문의하기
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 md:text-base"
            >
              서비스 더 알아보기
            </a>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#FFD43A]/25 blur-[120px]" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#FFD43A]/15 blur-[120px]" />
        </motion.div>
      </div>
    </section>
  );
}
