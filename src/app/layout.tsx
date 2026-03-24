import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arquitetura Residencial de Luxo - Projeto Neo-Clássico Moderno',
  description: 'Fusão entre a estética neoclássica e o design moderno focado em minimalismo, luxo e luz indireta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F5F5F1] text-[#18181B] dark:bg-[#18181B] dark:text-[#F5F5F1] font-inter antialiased transition-colors duration-700 selection:bg-[#FBBF24] selection:text-[#18181B]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
