"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_MENUS = [
  { label: "축제랑 소개", href: "/about" },
  { label: "부스 랭킹", href: "/ranking" },
  { label: "자주 묻는 질문", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ paddingTop: 16, paddingBottom: 16 }}
        animate={{
          paddingTop: isScrolled ? 10 : 16,
          paddingBottom: isScrolled ? 10 : 16,
        }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-0 z-50 w-full"
      >
        <motion.div
          initial={false}
          animate={{
            backgroundColor:
              isScrolled && !isMobileMenuOpen
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(255, 255, 255, 0)",
            backdropFilter:
              isScrolled && !isMobileMenuOpen ? "blur(16px)" : "blur(0px)",
            borderColor:
              isScrolled && !isMobileMenuOpen
                ? "rgba(220, 222, 227, 0.6)"
                : "rgba(220, 222, 227, 0)",
          }}
          transition={{ duration: 0.25 }}
          className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 md:px-6"
        >
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/images/img_logo_full.svg"
              alt="WithFestival"
              width={56}
              height={56}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_MENUS.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-[#11153F]"
              >
                {menu.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#11153F] px-5 py-2.5 text-sm font-bold text-white shadow-pill transition-all hover:bg-[#1a2050] md:inline-flex"
            >
              도입 문의
            </Link>

            <button
              type="button"
              className={`relative z-50 rounded-full p-2 transition-colors md:hidden ${
                isMobileMenuOpen ? "text-white" : "text-[#11153F]"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 열기·닫기"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 17h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#11153F] px-6"
          >
            <nav className="flex flex-col items-center gap-2">
              {NAV_MENUS.map((menu, idx) => (
                <motion.div
                  key={menu.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                >
                  <Link
                    href={menu.href}
                    className="block rounded-full px-6 py-3 text-2xl font-bold text-white transition-colors hover:text-[#FFD43A]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-[#FFD43A] px-7 py-3.5 text-base font-bold text-[#11153F] shadow-cta transition-colors hover:bg-[#FFBF0B]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  도입 문의하기
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
