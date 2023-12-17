'use client'
import { Lordicon } from '@/components/Lordicon'

import avatar from '../../assets/avatar.json'

export default function About() {
  return (
    <div className="flex w-full h-[calc(100vh-100px)] bg-slate-500">
      <h1 className="text-green-400">about</h1>

      <Lordicon icon={avatar} />
    </div>
  )
}
