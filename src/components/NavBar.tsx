import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Sobre</Link>
        </li>
        <li>
          <Link href="/">Projetos</Link>
        </li>
        <li>
          <Link href="/">Talks</Link>
        </li>
        <li>
          <Link href="/">Podcast</Link>
        </li>
      </ul>
    </div>
  )
}
