import Link from "next/link"
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/"><span className="mr-5">Home</span></Link>
      <Link href="/users"><span className="mr-5">Users</span></Link>
      <Link href="/api/auth/signin"><span className="mr-5">Login</span></Link>
    </div>
  )
}

export default NavBar