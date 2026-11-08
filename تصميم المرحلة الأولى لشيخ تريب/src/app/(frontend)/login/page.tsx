import { redirect } from 'next/navigation'
import { AuthForm } from '@/components/AuthForm'
import { appAuth } from '@/lib/app-auth'

export default async function LoginPage() {
  if (await appAuth.currentUser()) redirect('/dashboard')
  return (
    <main className="auth-background flex min-h-screen items-center justify-center px-5 py-28">
      <AuthForm />
    </main>
  )
}
