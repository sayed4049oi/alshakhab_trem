'use client'

import { loginAction, signupAction } from '@/app/(frontend)/actions'

export function AuthForm() {
  const action = async (data: FormData) => { await loginAction({ ok: false, message: '' }, data) }
  return <form action={action} className="grid w-full max-w-md gap-4 rounded-3xl bg-white p-8 shadow-sm"><h1 className="text-2xl font-black">تسجيل الدخول</h1><input name="email" type="email" required placeholder="البريد الإلكتروني" className="rounded-xl border p-3" /><input name="password" type="password" required placeholder="كلمة المرور" className="rounded-xl border p-3" /><button className="rounded-xl bg-[#082d43] px-5 py-3 font-bold text-white">دخول</button><small className="text-slate-500">يمكنك إنشاء الحساب من لوحة الإدارة.</small></form>
}