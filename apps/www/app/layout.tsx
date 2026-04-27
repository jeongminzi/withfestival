import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "축제랑 | 축제는 당연히 !",
  description: "WithFestival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth bg-white">
      <body className="bg-white text-[#11153F] antialiased font-pretendard">
        {children}
      </body>
    </html>
  );
}
