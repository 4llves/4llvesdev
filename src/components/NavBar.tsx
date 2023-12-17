'use client'
import { routesLinks } from '@/enums/route-enums'
import { Quantico } from 'next/font/google'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu'

const quantico = Quantico({
  subsets: ['latin'],
  weight: '400',
})

const routesLinksArray = Object.values(routesLinks)

export function NavBar() {
  return (
    <div
      className={`${quantico.className} flex flex-1 mx-14 items-center justify-between space-x-16 m-7 box-border`}
    >
      <Link href={routesLinks.home} className="flex items-centerh-5 w-4">
        <p className="ml-20 text-3xl font-bold">4</p>
      </Link>

      <NavigationMenu className="flex justify-between max-w-lg">
        {routesLinksArray.slice(1).map((route, i) => (
          <NavigationMenuItem
            key={i}
            className="flex relative capitalize justify-between"
          >
            <span className="group text-green-300">
              <strong className="group-hover:text-green-300 text-transparent">
                &lt;{' '}
              </strong>
              <Link href={route} legacyBehavior passHref className="">
                {route}
              </Link>
              <strong className="group-hover:text-green-300 text-transparent">
                {' '}
                /&gt;
              </strong>
            </span>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>

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
