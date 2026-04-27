"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const RANKING_DATA = [
  {
    rank: 1,
    name: "주점은 어우야",
    university: "광운대",
    affiliation: "인공지능융합대학 총학생회",
    revenue: "1,542,000",
    logoUrl: "/icons/univ/kwangwoon.png",
  },
  {
    rank: 2,
    name: "일렉트로닉 파전",
    university: "한양대",
    affiliation: "중앙 댄스동아리 꾼",
    revenue: "1,410,000",
    logoUrl: "/icons/univ/hanyang.png",
  },
  {
    rank: 3,
    name: "경영인의 밤",
    university: "서울과기대",
    affiliation: "상경대학 연합",
    revenue: "1,285,000",
    logoUrl: "/icons/univ/seoul_national_science.png",
  },
  {
    rank: 4,
    name: "건축학개론 주막",
    university: "홍익대",
    affiliation: "건축도시대학 총학생회",
    revenue: "1,120,000",
    logoUrl: "/icons/univ/hongik.svg",
  },
  {
    rank: 5,
    name: "체대생의 불막창",
    university: "고려대",
    affiliation: "사범대학 체육교육과 학생회",
    revenue: "1,095,000",
    logoUrl: "/icons/univ/korea.svg",
  },
  {
    rank: 6,
    name: "화끈한 화학과",
    university: "서강대",
    affiliation: "자연과학부 연합",
    revenue: "980,000",
    logoUrl: "/icons/univ/sogang.svg",
  },
  {
    rank: 7,
    name: "미대오빠 칵테일",
    university: "서울대",
    affiliation: "미술대학 조소과 학생회",
    revenue: "840,000",
    logoUrl: "/icons/univ/snu.svg",
  },
];

export default function BoothRankingPage() {
  const champion = RANKING_DATA[0];
  const runners = RANKING_DATA.slice(1, 3);
  const others = RANKING_DATA.slice(3);

  return (
    <main className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="firsty-container relative px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h1 className="firsty-display max-w-3xl">
            지금 가장 핫한
            <br />
            <span className="text-[#FFBF0B]">대학 부스 랭킹</span>
          </h1>
          <p className="firsty-lead max-w-sm md:text-right">
            실시간 누적 매출로 매기는 랭킹
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {champion && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="firsty-card relative overflow-hidden bg-[#11153F] p-8 md:p-10 lg:col-span-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FFD43A]/30 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-[#FFD43A]/15 blur-[120px]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD43A] px-3 py-1 text-xs font-bold text-[#11153F]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#11153F]" />
                  1위
                </span>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                    <Image
                      src={champion.logoUrl}
                      alt={champion.university}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      {champion.university}
                    </p>
                    <p className="text-sm font-medium text-white/80">
                      {champion.affiliation}
                    </p>
                  </div>
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {champion.name}
                </h3>
                <div className="mt-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                      누적 매출
                    </p>
                    <p className="mt-2 font-mono text-3xl font-bold text-[#FFD43A] md:text-4xl">
                      {champion.revenue}
                      <span className="ml-1 text-base font-medium text-white/70">
                        원
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 gap-5 lg:col-span-5">
            {runners.map((booth, index) => (
              <motion.div
                key={booth.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="firsty-card relative overflow-hidden p-6 md:p-7"
              >
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                    index === 0
                      ? "bg-[#11153F] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {booth.rank}위
                </span>
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-100">
                    <Image
                      src={booth.logoUrl}
                      alt={booth.university}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold text-[#11153F]">
                      {booth.name}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      {booth.university} · {booth.affiliation}
                    </p>
                  </div>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="font-mono text-xl font-bold text-[#11153F]">
                    {booth.revenue}
                    <span className="ml-1 text-xs font-medium text-gray-400">
                      원
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <div className="mb-5 flex items-center justify-between px-1">
            <h2 className="text-2xl font-bold tracking-tight text-[#11153F] md:text-3xl">
              전체 랭킹
            </h2>
            <span className="text-xs font-medium text-gray-400">
              실시간 업데이트
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="firsty-card divide-y divide-gray-100 overflow-hidden p-2"
          >
            {others.map((booth) => (
              <div
                key={booth.name}
                className="flex items-center justify-between gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-gray-100 md:px-5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 font-mono text-sm font-black text-gray-400">
                    {booth.rank}
                  </div>
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-100">
                    <Image
                      src={booth.logoUrl}
                      alt={booth.university}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-bold text-[#11153F] md:text-base">
                      {booth.name}
                    </span>
                    <span className="mt-0.5 truncate text-xs text-gray-500 md:text-sm">
                      {booth.university} · {booth.affiliation}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-sm font-bold text-[#11153F] md:text-base">
                  {booth.revenue}
                  <span className="ml-0.5 font-sans text-xs font-medium text-gray-400">
                    원
                  </span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 top-1/3 -z-0 h-[440px] w-[440px] rounded-full bg-[#FFD43A]/12 blur-[140px]" />
    </main>
  );
}
