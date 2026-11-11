'use client'

import { uploadDocumentAction } from '@/app/(frontend)/actions'

export function DocumentUpload() {
  const action = async (data: FormData) => { await uploadDocumentAction({ ok: false, message: '' }, data) }
  return <form action={action} className="grid gap-3 rounded-3xl bg-white p-6"><h2 className="font-black">رفع مستند</h2><input name="label" required placeholder="اسم المستند" className="rounded-xl border p-3" /><input name="file" required type="file" className="text-sm" /><button className="rounded-xl border border-slate-300 p-3 font-bold">رفع</button></form>
}