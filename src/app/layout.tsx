import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientProvider } from '@/components/business/ClientLayout';
import { AntdProvider } from '@/components/business/AntdProvider';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import "./globals.css";

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
        <StyledComponentsRegistry>
          <AntdProvider>
            <ClientProvider>{children}</ClientProvider>
          </AntdProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
