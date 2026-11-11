import Link from 'next/link'

export function Header() {
  return <header className="site-header"><Link href="/" className="font-black">الشيخاب تريب</Link><nav className="flex gap-5 text-sm"><Link href="/trips">الرحلات</Link><Link href="/scholarships">المنح</Link><Link href="/contact">تواصل معنا</Link><Link href="/login">دخول</Link></nav></header>
}