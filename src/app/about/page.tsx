'use client'
import { Lordicon } from '@/components/Lordicon'
import { Player } from '@lordicon/react'
import { useEffect, useRef } from 'react'

import avatar from '../../assets/avatar.json'
import Image from 'next/image'

import Alvesimg from '../../assets/4llvescontrastr.jpg'

export default function About() {
  const playerRef = useRef<Player>(null)

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  return (
    <div className="px-5">
      <header className="flex gap-6 items-center mb-7">
        <h1 className="text-left text-5xl font-bold text-slate-300">
          Sobre mim
        </h1>

        <Lordicon icon={avatar} />
      </header>

      <div className="flex gap-20">
        <section className="">
          <Image src={Alvesimg} alt="imagem de Alves" width={460} />
        </section>

        <section className="max-w-2xl">
          <p className="text-justify text-3xl leading-relaxed">
            <strong>Faaala galerinhaaaaaa...</strong> Tudo bem por ai? 😁 <br />
            Sou <strong>Jhonata Alves</strong> um jovem do interior do Pará que
            se interessou por tecnologia bem novo. Comecei na área como Tecnico
            em Manutenção de Computadores em 2010. Agora em 2024, sou criador de
            robôs. Tenho 27 anos, nasci, cresci e moro em Goianésia do Pará -
            PA, Brasil. Gosto de tocar violão, cajon, e ler mangás.
          </p>
        </section>
      </div>
    </div>
  )
}
