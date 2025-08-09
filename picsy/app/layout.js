import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import FloatingShapes from "@/components/floating-shape";
import Headers from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Picsy",
  description: "Your Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Headers/>
            <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
              <FloatingShapes/>
              <Toaster richColors/>
              {children}</main>
          </ThemeProvider>
      </body>
    </html>
  );
}
