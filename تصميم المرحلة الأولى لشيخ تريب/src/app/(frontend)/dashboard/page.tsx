import { redirect } from 'next/navigation'
import { DocumentUpload } from '@/components/DocumentUpload'
import { ApplicationCreate } from '@/components/ApplicationCreate'
import { Check, User } from '@/components/icons'
import { logoutAction } from '@/app/(frontend)/actions'
import { appAuth } from '@/lib/app-auth'
import { getPayloadClient } from '@/lib/payload'

export default async function DashboardPage() {
  const user = await appAuth.currentUser()
  if (!user) redirect('/login')
  const payload = await getPayloadClient()
  const [applications, documents] = await Promise.all([
    payload.find({
      collection: 'applications',
      overrideAccess: false,
      user,
      where: { owner: { equals: user.id } },
      depth: 1,
      limit: 20,
      sort: '-createdAt',
    }),
    payload.find({
      collection: 'documents',
      overrideAccess: false,
      user,
      where: { owner: { equals: user.id } },
      depth: 0,
      limit: 20,
      sort: '-createdAt',
    }),
  ])
  const labels: Record<string, string> = {
    received: 'تم الاستلام',
    reviewing: 'قيد المراجعة',
    'documents-needed': 'نحتاج مستندات',
    completed: 'مكتمل',
  }
  return (
    <main className="page-shell min-h-screen bg-[#f6f3eb] dark:bg-[#071f30]">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-[#a87812]">بوابتي</span>
            <h1 className="mt-1 text-3xl font-black text-[#08263a] dark:text-white">
              مرحباً، {user.name}
            </h1>
          </div>
          <form action={logoutAction}>
            <button className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold dark:border-white/15">
              تسجيل الخروج
            </button>
          </form>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-[#0b293c] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8d18f]/30 text-[#a87812]">
                <User className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl font-black text-[#08263a] dark:text-white">طلباتي</h2>
                <p className="text-sm text-slate-500 dark:text-slate-300">تابع آخر تحديث لكل طلب</p>
              </div>
            </div>
            {applications.docs.length ? (
              <div className="grid gap-4">
                {applications.docs.map((application) => (
                  <article
                    key={application.id}
                    className="rounded-2xl border border-slate-200 p-5 dark:border-white/10"
                  >
                    <div className="flex flex-wrap justify-between gap-3">
                      <div>
                        <span className="text-xs text-slate-500">رقم الطلب</span>
                        <h3 className="font-bold">{application.reference}</h3>
                      </div>
                      <span className="h-fit rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                        {labels[application.status]}
                      </span>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-1/2 rounded-full bg-[#d6af4b]" />
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-slate-50 p-8 text-center dark:bg-white/5">
                <Check className="mx-auto h-8 w-8 text-[#b18725]" />
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
                  لا توجد طلبات بعد. اختر رحلة أو منحة وابدأ طلبك.
                </p>
              </div>
            )}
          </section>
          <aside className="grid gap-6">
            <ApplicationCreate />
            <DocumentUpload />
            <div className="rounded-3xl bg-white p-6 dark:bg-[#0b293c]">
              <h2 className="font-black text-[#08263a] dark:text-white">مستنداتي</h2>
              <div className="mt-4 grid gap-2">
                {documents.docs.length ? (
                  documents.docs.map((doc) => (
                    <div
                      key={doc.id}
                      className="rounded-xl bg-slate-50 px-4 py-3 text-sm dark:bg-white/5"
                    >
                      {doc.label}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">لم ترفع أي مستند بعد.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
