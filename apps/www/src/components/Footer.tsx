import Image from "next/image";
import Link from "next/link";

const LEGAL_LINKS = [
  { label: "개인정보처리방침", href: "/privacy", isBold: true },
  { label: "이용약관", href: "/terms", isBold: false },
  { label: "사업자정보확인", href: "/business-info", isBold: false },
];

const PRODUCT_LINKS = [
  { label: "축제랑 소개", href: "/about" },
  { label: "부스 랭킹", href: "/ranking" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "도입 문의", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/with.festival?igsh=MXJlY2tmc2lwMDg0cQ==",
    icon: (
      <Image
        src="/icons/ic_instagram.png"
        alt="Instagram"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Github",
    href: "https://github.com/orgs/Sikdorang/repositories",
    icon: (
      <Image src="/icons/ic_github.png" alt="Github" width={20} height={20} />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10">
      <div className="firsty-container px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-gray-200/60 pb-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/img_logo_full.svg"
                alt="WithFestival"
                width={64}
                height={64}
              />
            </Link>
            <p className="max-w-sm break-keep text-sm leading-relaxed text-gray-500">
              가장 스마트한 축제 운영 솔루션 축제랑
              <br />
              모두가 즐길 수 있는 축제를 만들어요
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all hover:border-[#11153F] hover:shadow-pill"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-[#11153F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-[#11153F] ${
                      link.isBold
                        ? "font-bold text-[#11153F]"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <address className="not-italic">
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-gray-400">
              <span className="font-bold text-gray-500">축제랑</span>
              <span>서울특별시 성동구</span>
              <span>사업자등록번호 111-11-111111</span>
              <span>통신판매업 신고번호: 어쩌구</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-gray-400">
              <span>대표 전XX</span>
              <span>고객센터 010-1234-1234</span>
              <span>대표이메일 u.lento25@gmail.com</span>
            </div>
          </address>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} WithFestival. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
