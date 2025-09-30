import { Nunito_Sans, Sansation, Saira_Extra_Condensed } from 'next/font/google'
import "./globals.css";

const nunito = Nunito_Sans({
  style: ['normal'],
    weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const sansation = Sansation({
  style: ['normal'],
    weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansation',
});

const saira = Saira_Extra_Condensed({
  style: ['normal'],
    weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira',
});

export const metadata = {
  title: "Maxwell links",
  description: "No right to fail. no chance for the enemy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${sansation.variable} ${saira.variable}`}>
        {children}
      </body>
    </html>
  );
}
