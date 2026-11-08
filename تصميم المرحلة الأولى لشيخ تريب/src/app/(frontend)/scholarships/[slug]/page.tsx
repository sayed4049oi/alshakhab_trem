import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Check, GraduationCap, MapPin } from '@/components/icons'
import { MediaImage } from '@/components/MediaImage'
import { getScholarship, getScholarships } from '@/lib/content'

export async function generateStaticParams() {
  const items = await getScholarships()
  return items.map((item) => ({ slug: item.slug }))
}

export default async function ScholarshipDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getScholarship(slug)
  if (!item) notFound()
  return (
    <main className="page-shell">
      <section className="relative min-h-[68svh] overflow-hidden">
        <MediaImage
          media={item.heroImage}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061e2e] via-[#082d43]/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-7xl items-end px-5 pb-14 text-white">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-[#d6af4b] px-4 py-2 text-sm font-bold text-[#08263a]">
              {item.funding}
            </span>
            <h1 className="max-w-4xl text-4xl font-black sm:text-6xl">{item.title}</h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <span className="flex gap-2">
                <MapPin className="h-5 w-5 text-[#e3c46f]" />
                {item.country}
              </span>
              <span className="flex gap-2">
                <GraduationCap className="h-5 w-5 text-[#e3c46f]" />
                {item.degree}
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="detail-heading">عن الفرصة</h2>
          <p className="leading-9 text-slate-600 dark:text-slate-300">{item.summary}</p>
          <h2 className="detail-heading mt-12">شروط التقديم</h2>
          <div className="mt-5 grid gap-3">
            {(item.requirements ?? []).map((row, i) => (
              <span
                key={row.id ?? i}
                className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm dark:bg-white/5"
              >
                <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                {row.item}
              </span>
            ))}
          </div>
          <h2 className="detail-heading mt-12">التغطية المالية</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(item.coverage ?? []).map((row, i) => (
              <span
                key={row.id ?? i}
                className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <Check className="h-5 w-5 text-[#b18725]" />
                {row.item}
              </span>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-[#082d43] p-7 text-white lg:sticky lg:top-28">
          <Calendar className="h-7 w-7 text-[#e3c46f]" />
          <span className="mt-4 block text-sm text-slate-300">آخر موعد للتقديم</span>
          <strong className="mt-1 block text-xl">
            {new Date(item.deadline).toLocaleDateString('ar', { dateStyle: 'long' })}
          </strong>
          <Link
            href="/login"
            className="mt-7 block rounded-xl bg-[#d6af4b] px-5 py-4 text-center font-bold text-[#08263a]"
          >
            ابدأ التقديم
          </Link>
          <Link
            href="/contact"
            className="mt-3 block rounded-xl border border-white/20 px-5 py-4 text-center font-bold"
          >
            تحقق من أهليتك مجاناً
          </Link>
        </aside>
      </div>
    </main>
  )
}
