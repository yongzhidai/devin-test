import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "./globals.css";
import 'antd/dist/reset.css';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('@/components/business/AppLayout').then(mod => mod.AppLayout), {
  ssr: false
});

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
  return (
    <html lang="zh">
      <body className={`${inter.variable} antialiased`}>
        <ConfigProvider locale={zhCN}>
          <AppLayout>{children}</AppLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
