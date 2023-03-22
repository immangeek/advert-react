import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/artist">
            Jobboard
          </Link>
        </li>
        <li>
          <Link href="/artist/leaderboard">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href="/artist/support">
            Support
          </Link>
        </li>
        <li>
          <Link href="/artist/settings">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}


