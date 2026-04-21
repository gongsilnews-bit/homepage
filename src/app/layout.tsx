import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "빌드온 | 상가·사무실 임대 전문 No.1",
  description: "상가·사무실 임대 전문 빌드온 중개법인. 고객님의 조건에 맞는 최적의 상가와 사무실을 찾아드립니다. 강남, 역삼, 삼성, 명동 등 전 지역 상업용 부동산 전문.",
  keywords: "상가 임대, 사무실 임대, 빌드온, 상가 매물, 사무실 매물, 오피스 임대, 강남 상가, 역세권 사무실, 상업용 부동산",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
