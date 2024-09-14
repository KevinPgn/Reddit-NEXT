import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Headers } from "@/features/headers/Headers";
import { SidebarLeft } from "@/features/sidebarLeft/SidebarLeft";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Headers />
            
            <div className="flex">
              <SidebarLeft />
              {children}
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
