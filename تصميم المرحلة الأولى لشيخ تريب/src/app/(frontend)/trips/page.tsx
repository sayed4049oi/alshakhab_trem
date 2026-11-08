import type { Metadata } from 'next'
import { TripCard } from '@/components/TripCard'
import { getTrips } from '@/lib/content'

export const metadata: Metadata = {
  title: 'الرحلات السياحية | الشيخاب تريب',
  description: 'اكتشف أحدث عروض السفر والرحلات السياحية.',
}

export default async function TripsPage() {
  const trips = await getTrips()
  return (
    <main className="page-shell">
      <PageIntro
        kicker="السفر والسياحة"
        title="العالم أقرب مما تتخيل"
        copy="رحلات منتقاة بتفاصيل واضحة وتجارب مصممة لتمنحك ذكريات لا تُنسى."
      />
      <section className="mx-auto max-w-7xl px-5 pb-20">
        {trips.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <p className="empty-box">ستظهر الرحلات هنا فور إضافتها من لوحة الإدارة.</p>
        )}
      </section>
    </main>
  )
}

function PageIntro({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <header className="page-intro">
      <span className="section-kicker">{kicker}</span>
      <h1 className="mt-3 text-4xl font-black sm:text-6xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">{copy}</p>
    </header>
  )
}
