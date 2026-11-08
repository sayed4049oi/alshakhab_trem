import Link from 'next/link'
import { ArrowLeft, Check, GraduationCap, Plane } from '@/components/icons'
import { MediaImage } from '@/components/MediaImage'
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
  const travelHero = trips[0]
  const studyHero = scholarships[0]

  return (
    <main>
      <section className="brand-intro">
        <TravelGlobeLogo variant="hero" />
        <h1 className="sr-only">الشيخاب للسفر والسياحة</h1>
        <Link href="#discover" className="brand-intro-action">
          اكتشف عالمنا
          <span aria-hidden="true">↓</span>
        </Link>
      </section>

      <section
        id="discover"
        className="grid min-h-[92svh] scroll-mt-20 bg-[#071f30] text-white lg:grid-cols-2"
      >
        <div className="hero-pane group relative flex min-h-[46svh] items-end overflow-hidden p-7 sm:p-12 lg:min-h-[calc(92svh-5rem)] lg:p-16">
          <MediaImage
            media={travelHero?.heroImage}
            priority
            className="absolute inset-0 h-full w-full object-cover transition duration-[1.5s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051d2e] via-[#082b3e]/45 to-transparent" />
          <div className="relative z-10 max-w-xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-xs backdrop-blur">
              <Plane className="h-4 w-4 text-[#e3c46f]" /> للسفر والسياحة
            </span>
            <h2 className="text-4xl font-black leading-[1.35] sm:text-6xl">
              اكتشف العالم
              <br />
              <span className="text-[#e3c46f]">بطريقتك.</span>
            </h2>
            <p className="mt-5 max-w-md leading-8 text-slate-200">
              رحلات مختارة بعناية، تفاصيل واضحة، ودعم يرافقك من الحجز حتى العودة.
            </p>
            <Link
              href="/trips"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-[#08263a] transition hover:-translate-y-1"
            >
              استكشف الرحلات <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <Plane className="hero-cursor pointer-events-none absolute left-10 top-1/3 h-10 w-10 text-[#e3c46f] opacity-0 transition group-hover:opacity-100" />
        </div>

        <div className="hero-pane group relative flex min-h-[46svh] items-end overflow-hidden border-white/15 p-7 sm:p-12 lg:min-h-[calc(92svh-5rem)] lg:border-r lg:p-16">
          <MediaImage
            media={studyHero?.heroImage}
            priority
            className="absolute inset-0 h-full w-full object-cover transition duration-[1.5s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d31] via-[#102b4c]/55 to-transparent" />
          <div className="relative z-10 max-w-xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-xs backdrop-blur">
              <GraduationCap className="h-5 w-5 text-[#e3c46f]" /> للمنح والقبولات
            </span>
            <h2 className="text-4xl font-black leading-[1.35] sm:text-6xl">
              ابنِ مستقبلك
              <br />
              <span className="text-[#e3c46f]">من اليوم.</span>
            </h2>
            <p className="mt-5 max-w-md leading-8 text-slate-200">
              نبحث معك عن الفرصة الأنسب ونجهّز ملفك خطوة بخطوة حتى التقديم.
            </p>
            <Link
              href="/scholarships"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#d6af4b] px-6 py-3.5 font-bold text-[#08263a] transition hover:-translate-y-1"
            >
              استكشف المنح <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <GraduationCap className="hero-cursor pointer-events-none absolute left-10 top-1/3 h-11 w-11 text-[#e3c46f] opacity-0 transition group-hover:opacity-100" />
        </div>
      </section>

      <section className="bg-[#f6f3eb] py-20 dark:bg-[#071f30]">
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
