import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EQ Dry Cure Calculator',
  description: 'Calculate dry cure ingredient amounts for your bacon and cured meats.',
  openGraph: {
    images: [
      {
        url: 'preview.jpg',
        width: 600,
        height: 500,
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
