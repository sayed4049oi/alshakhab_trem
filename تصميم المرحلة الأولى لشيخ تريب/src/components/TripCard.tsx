import Link from 'next/link'
import { MapPin } from './icons'
import { MediaImage } from './MediaImage'

export function TripCard({ trip }: { trip: any }) {
  return <article className="overflow-hidden rounded-2xl bg-white shadow-sm"><MediaImage media={trip.heroImage} className="h-52 w-full" /><div className="p-5"><span className="flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" />{trip.destination}</span><h3 className="mt-2 text-xl font-black">{trip.title}</h3><p className="mt-2 text-sm text-slate-500">{trip.summary}</p><Link href={`/trips/${trip.slug}`} className="mt-5 inline-block font-bold text-[#a87812]">التفاصيل</Link></div></article>
}