"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "u.lento25@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="firsty-container relative z-10 px-5 md:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="firsty-display"
            >
              성공적인 축제의 첫걸음,
              <br />
              <span className="text-[#FFBF0B]">축제랑이 함께해요.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="firsty-lead mt-5 max-w-xl"
            >
              도입 견적부터 맞춤형 기능 개발, 제휴 제안까지
              <br className="hidden md:block" />
              궁금한 점을 보내주면 담당자가 빠르게 답해요.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="firsty-card mt-14 overflow-hidden p-8 text-center md:p-12"
          >
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                대표 이메일
              </p>
              <h2 className="mt-3 break-all text-2xl font-bold tracking-tight text-[#11153F] selection:bg-[#FFD43A]/50 md:text-4xl">
                {email}
              </h2>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={`mailto:${email}`} className="firsty-cta">
                  메일 보내기
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

                <button
                  type="button"
                  onClick={handleCopy}
                  className={`firsty-cta-ghost ${
                    copied ? "border-[#11153F] bg-[#11153F] text-white" : ""
                  }`}
                >
                  {copied ? "복사했어요" : "이메일 주소 복사"}
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FFD43A]/25 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 grid grid-cols-1 gap-3 text-center text-sm text-gray-500 md:grid-cols-2 md:text-left"
          >
            <div className="rounded-2xl border border-gray-100 bg-gray-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                응답 시간
              </p>
              <p className="mt-2 font-medium text-[#11153F]">
                영업일 기준 1~2일 안에 답해요.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-100 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                꼭 알려주세요
              </p>
              <p className="mt-2 font-medium text-[#11153F]">
                소속(학교·학과)과 연락처를 같이 보내주세요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
