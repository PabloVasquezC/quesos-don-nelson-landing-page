'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StudioPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/studio/structure')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-muted-foreground">Redirigiendo al Studio...</p>
    </div>
  )
}
