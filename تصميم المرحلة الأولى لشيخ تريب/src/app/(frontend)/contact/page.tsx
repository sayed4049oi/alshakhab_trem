import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { MapPin, MessageCircle } from '@/components/icons'
import { getSiteSettings } from '@/lib/content'

export const metadata: Metadata = { title: 'تواصل معنا | الشيخاب تريب' }

export default async function ContactPage() {
  const settings = await getSiteSettings()
  return (
    <main className="page-shell">
      <header className="page-intro">
        <span className="section-kicker">تواصل معنا</span>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">أخبرنا إلى أين تريد الوصول</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          رسالتك هي الخطوة الأولى. سنعود إليك بإجابة عملية وواضحة.
        </p>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 lg:grid-cols-[.75fr_1.25fr]">
        <aside className="rounded-3xl bg-[#082d43] p-8 text-white">
          <h2 className="text-2xl font-black">نحن قريبون منك</h2>
          <p className="mt-3 leading-7 text-slate-300">
            تواصل بالطريقة التي تناسبك، أو أرسل النموذج وسيجيبك الفريق.
          </p>
          <div className="mt-8 grid gap-5 text-sm">
            <div className="flex gap-3">
              <MessageCircle className="h-5 w-5 text-[#e3c46f]" />
              <div>
                <strong className="block">الهاتف وواتساب</strong>
                <span className="mt-1 block text-slate-300">
                  {settings.phone || settings.whatsapp || 'أضف الرقم من لوحة الإدارة'}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-[#e3c46f]" />
              <div>
                <strong className="block">المكتب</strong>
                <span className="mt-1 block text-slate-300">
                  {settings.address || 'أضف عنوان المكتب من لوحة الإدارة'}
                </span>
              </div>
            </div>
          </div>
        </aside>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#0b293c] sm:p-9">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
