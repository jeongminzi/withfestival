"use client";

import { motion } from "framer-motion";

export default function FrequentAskedQuestions() {
  const faqs = [
    {
      q: "축제랑은 어떤 서비스인가요?",
      a: "부스 예약 웨이팅 주문 관리 랭킹까지 한 번에 제공하는 올인원 스마트 축제 운영 솔루션이에요",
    },
    {
      q: "총학생회나 축제 기획단만 도입할 수 있나요?",
      a: "전체 축제는 물론 개별 학과 주점이나 동아리 부스 단위로도 도입할 수 있어요",
    },
    {
      q: "부스 운영용 기기가 따로 필요한가요?",
      a: "장비 없이도 괜찮아요 갖고 있는 스마트폰이나 태블릿 웹 브라우저만으로 관리자 기능을 쓸 수 있어요",
    },
    {
      q: "방문객도 앱을 설치해야 하나요?",
      a: "앱 없이 바로 쓸 수 있어요 테이블에 놓인 QR을 스캔하면 모바일 웹에서 웨이팅 등록과 주문을 할 수 있어요",
    },
    {
      q: "실시간 부스 랭킹은 어떤 기준인가요?",
      a: "POS와 모바일 주문에서 쌓이는 실시간 누적 매출로 매겨요 일정 시간마다 랭킹 보드에 반영해요",
    },
    {
      q: "도입 비용은 어떻게 되나요?",
      a: "도입 규모와 필요 기능에 맞춰 요금제를 유연하게 맞춰드려요 ‘도입 문의하기’로 연락해주면 견적을 안내해요",
    },
    {
      q: "축제 중 문제가 생기면 어떻게 하나요?",
      a: "축제 기간에는 CS팀이 상시 대기해요 바로 원격으로 지원해서 운영이 매끄럽게 이어지도록 도와드려요",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="firsty-container relative z-10 px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="firsty-display"
              >
                자주 묻는
                <br />
                <span className="text-[#FFBF0B]">질문</span>
              </motion.h2>
              <p className="firsty-lead mt-6 max-w-md">
                더 궁금한 점은 도입 문의로 보내주세요
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 md:p-7"
              >
                <p className="break-keep text-sm leading-relaxed text-[#11153F]/80">
                  <span className="mr-1 text-sm font-bold text-[#FFBF0B]">
                    ※ 유의사항
                  </span>
                  축제랑은 대학 축제 운영을 돕는 스마트 플랫폼이에요 각 부스에서
                  이뤄지는 주류 판매 위생 관리 실 결제 과정의 법적 권한과 책임은
                  운영 주체에게 있어요
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="firsty-card divide-y divide-gray-100 overflow-hidden">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-gray-100 md:px-8 md:py-6">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 font-mono text-xs font-bold text-gray-400 transition-colors group-open:bg-[#FFD43A] group-open:text-[#11153F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="break-keep text-base font-bold leading-snug text-[#11153F] md:text-lg">
                        {faq.q}
                      </span>
                    </div>
                    <span className="shrink-0 text-gray-300 transition-all duration-300 group-open:rotate-45 group-open:text-[#11153F]">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path
                          d="M12 5v14M5 12h14"
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
          </div>
        </div>
      </div>
    </section>
  );
}
