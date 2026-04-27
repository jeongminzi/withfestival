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

const RANK_BADGE_TONE = [
  "bg-[#FFD43A] text-[#11153F]",
  "bg-[#11153F] text-white",
  "bg-gray-100 text-gray-600",
];

function formatNumber(value: string) {
  return value;
}

export default function BoothRankingPage() {
  const topThree = RANKING_DATA.slice(0, 3);
  const others = RANKING_DATA.slice(3);

  return (
    <main className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="firsty-container relative px-5 md:px-8">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <h1 className="firsty-display max-w-3xl">
            지금 가장 핫한
            <br />
            <span className="text-[#FFBF0B]">대학 부스 랭킹</span>
          </h1>
          <p className="firsty-lead mt-5 max-w-xl">
            실시간 누적 매출을 기준으로 랭킹이 자동 집계돼요.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {topThree.map((booth, index) => (
            <motion.div
              key={booth.name}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, type: "spring" }}
              className={`firsty-card relative flex flex-col items-center p-6 text-center md:p-8 ${
                booth.rank === 1
                  ? "md:-translate-y-4 border-[#FFD43A]/40 shadow-card-hover"
                  : ""
              }`}
            >
              <span
                className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold ${RANK_BADGE_TONE[index]}`}
              >
                {booth.rank}위
              </span>

              <div className="relative mt-3 mb-4 h-16 w-16 overflow-hidden rounded-full border border-gray-100 bg-gray-50 shadow-pill md:h-20 md:w-20">
                <Image
                  src={booth.logoUrl}
                  alt={booth.university}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              <h3 className="text-lg font-bold tracking-tight text-[#11153F] md:text-xl">
                {booth.name}
              </h3>
              <p className="mt-1.5 break-keep text-sm text-gray-500">
                {booth.university} · {booth.affiliation}
              </p>

              <div className="mt-5 flex w-full items-center justify-center rounded-2xl bg-gray-100 px-4 py-3">
                <span className="font-mono text-base font-bold text-[#11153F] md:text-lg">
                  {formatNumber(booth.revenue)}
                </span>
                <span className="ml-1 text-sm font-medium text-gray-500">
                  원
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl md:mt-20">
          <div className="mb-5 flex items-center justify-between px-1">
            <h2 className="firsty-title text-2xl">전체 랭킹</h2>
            <span className="text-xs font-medium text-gray-400">
              실시간 업데이트 중
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="firsty-card divide-y divide-gray-100 overflow-hidden p-2"
          >
            {others.map((booth) => (
              <div
                key={booth.name}
                className="flex items-center justify-between gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-gray-100 md:px-5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-black text-gray-400">
                    {booth.rank}
                  </div>

                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-50">
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
