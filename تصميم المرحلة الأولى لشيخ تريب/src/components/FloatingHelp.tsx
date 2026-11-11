import Link from 'next/link'

export function FloatingHelp() {
  return (
    <Link
      href="/contact"
      aria-label="تواصل معنا"
      className="fixed bottom-5 left-5 z-40 rounded-full bg-[#d6af4b] px-4 py-3 text-sm font-bold text-[#08263a] shadow-lg transition hover:-translate-y-1"
    >
      تحتاج مساعدة؟
    </Link>
  )
}