'use client'
import { routesLinks } from '@/enums/route-enums'
import { Quantico } from 'next/font/google'
import Link from 'next/link'

import { NavigationMenuItem } from '@/components/ui/navigation-menu'

const quantico = Quantico({
  subsets: ['latin'],
  weight: '400',
})

const routesLinksArray = Object.values(routesLinks)

export default function NavBar() {
  return (
    <div
      className={`${quantico.className} flex flex-1 mx-14 items-center justify-center space-x-16 m-7 box-border`}
    >
      <Link href={routesLinks.home} className="h-5 w-4">
        <p className="text-3xl font-bold">4</p>
      </Link>

      {routesLinksArray.slice(1).map((route, i) => (
        <NavigationMenuItem key={i} className="relative capitalize">
          <span className="group text-green-300 px-5">
            <strong className="group-hover:inline hidden">&lt; </strong>
            <Link href={route} legacyBehavior passHref>
              {route}
            </Link>
            <strong className="group-hover:inline hidden"> /&gt;</strong>
          </span>
        </NavigationMenuItem>
      ))}

      <Link href={routesLinks.home} className="h-5 w-4">
        <p className="text-3xl font-bold">4</p>
      </Link>

      {/* <ul className="flex space-x-4">
        <li className="flex flex-1 w-full max-h-screen">
          {routesLinksArray.slice(1).map((route, i) => (
            <Link key={i} href={route} className="relative">
              <span className="group text-green-300 px-5">
                <strong className="group-hover:inline hidden">&lt; </strong>
                {route.split('/')}
                <strong className="group-hover:inline hidden"> /&gt;</strong>
              </span>
            </Link>
          ))}
        </li>
      </ul> */}
    </div>
  )
}
