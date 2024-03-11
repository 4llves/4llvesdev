import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[360px] w-[720px] mx-auto">
      <section>
        <h1 className="text-5xl font-bold">Alves Jhonata</h1>
        <strong>Desenvolvedor RPA | Front-end</strong>
        <p>Desvendando problemas e criando soluções através da tecnologia</p>
      </section>
      <section>
        <Image
          className="shadow-person rounded-lg"
          src="https://github.com/4llves.png"
          alt="my photo"
          width={300}
          height={300}
        />
      </section>
    </div>
  )
}
