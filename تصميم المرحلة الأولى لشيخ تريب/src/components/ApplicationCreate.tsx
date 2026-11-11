'use client'

import { createApplicationAction } from '@/app/(frontend)/actions'

export function ApplicationCreate() {
  const action = async (data: FormData) => { await createApplicationAction({ ok: false, message: '' }, data) }
  return <form action={action} className="grid gap-3 rounded-3xl bg-white p-6"><h2 className="font-black">طلب جديد</h2><select name="type" defaultValue="trip" className="rounded-xl border p-3"><option value="trip">رحلة</option><option value="scholarship">منحة</option><option value="visa">تأشيرة</option></select><textarea name="notes" placeholder="ملاحظات" className="rounded-xl border p-3" /><button className="rounded-xl bg-[#d6af4b] p-3 font-bold">إنشاء الطلب</button></form>
}