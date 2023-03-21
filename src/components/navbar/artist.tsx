import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Jobboard
          </Link>
        </li>
        <li>
          <Link href="/support">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href="/support">
            Support
          </Link>
        </li>
        <li>
          <Link href="/Settings">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}


