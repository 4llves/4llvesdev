'use client'
import { useEffect, useRef, useState } from 'react'
import { Player } from '@lordicon/react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const avatar = require('../../assets/avatar.json')

export default function about() {
  const [isHovered, setIsHovered] = useState(false)

  const playerRef = useRef<Player>(null)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isHovered) {
      playerRef.current?.playFromBeginning()
    }
  }, [isHovered])

  return (
    <div
      className="flex w-full max-h-screen bg-slate-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-green-400">about</h1>

      <Player ref={playerRef} icon={avatar} />
    </div>
  )
}
