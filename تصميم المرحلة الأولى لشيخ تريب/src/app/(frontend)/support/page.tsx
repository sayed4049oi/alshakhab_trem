import type { Metadata } from 'next'
import { GraduationCap, Plane } from '@/components/icons'
import { getFAQs } from '@/lib/content'

export const metadata: Metadata = { title: 'الدعم والأسئلة الشائعة | الشيخاب تريب' }

export default async function SupportPage() {
  const faqs = await getFAQs()
  const travel = faqs.filter((item) => item.category === 'travel')
  const students = faqs.filter((item) => item.category === 'students')
  return (
    <main className="page-shell">
      <header className="page-intro">
        <span className="section-kicker">مركز المساعدة</span>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">إجابة واضحة، وقتما تحتاجها</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          اختر القسم المناسب وستجد إجابات لأكثر الأسئلة شيوعاً.
        </p>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 lg:grid-cols-2">
        <FAQGroup icon={<Plane className="h-7 w-7" />} title="دعم المسافرين" items={travel} />
        <FAQGroup icon={<GraduationCap className="h-8 w-8" />} title="دعم الطلاب" items={students} />
      </section>
    </main>
  )
}

function FAQGroup({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: Awaited<ReturnType<typeof getFAQs>>
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#0b293c] sm:p-7">
      <div className="mb-6 flex items-center gap-3 text-[#08263a] dark:text-white">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8d18f]/30 text-[#a87812]">
          {icon}
        </span>
        <h2 className="text-2xl font-black">{title}</h2>
      </div>
      <div className="grid gap-3">
        {items.length ? (
          items.map((item) => (
            <details key={item.id} className="faq-item group">
              <summary>
                {item.question}
                <span>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))
        ) : (
          <p className="py-8 text-center text-sm text-slate-500">
            يمكن إضافة الأسئلة من لوحة الإدارة.
          </p>
        )}
      </div>
    </div>
  )
}
