import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata: Metadata={title:{default:'بورتفوليو مصمم جرافيك',template:'%s | بورتفوليو'},description:'أعمال وتصاميم مختارة مع دراسات حالة وتواصل سريع.',openGraph:{title:'بورتفوليو',type:'website'}}
export default function RootLayout({children}:{children:React.ReactNode}){
  return(<html lang="ar" dir="rtl"><body><div className="container py-8"><Navbar/><main className="min-h-[60vh] py-6">{children}</main><Footer/></div></body></html>)
}