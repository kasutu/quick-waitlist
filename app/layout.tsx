import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Quick Waitlist';
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  'Quick Waitlist and coming soon page for your SAAS and website.';

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="relative min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
            <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </ThemeProvider>
        </main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
