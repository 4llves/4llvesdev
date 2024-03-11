import { Quantico } from 'next/font/google'
import Image from 'next/image'

const quantico = Quantico({
  subsets: ['latin'],
  weight: '700',
})

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-10">
      <section className="flex flex-col gap-y-6">
        <h1
          className={`${quantico.className} font-sans text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-500/30`}
        >
          Alves Jhonata
        </h1>
        <div>
          <strong>Desenvolvedor RPA | Front-end</strong>
          <p>Desvendando problemas e criando soluções através da tecnologia</p>
        </div>

        <p className={`${quantico.className} font-bold`}>
          Pressione{' '}
          <button className="bg-slate-100 text-blue-700 px-1 rounded-sm">
            Ctrl + K
          </button>{' '}
          para Iniciar
        </p>
      </section>
      <section>
        <Image
          className="shadow-person rounded-lg"
          src="https://github.com/4llves.png"
          alt="my photo"
          width={250}
          height={250}
        />
      </section>
    </div>
  )
}
