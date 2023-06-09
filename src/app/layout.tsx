import { Toaster } from '@/components/toaster'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'contact form | nextjs',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <Toaster />
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
