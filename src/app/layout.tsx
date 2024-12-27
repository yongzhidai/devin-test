import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./globals.css";
import 'antd/dist/reset.css';
import { headers } from 'next/headers';
import { MainLayout } from "@/components/business/MainLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "管理系统",
  description: "基于Next.js的管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const isLoginPage = pathname === "/login";

  return (
    <html lang="zh">
      <body className={`${inter.variable} antialiased`}>
        <ConfigProvider locale={zhCN}>
          {isLoginPage ? children : <MainLayout>{children}</MainLayout>}
        </ConfigProvider>
      </body>
    </html>
  );
}
