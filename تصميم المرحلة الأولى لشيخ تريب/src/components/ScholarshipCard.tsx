import Link from 'next/link'
import { GraduationCap } from './icons'
import { MediaImage } from './MediaImage'

export function ScholarshipCard({ scholarship }: { scholarship: any }) {
  return <article className="overflow-hidden rounded-2xl bg-white shadow-sm"><MediaImage media={scholarship.heroImage} className="h-52 w-full" /><div className="p-5"><span className="flex items-center gap-2 text-sm text-slate-500"><GraduationCap className="h-4 w-4" />{scholarship.country}</span><h3 className="mt-2 text-xl font-black">{scholarship.title}</h3><p className="mt-2 text-sm text-slate-500">{scholarship.summary}</p><Link href={`/scholarships/${scholarship.slug}`} className="mt-5 inline-block font-bold text-[#a87812]">التفاصيل</Link></div></article>
}