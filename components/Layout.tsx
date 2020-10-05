import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link href="/" as={process.env.BACKEND_URL + '/'}>
                    <a>Home</a>
                </Link>{' '}
            |{' '}
                <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
                    <a>About</a>
                </Link>{' '}
            |{' '}
                <Link href="/posts" as={process.env.BACKEND_URL + '/posts'}>
                    <a>Posts</a>
                </Link>{' '}
            </nav>
        </div>
    )
}

type HeaderProps = {
    title?: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <Navbar />
            </header>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <footer>
                <hr />
                <span>I'm here to stay (Footer)</span>
            </footer>
        </div>
    )
}

const Layout = ({ children, title = `Anzileiro's Blog` }: Props) => (
    <div>
        <Header title={title} />
        {children}
        <Footer />
    </div>
)

export default Layout