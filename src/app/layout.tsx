import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
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
    <html lang="pt-BR" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-neo-pearl text-neo-charcoal font-montserrat antialiased transition-colors duration-700 selection:bg-neo-gold selection:text-neo-pearl">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
