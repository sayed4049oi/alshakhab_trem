import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, Clock, MapPin } from '@/components/icons'
import { MediaImage } from '@/components/MediaImage'
import { getTrip, getTrips } from '@/lib/content'

export async function generateStaticParams() {
  const trips = await getTrips()
  return trips.map((trip) => ({ slug: trip.slug }))
}

export default async function TripDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trip = await getTrip(slug)
  if (!trip) notFound()
  return (
    <main className="page-shell">
      <section className="relative min-h-[68svh] overflow-hidden">
        <MediaImage
          media={trip.heroImage}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061e2e] via-[#082d43]/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-7xl items-end px-5 pb-14 text-white">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
              <MapPin className="h-4 w-4" />
              {trip.destination}
            </span>
            <h1 className="max-w-4xl text-4xl font-black sm:text-6xl">{trip.title}</h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <span className="flex gap-2">
                <Clock className="h-5 w-5 text-[#e3c46f]" />
                {trip.duration}
              </span>
              <strong className="text-[#e3c46f]">
                {trip.price.toLocaleString('ar')} {trip.currency}
              </strong>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="detail-heading">عن الرحلة</h2>
          <p className="leading-9 text-slate-600 dark:text-slate-300">{trip.summary}</p>
          <h2 className="detail-heading mt-12">برنامج الرحلة</h2>
          <div className="mt-6 grid gap-4">
            {(trip.itinerary ?? []).map((item, i) => (
              <div
                key={item.id ?? i}
                className="rounded-2xl border border-slate-200 p-5 dark:border-white/10"
              >
                <span className="text-xs font-bold text-[#a87812]">{item.day}</span>
                <h3 className="mt-1 font-bold text-[#08263a] dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
          <h2 className="detail-heading mt-12">يشمل السعر</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(trip.includes ?? []).map((row, i) => (
              <span
                key={row.id ?? i}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <Check className="h-5 w-5 text-emerald-600" />
                {row.item}
              </span>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-[#082d43] p-7 text-white lg:sticky lg:top-28">
          <span className="text-sm text-[#e3c46f]">يبدأ السعر من</span>
          <strong className="mt-2 block text-3xl">
            {trip.price.toLocaleString('ar')} {trip.currency}
          </strong>
          {trip.hotel && <p className="mt-4 text-sm text-slate-300">الإقامة: {trip.hotel}</p>}
          <Link
            href="/login"
            className="mt-7 block rounded-xl bg-[#d6af4b] px-5 py-4 text-center font-bold text-[#08263a]"
          >
            احجز مبدئياً
          </Link>
          <Link
            href="/contact"
            className="mt-3 block rounded-xl border border-white/20 px-5 py-4 text-center font-bold"
          >
            اسأل مستشاراً
          </Link>
          <p className="mt-5 text-center text-xs leading-6 text-slate-400">
            لا يلزم الدفع الآن. سنتواصل معك لتأكيد التفاصيل.
          </p>
        </aside>
      </div>
    </main>
  )
}
