'use client'

import { contactAction } from '@/app/(frontend)/actions'

export function ContactForm() {
  const action = async (data: FormData) => { await contactAction({ ok: false, message: '' }, data) }
  return <form action={action} className="grid gap-4"><input name="name" required placeholder="الاسم" className="rounded-xl border p-3" /><input name="email" type="email" required placeholder="البريد الإلكتروني" className="rounded-xl border p-3" /><input name="phone" placeholder="رقم الهاتف" className="rounded-xl border p-3" /><textarea name="message" required minLength={10} placeholder="رسالتك" className="min-h-36 rounded-xl border p-3" /><button className="rounded-xl bg-[#082d43] px-5 py-3 font-bold text-white">إرسال الرسالة</button></form>
}