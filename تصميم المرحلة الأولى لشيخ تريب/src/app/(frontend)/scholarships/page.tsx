import type { Metadata } from 'next'
import { ScholarshipCard } from '@/components/ScholarshipCard'
import { getScholarships } from '@/lib/content'

export const metadata: Metadata = {
  title: 'المنح والقبولات | الشيخاب تريب',
  description: 'اكتشف المنح الدراسية والقبولات الجامعية المتاحة.',
}

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships()
  return (
    <main className="page-shell">
      <header className="page-intro">
        <span className="section-kicker">المنح والقبولات</span>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">فرصتك تبدأ بقرار</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          استكشف فرصاً موثوقة، واعرف الشروط والتغطية والمواعيد قبل أن تبدأ.
        </p>
      </header>
      <section className="mx-auto max-w-7xl px-5 pb-20">
        {scholarships.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((item) => (
              <ScholarshipCard key={item.id} scholarship={item} />
            ))}
          </div>
        ) : (
          <p className="empty-box">ستظهر الفرص هنا فور إضافتها من لوحة الإدارة.</p>
        )}
      </section>
    </main>
  )
}
