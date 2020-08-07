import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar() {

    useEffect(() => {

    }, [])

    return (
        <div>
            <head>
                <title>Sina vameghi</title>
            </head>
            <navbar>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}



