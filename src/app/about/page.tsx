'use client'
import { Lordicon } from '@/components/Lordicon'

import avatar from '../../assets/avatar.json'

export default function About() {
  return (
    <div className="flex gap-10 w-3/6">
      <section className="flex">
        <div className="items-center justify-center gap-4">
          <h1 className="text-left text-5xl font-bold text-slate-300">
            Sobre mim
          </h1>
          <Lordicon icon={avatar} />
        </div>
      </section>

      <section className="flex">
        <p>
          <strong>Faaala galerinhaaaaaa...</strong> Tudo bem por ai? 😁 <br />
          Sou <strong>Jhonata Alves</strong> um jovem do interior do Pará que se
          interessou por tecnologia bem novo. Comecei na área como Tecnico em
          Manutenção de Computadores em 2010. Agora em 2024, sou criador de
          robôs. Tenho 26 anos, nasci, cresci e moro em Goianésia do Pará - PA,
          Brasil. Gosto de tocar violão, cajon, e ler mangás.
        </p>
      </section>
    </div>
  )
}
