"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    id: "qr-order",
    title: "QR 메뉴판으로 주문 관리",
    description:
      "테이블에 비치된 QR코드 하나로 방문객이 직접 메뉴를 확인하고 주문해요. 바쁜 축제 현장에서 주문 누락과 대기 시간을 확 줄여줍니다.",
    accent: "bg-white",
  },
  {
    id: "digital-reservation",
    title: "손쉬운 디지털 예약 관리",
    description:
      "번거로운 종이 명부 대신 스마트폰으로 웨이팅을 관리하세요. 입장 순서가 되면 고객의 메시지로 바로 알려드려요!",
    accent: "bg-white",
  },
  {
    id: "love-alarm",
    title: "좋아하면 울리는 기능",
    description:
      "마음에 드는 테이블에 호감을 표현하거나, 합석을 제안해 보세요. 캠퍼스 축제만의 두근거리는 낭만과 재미를 더해줄거에요.",
    accent: "bg-white",
  },
  {
    id: "ai-management",
    title: "AI 자동 메뉴판 & 부스 관리",
    description:
      "판매할 메뉴 이름만 입력하면 AI가 먹음직스러운 설명과 메뉴판을 자동으로 완성해 줘요. 복잡한 부스 세팅도 1분이면 끝납니다.",
    accent: "bg-white",
  },
];

export default function FeaturePromotion() {
  return (
    <section className="firsty-section relative w-full overflow-hidden bg-white">
      <div className="firsty-container">
        <div className="mb-14 flex flex-col items-start md:mb-20 md:items-center md:text-center">
          <h2 className="firsty-display max-w-3xl">
            이런 축제, 이런 행사에
            <br />
            <span className="text-[#FFBF0B]">딱이에요.</span>
          </h2>
          <p className="firsty-lead mt-5 max-w-2xl">
            축제랑은 부스 운영의 모든 순간을 더 가볍고 더 즐겁게 만들어드려요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="firsty-card relative flex min-h-[340px] flex-col overflow-hidden p-7 md:min-h-[400px] md:p-9"
            >
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-[#11153F] md:text-[28px]">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-[90%] break-keep text-base leading-relaxed text-gray-500">
                {feature.description}
              </p>

              <div className="mt-8 flex flex-1 items-end">
                <div
                  className={`relative h-40 w-full overflow-hidden rounded-2xl ${feature.accent} border border-gray-100 md:h-52`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#FFD43A22,transparent_60%)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
