"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TRUSTED_UNIVS = [
  { name: "광운대", src: "/icons/univ/kwangwoon.png" },
  { name: "한양대", src: "/icons/univ/hanyang.png" },
  { name: "서울과기대", src: "/icons/univ/seoul_national_science.png" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="firsty-container relative z-10 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="firsty-display max-w-4xl"
          >
            축제를 <span className="text-[#FFBF0B]">더 재미있게,</span>
            <br />
            추억이 더 빛이나도록.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="firsty-lead mt-6 max-w-2xl"
          >
            실시간 부스 예약부터 주문, 인터랙티브 테이블 게임까지.
            <br className="hidden md:block" />
            축제랑과 더 행복한 대학 생활의 추억을 함께해요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link href="/contact" className="firsty-cta">
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
            </Link>
            <Link href="/about" className="firsty-cta-ghost">
              서비스 둘러보기
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            <div className="flex -space-x-2">
              {TRUSTED_UNIVS.map((u) => (
                <div
                  key={u.name}
                  className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-gray-100 shadow-pill"
                >
                  <Image
                    src={u.src}
                    alt={u.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-[#11153F]">전국 대학 축제</span>가
              축제랑과 함께하고 있어요
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="firsty-card mt-20 overflow-hidden md:mt-24"
        >
          <div className="relative h-[280px] w-full md:h-[440px]">
            <Image
              src="/images/festival_1.webp"
              alt="축제랑 미리보기"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11153F]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 md:bottom-8 md:left-8 md:right-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#11153F] backdrop-blur-md">
                  실시간 웨이팅
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#11153F] backdrop-blur-md">
                  QR 주문
                </span>
                <span className="rounded-full bg-[#FFD43A]/95 px-3 py-1 text-xs font-bold text-[#11153F] backdrop-blur-md">
                  부스 랭킹
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FFD43A]/15 blur-[140px]" />
    </section>
  );
}
