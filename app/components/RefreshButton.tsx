'use client'

import { useRouter } from 'next/navigation'

export default function RefreshButton() {
  const router = useRouter()

  return (
    <button onClick = {() => router.refresh()} className="p-2 bg-blue-500 rounded-lg font-bold text-white hover:bg-blue-600 mt-4">
      New Episode
    </button>
  )
}