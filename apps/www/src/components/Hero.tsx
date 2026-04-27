"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TRUSTED_UNIVS = [
  { name: "광운대", src: "/icons/univ/kwangwoon.png" },
  { name: "한양대", src: "/icons/univ/hanyang.png" },
  { name: "서울과기대", src: "/icons/univ/seoul_national_science.png" },
  { name: "홍익대", src: "/icons/univ/hongik.svg" },
  { name: "고려대", src: "/icons/univ/korea.svg" },
  { name: "서강대", src: "/icons/univ/sogang.svg" },
  { name: "서울대", src: "/icons/univ/snu.svg" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="firsty-container relative z-10 px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="firsty-display-xl"
            >
              축제는 <span className="text-[#FFBF0B]">재미있게</span>
              <br />
              추억은 빛나게
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="firsty-lead mt-8 max-w-xl"
            >
              부스 예약부터 주문 테이블 게임까지 한 번에
              <br className="hidden md:block" />
              축제랑과 더 행복한 캠퍼스 추억을 만들어요
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="firsty-card relative h-[360px] w-full overflow-hidden md:h-[480px] lg:h-full lg:min-h-[520px]">
              <Image
                src="/images/festival_1.webp"
                alt="축제랑 미리보기"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11153F]/80 via-[#11153F]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 md:bottom-8 md:left-8 md:right-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#11153F] backdrop-blur-md">
                    실시간 웨이팅
                  </span>
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#11153F] backdrop-blur-md">
                    QR 주문
                  </span>
                  <span className="rounded-full bg-[#FFD43A] px-3 py-1.5 text-xs font-bold text-[#11153F]">
                    부스 랭킹
                  </span>
                </div>
                <p className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  지금 캠퍼스에서 진행 중
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-gray-100 bg-white py-8 md:mt-28">
        <div className="firsty-container px-5 md:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
            전국 대학 축제와 함께해요
          </p>
        </div>
        <div className="relative flex">
          <div className="flex animate-marquee shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16">
            {[...TRUSTED_UNIVS, ...TRUSTED_UNIVS].map((u, idx) => (
              <div
                key={`${u.name}-${idx}`}
                className="flex shrink-0 items-center gap-3 opacity-70 transition-opacity hover:opacity-100"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={u.src}
                    alt={u.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="text-base font-bold text-[#11153F] md:text-lg">
                  {u.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#FFD43A]/12 blur-[160px]" />
    </section>
  );
}
