"use client";

import { motion } from "framer-motion";

export default function FrequentAskedQuestions() {
  const faqs = [
    {
      q: "축제랑은 어떤 서비스인가요?",
      a: "축제랑은 대학 축제의 부스 예약, 실시간 웨이팅, 주문 내역 관리부터 방문객들의 텐션을 높이는 실시간 부스 랭킹까지 제공하는 '올인원 스마트 축제 운영 솔루션'입니다.",
    },
    {
      q: "총학생회나 축제 기획단만 도입할 수 있나요?",
      a: "아닙니다. 총학생회 차원의 전체 축제 도입은 물론, 개별 학과 주점이나 동아리 부스 단위로도 서비스 도입 및 사용이 가능합니다.",
    },
    {
      q: "부스 운영을 위한 기기(포스기, 태블릿)가 별도로 필요한가요?",
      a: "아니요, 별도의 장비 렌탈 없이 운영진이 기존에 보유하신 스마트폰이나 태블릿 웹 브라우저만으로도 완벽하게 관리자 기능을 이용하실 수 있습니다.",
    },
    {
      q: "부스 방문객들도 앱을 설치해야 하나요?",
      a: "방문객은 별도의 앱 설치가 전혀 필요 없습니다. 부스 입구 또는 테이블에 비치된 QR 코드를 스마트폰 카메라로 스캔하면 모바일 웹에서 즉시 웨이팅 등록 및 주문이 가능합니다.",
    },
    {
      q: "실시간 대박 부스 랭킹은 어떻게 산정되나요?",
      a: "각 부스의 포스(POS) 시스템 또는 모바일 주문에서 발생하는 '실시간 누적 주문액(매출)'을 기준으로 자동 집계되며, 일정 시간 단위로 랭킹 보드에 투명하게 반영됩니다.",
    },
    {
      q: "서비스 도입 비용은 어떻게 되나요?",
      a: "도입 규모(단일 부스, 학과 연합, 전체 축제 등)와 필요 기능에 따라 유연한 맞춤형 요금제가 적용됩니다. 상단의 '도입 문의하기'를 통해 연락해주시면 예산에 맞춘 최적의 견적을 안내해 드립니다.",
    },
    {
      q: "축제 중 시스템에 문제가 생기면 어떻게 하나요?",
      a: "축제 기간 동안에는 긴급 대응 CS팀이 상시 대기하며, 문제 발생 시 즉각적인 원격 지원을 통해 운영에 차질이 없도록 밀착 지원합니다.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="firsty-container relative z-10 px-5 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 flex flex-col items-center text-center md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="firsty-display"
            >
              자주 묻는 질문
            </motion.h2>
            <p className="firsty-lead mt-5 max-w-xl">
              가장 많이 받는 질문들을 모았어요. 더 궁금한 점은 도입 문의로
              남겨주세요.
            </p>
          </div>

          <div className="firsty-card divide-y divide-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-[#F8F9FB] md:px-8 md:py-6">
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F8F9FB] font-mono text-xs font-bold text-gray-400 transition-colors group-open:bg-[#FFD43A] group-open:text-[#11153F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="break-keep text-base font-bold leading-snug text-[#11153F] md:text-lg">
                      {faq.q}
                    </span>
                  </div>
                  <span className="shrink-0 text-gray-300 transition-all duration-300 group-open:rotate-180 group-open:text-[#11153F]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="px-6 pb-6 md:px-8 md:pb-7">
                  <div className="ml-11 break-keep text-sm leading-relaxed text-gray-500 md:text-base">
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 rounded-3xl border border-[#FFD43A]/30 bg-[#FFF9E6] p-6 md:p-7"
          >
            <p className="break-keep text-sm leading-relaxed text-[#11153F]/80">
              <span className="mr-1 text-sm font-bold text-[#FFBF0B]">
                ※ 유의사항
              </span>
              축제랑은 대학 축제 운영을 돕는 스마트 플랫폼입니다. 각 부스 내에서
              발생하는 주류 판매, 위생 관리 및 실 결제 과정에 대한 법적 권한과
              책임은 해당 부스를 운영하는 주체(학과, 학생회 등)에게 있습니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
