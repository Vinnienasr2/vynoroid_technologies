import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { COMPANY_NAME } from '@/lib/constants';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Software Development in Kenya`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: 'Vynoroid Technologies is a leading software development company in Kenya, specializing in web development, mobile apps, AI solutions, and enterprise systems.',
  keywords: ['Kenya software company', 'software development Kenya', 'Vynoroid Technologies', 'web development', 'mobile apps', 'AI solutions'],
  openGraph: {
    title: `${COMPANY_NAME} | Software Development in Kenya`,
    description: 'Expert software engineering, web and mobile app development, and AI solutions from Kenya.',
    url: 'https://vynoroid.com', // Replace with actual domain
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontPoppins.variable,
          fontPtSans.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
