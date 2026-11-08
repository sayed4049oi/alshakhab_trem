import type { Metadata } from 'next'
import { GraduationCap, Plane } from '@/components/icons'
import { getSiteSettings } from '@/lib/content'

export const metadata: Metadata = { title: 'من نحن | الشيخاب تريب' }

export default async function AboutPage() {
  const settings = await getSiteSettings()
  const timeline = [
    [
      'البداية',
      'بدأت الفكرة من حاجة بسيطة: جهة واحدة تفهم أحلام المسافر وطموح الطالب وتتعامل معهما باهتمام حقيقي.',
    ],
    [
      'رؤيتنا',
      'أن يصبح الوصول إلى العالم أسهل؛ سواء كانت الوجهة رحلة منتظرة أو جامعة تفتح باباً للمستقبل.',
    ],
    ['طريقتنا', 'نختار، ندقق، نشرح، ثم نبقى قريبين منك في كل خطوة بدلاً من تركك أمام تفاصيل معقدة.'],
    [
      'المستقبل',
      'منصة عربية موثوقة تجمع الرحلات والفرص التعليمية والخدمات المساندة في تجربة واحدة.',
    ],
  ]
  return (
    <main className="page-shell">
      <header className="page-intro min-h-[54svh]">
        <span className="section-kicker">قصتنا</span>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">رحلتان، رؤية واحدة</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          نؤمن أن السفر يوسّع أفقك، وأن التعليم يصنع مستقبلك. لذلك جمعنا الاثنين تحت اسم واحد.
        </p>
      </header>
      <section className="bg-[#f6f3eb] py-20 dark:bg-[#071f30]">
        <div className="mx-auto max-w-4xl px-5">
          <div className="timeline-line">
            {timeline.map(([title, copy], i) => (
              <article
                key={title}
                className={`timeline-item ${i % 2 ? 'md:mr-auto' : 'md:ml-auto'}`}
              >
                <span>0{i + 1}</span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 dark:bg-[#092536]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
          <AboutStat
            icon={<Plane className="h-8 w-8" />}
            value={settings.statistics?.trips ?? 120}
            label="رحلة ناجحة"
          />
          <AboutStat
            icon={<GraduationCap className="h-9 w-9" />}
            value={settings.statistics?.students ?? 85}
            label="طالباً مقبولاً"
          />
          <AboutStat
            icon={<span className="text-3xl">+</span>}
            value={settings.statistics?.countries ?? 24}
            label="دولة متاحة"
          />
        </div>
      </section>
    </main>
  )
}

function AboutStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: number
  label: string
}) {
  return (
    <div className="rounded-3xl border border-slate-200 p-8 text-center dark:border-white/10">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#e8d18f]/25 text-[#a87812]">
        {icon}
      </div>
      <strong className="mt-5 block text-4xl font-black text-[#08263a] dark:text-white">
        +{value}
      </strong>
      <span className="mt-2 block text-sm text-slate-500 dark:text-slate-300">{label}</span>
    </div>
  )
}
