'use client'
import { useSession } from "next-auth/react"
import Link from "next/link"
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/"><span className="mr-5">Home</span></Link>
      <Link href="/users"><span className="mr-5">Users</span></Link>
      {status === 'loading' && <div>...Loading</div>}
      {status === 'authenticated' && <div>
        {session.user!.name}
        <Link className="ml-3" href="/api/auth/signout">Sign Out</Link>
        </div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin"><span className="mr-5">Login</span></Link>}
    </div>
  )
}

export default NavBar