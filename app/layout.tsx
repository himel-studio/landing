import "@/styles/globals.css"
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layout/header";
import Background from "@/components/layout/background";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const jetbrains = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himel Studio",
  description: "Himel Studio is a personal blog and portfolio website of Himel Rana. Himel is a full-stack web developer and a tech enthusiast.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(jetbrains.className, 'antialiased', 'w-full mx-auto container lg:max-w-[110rem] min-h-screen flex flex-col')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Header />
          <main className="flex flex-1 my-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}