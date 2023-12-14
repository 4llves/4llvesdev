import { routesLinks } from '@/enums/route-enums'
import { Quantico } from 'next/font/google'
import Link from 'next/link'

const quantico = Quantico({
  subsets: ['latin'],
  weight: '400',
})

export default function NavBar() {
  return (
    <div className="flex flex-1 mx-14 items-center justify-center space-x-16 m-7">
      <Link href={routesLinks.home} className="h-5 w-4">
        <p className="text-3xl font-bold">4</p>
      </Link>

      <nav className={`${quantico.className} flex flex-1 flex-row`}>
        <ul className="flex space-x-4">
          <li className="text-justify capitalize group">
            <Link href={routesLinks.project}>
              <span className="group-hover:hidden">Projetos</span>
              <span className="group-hover:inline hidden text-green-300">
                {' '}
                &lt; Projetos /&gt;
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
