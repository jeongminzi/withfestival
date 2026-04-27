"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CASES = [
  {
    id: "case-1",
    univ: "K대학교",
    eventName: "가을 축제 주점",
    date: "2025. 09",
    title: "수백 명이 몰려도 주문을 매끄럽게 처리해요",
    description:
      "방문객은 자리에 앉아 QR코드로 메뉴를 담고 이체해요. 운영진은 태블릿 하나로 주문과 이체 내역을 확인하고 바로 조리를 시작해요. '번호팅' 같은 주점만의 특별한 이벤트를 메뉴판에 녹여서 방문객들의 호응도 폭발적이었어요.",
    tags: ["QR 전자메뉴판", "번호팅 이벤트 연동", "실시간 조리 관리"],
    imageUrl: "/images/cases/img_festival_2.png",
  },
  {
    id: "case-2",
    univ: "G대학교",
    eventName: "동아리의 밤 연합 부스",
    date: "2025. 09",
    title: "여러 단체가 모여도 정산과 관리는 하나처럼 매끄럽게",
    description:
      "산악부 등 여러 동아리가 연합해 운영하는 복잡한 환경에서도, 수기 장부나 종이 메뉴판 없이 스마트폰 하나로 주문을 깔끔하게 정리했어요. 선불 이체 확인부터 서빙 알림까지, 적은 인력으로도 운영을 매끄럽게 풀어낸 사례예요.",
    tags: ["연합 부스 운영", "선불 결제 자동화", "페이퍼리스"],
    imageUrl: "/images/cases/img_festival_1.jpeg",
  },
];

export default function FestivalCaseStudy() {
  return (
    <section className="firsty-section relative w-full overflow-hidden bg-white">
      <div className="firsty-container">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <h2 className="firsty-display max-w-3xl">
            이미 다른 대학에서
            <br />
            <span className="text-[#FFBF0B]">놀라운 변화</span>를 경험했어요.
          </h2>
          <p className="firsty-lead mt-5 max-w-2xl">
            축제랑과 함께한 실제 캠퍼스 사례를 소개해요.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {CASES.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`firsty-card flex flex-col overflow-hidden ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative h-72 w-full shrink-0 bg-gray-100 md:h-auto md:w-1/2">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.univ} ${item.eventName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#11153F] shadow-pill backdrop-blur-md">
                    {item.date}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 md:w-1/2 md:p-12 lg:p-14">
                  <div className="mb-5 flex items-center gap-2.5 text-sm font-bold text-[#FFBF0B]">
                    <span>{item.univ}</span>
                    <span className="h-3 w-[1px] bg-gray-300" />
                    <span>{item.eventName}</span>
                  </div>

                  <h3 className="break-keep text-2xl font-bold leading-tight tracking-tight text-[#11153F] md:text-3xl lg:text-[34px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 break-keep text-base leading-relaxed text-gray-500 md:text-lg">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-gray-100 bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600"
                      >
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
