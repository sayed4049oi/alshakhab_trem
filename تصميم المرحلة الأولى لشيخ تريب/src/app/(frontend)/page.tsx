import Link from 'next/link'
import { ArrowLeft, Check, Plane } from '@/components/icons'
import { ScholarshipCard } from '@/components/ScholarshipCard'
import { TripCard } from '@/components/TripCard'
import { TravelGlobeLogo } from '@/components/TravelGlobeLogo'
import { getFeaturedScholarships, getFeaturedTrips, getSiteSettings } from '@/lib/content'

export default async function HomePage() {
  const [trips, scholarships, settings] = await Promise.all([
    getFeaturedTrips(),
    getFeaturedScholarships(),
    getSiteSettings(),
  ])
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-hero-kicker"><Plane className="h-4 w-4" /> رحلتك تبدأ من هنا</span>
          <h1>العالم أقرب<br /><span>مما تتخيل.</span></h1>
          <p>رحلات مصممة بعناية، ومنح دراسية موثوقة، وفريق يرافقك في كل خطوة حتى تصل إلى وجهتك.</p>
          <div className="home-hero-actions">
            <Link href="/trips" className="home-hero-primary">استكشف الرحلات <ArrowLeft className="h-5 w-5" /></Link>
            <Link href="/scholarships" className="home-hero-secondary">اكتشف المنح</Link>
          </div>
          <div className="home-hero-note"><span>01</span><span>اختر وجهتك، ونحن نهتم بالباقي</span></div>
        </div>
        <div className="home-hero-visual">
          <TravelGlobeLogo variant="hero" />
          <div className="home-hero-orbit-label">طائرة واحدة<br /><strong>آلاف الوجهات</strong></div>
        </div>
        <Link href="#trips" className="home-hero-scroll">مرر لاكتشاف المزيد <span>↓</span></Link>
      </section>

      <section id="trips" className="bg-[#f6f3eb] py-20 dark:bg-[#071f30]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="section-kicker">وجهتك تبدأ هنا</span>
            <h2 className="section-title">عروض سفر صُنعت لتُعاش</h2>
            <p className="section-copy">
              اختر من تجاربنا المميزة، ويمكنك إضافة وإدارة كل العروض من لوحة المحتوى.
            </p>
          </div>
          {trips.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          ) : (
            <EmptyState href="/admin/collections/trips" label="أضف أول رحلة من لوحة الإدارة" />
          )}
          <div className="mt-10 text-center">
            <Link className="outline-button" href="/trips">
              عرض جميع الرحلات <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-[#092536]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="section-kicker">فرص بلا حدود</span>
            <h2 className="section-title">منحة واحدة قد تغيّر كل شيء</h2>
            <p className="section-copy">
              فرص دراسية موثوقة مع شروط ومواعيد واضحة، ومراجعة أولية مجانية لملفك.
            </p>
          </div>
          {scholarships.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {scholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          ) : (
            <EmptyState
              href="/admin/collections/scholarships"
              label="أضف أول منحة من لوحة الإدارة"
            />
          )}
          <div className="mt-10 text-center">
            <Link className="outline-button" href="/scholarships">
              عرض جميع المنح <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#082d43] py-20 text-white">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-[#d6af4b]/20" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <span className="text-sm font-bold text-[#e3c46f]">كيف نعمل؟</span>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              من الحلم إلى الخطة،
              <br />
              ومن الخطة إلى الوصول.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              مسار واضح لا يتركك محتاراً. ابدأ بطلب مبدئي مجاني، وسيتواصل معك مستشار متخصص.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-[#d6af4b] px-6 py-3.5 font-bold text-[#08263a]"
            >
              ابدأ استشارتك المجانية
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              'اختر الرحلة أو الفرصة المناسبة',
              'أرسل طلبك ومستنداتك بأمان',
              'تابع كل تحديث من بوابتك الخاصة',
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d6af4b] font-black text-[#08263a]">
                  0{i + 1}
                </span>
                <span className="font-bold">{item}</span>
                <Check className="mr-auto h-5 w-5 text-[#e3c46f]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3eb] py-16 dark:bg-[#071f30]">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-5 px-5 text-center">
          <Stat value={settings.statistics?.trips ?? 120} label="رحلة ناجحة" />
          <Stat value={settings.statistics?.students ?? 85} label="طالباً مقبولاً" />
          <Stat value={settings.statistics?.countries ?? 24} label="دولة متاحة" />
        </div>
      </section>
    </main>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <strong className="block text-3xl font-black text-[#b18624] sm:text-5xl">+{value}</strong>
      <span className="mt-2 block text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
        {label}
      </span>
    </div>
  )
}

function EmptyState({ href, label }: { href: string; label: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-[#d6af4b] p-12 text-center">
      <p className="text-slate-500">{label}</p>
      <Link href={href} className="mt-4 inline-flex font-bold text-[#a87812]">
        فتح لوحة الإدارة
      </Link>
    </div>
  )
}
