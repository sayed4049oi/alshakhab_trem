'use server'

import { redirect } from 'next/navigation'
import { appAuth } from '@/lib/app-auth'
import { getPayloadClient } from '@/lib/payload'

export type FormState = { ok: boolean; message: string }

const text = (data: FormData, key: string, max = 500) => {
  const value = data.get(key)
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function loginAction(_: FormState, data: FormData): Promise<FormState> {
  const email = text(data, 'email', 200).toLowerCase()
  const password = text(data, 'password', 200)
  if (!email || !password) return { ok: false, message: 'أدخل البريد الإلكتروني وكلمة المرور.' }
  try {
    await appAuth.login(email, password)
  } catch {
    return { ok: false, message: 'بيانات الدخول غير صحيحة، حاول مرة أخرى.' }
  }
  redirect('/dashboard')
}

export async function signupAction(_: FormState, data: FormData): Promise<FormState> {
  const name = text(data, 'name', 120)
  const email = text(data, 'email', 200).toLowerCase()
  const password = text(data, 'password', 200)
  const accountType = text(data, 'accountType', 20)
  if (!name || !email || password.length < 8) {
    return { ok: false, message: 'أدخل بيانات صحيحة وكلمة مرور من 8 أحرف على الأقل.' }
  }
  if (!['traveler', 'student'].includes(accountType)) {
    return { ok: false, message: 'اختر نوع الحساب.' }
  }
  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'users',
      overrideAccess: false,
      data: { name, email, password, accountType: accountType as 'traveler' | 'student' },
    })
    await appAuth.login(email, password)
  } catch {
    return { ok: false, message: 'تعذر إنشاء الحساب. قد يكون البريد مستخدماً مسبقاً.' }
  }
  redirect('/dashboard')
}

export async function logoutAction() {
  await appAuth.logout()
  redirect('/')
}

export async function contactAction(_: FormState, data: FormData): Promise<FormState> {
  const name = text(data, 'name', 120)
  const email = text(data, 'email', 200).toLowerCase()
  const phone = text(data, 'phone', 40)
  const message = text(data, 'message', 2000)
  if (!name || !email.includes('@') || message.length < 10) {
    return { ok: false, message: 'يرجى إكمال الاسم والبريد وكتابة رسالة واضحة.' }
  }
  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'contact-submissions',
      overrideAccess: false,
      data: { name, email, phone, message },
    })
    return { ok: true, message: 'تم إرسال رسالتك بنجاح، وسنتواصل معك قريباً.' }
  } catch {
    return { ok: false, message: 'تعذر إرسال الرسالة الآن. حاول مرة أخرى.' }
  }
}

export async function uploadDocumentAction(_: FormState, data: FormData): Promise<FormState> {
  const user = await appAuth.currentUser()
  if (!user) return { ok: false, message: 'يجب تسجيل الدخول أولاً.' }
  const file = data.get('file')
  const label = text(data, 'label', 100)
  if (!(file instanceof File) || file.size === 0 || !label) {
    return { ok: false, message: 'اختر ملفاً واكتب اسمه.' }
  }
  if (file.size > 8 * 1024 * 1024)
    return { ok: false, message: 'حجم الملف يجب ألا يتجاوز 8 ميغابايت.' }
  if (!['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    return { ok: false, message: 'الملفات المقبولة: PDF وJPG وPNG وWEBP.' }
  }
  try {
    const payload = await getPayloadClient()
    const bytes = Buffer.from(await file.arrayBuffer())
    await payload.create({
      collection: 'documents',
      overrideAccess: false,
      user,
      data: { label, owner: user.id },
      file: { data: bytes, mimetype: file.type, name: file.name, size: file.size },
    })
    return { ok: true, message: 'تم رفع المستند وحفظه بأمان.' }
  } catch {
    return { ok: false, message: 'تعذر رفع المستند الآن.' }
  }
}

export async function createApplicationAction(_: FormState, data: FormData): Promise<FormState> {
  const user = await appAuth.currentUser()
  if (!user) return { ok: false, message: 'يجب تسجيل الدخول أولاً.' }
  const type = text(data, 'type', 20)
  const notes = text(data, 'notes', 1000)
  if (!['trip', 'scholarship', 'visa'].includes(type)) {
    return { ok: false, message: 'اختر نوع الطلب.' }
  }
  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'applications',
      overrideAccess: false,
      user,
      data: {
        type: type as 'trip' | 'scholarship' | 'visa',
        notes,
        owner: user.id,
        reference: `ST-${Date.now().toString(36).toUpperCase()}`,
        status: 'received',
      },
    })
    return { ok: true, message: 'تم إنشاء طلبك، وسيبدأ الفريق بمراجعته.' }
  } catch {
    return { ok: false, message: 'تعذر إنشاء الطلب الآن.' }
  }
}
