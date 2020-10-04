import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Anzileiro's Blog.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}
