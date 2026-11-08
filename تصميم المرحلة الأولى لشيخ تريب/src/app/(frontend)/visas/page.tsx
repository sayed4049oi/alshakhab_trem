import Link from 'next/link'
import { Check } from '@/components/icons'

export default function VisasPage() {
  return (
    <main className="page-shell">
      <header className="page-intro">
        <span className="section-kicker">خدمات التأشيرات</span>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">تأشيرتك، بخطوات أوضح</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          نراجع متطلباتك ونساعدك في تجهيز الملف قبل التقديم.
        </p>
      </header>
      <section className="mx-auto grid max-w-5xl gap-5 px-5 pb-20 md:grid-cols-3">
        {['تقييم الحالة والمتطلبات', 'تجهيز ومراجعة المستندات', 'متابعة الطلب معك'].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-[#0b293c]"
          >
            <Check className="h-7 w-7 text-emerald-600" />
            <h2 className="mt-5 font-black text-[#08263a] dark:text-white">{item}</h2>
          </div>
        ))}
      </section>
      <div className="pb-20 text-center">
        <Link
          href="/contact"
          className="rounded-xl bg-[#d6af4b] px-7 py-4 font-bold text-[#08263a]"
        >
          اطلب تقييم التأشيرة
        </Link>
      </div>
    </main>
  )
}
