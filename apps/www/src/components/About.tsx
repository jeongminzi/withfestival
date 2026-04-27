"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="firsty-section relative w-full overflow-hidden bg-white"
    >
      <div className="firsty-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            className="firsty-eyebrow mb-5"
          >
            <span className="firsty-eyebrow-dot" />
            About 축제랑
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="firsty-display max-w-4xl"
          >
            복잡한 축제 운영은{" "}
            <span className="text-[#FFBF0B]">가볍게,</span>
            <br />
            참여의 즐거움은 더 크게.
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="firsty-lead mt-6 max-w-3xl whitespace-pre-line"
          >
            축제랑은 총학생회와 축제 기획단의 끝없는 고민과 밤샘에서
            출발했습니다.
            {"\n"}
            실시간 부스 웨이팅부터 방문객의 텐션을 올리는 실시간 랭킹 보드까지.
            {"\n"}
            가장 스마트한 운영 솔루션으로 모두가 온전히 즐길 수 있는 진짜 축제를
            만듭니다.
          </motion.p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD43A]/10 blur-[140px]" />
    </section>
  );
}
