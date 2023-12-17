'use client'
import { useEffect, useRef, useState } from 'react'
import { Player } from '@lordicon/react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const avatar = require('../../assets/avatar.json')

export default function about() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHovered, setIsHovered] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const playerRef = useRef<Player>(null)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isHovered) {
      playerRef.current?.playFromBeginning()
    }
  }, [isHovered])

  return (
    <div
      className="flex w-full h-[calc(100vh-100px)] bg-slate-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-green-400">about</h1>

      <Player ref={playerRef} icon={avatar} />
    </div>
  )
}
