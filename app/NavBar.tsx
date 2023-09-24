import Link from "next/link"
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/"><span className="mr-5">Home</span></Link>
      <Link href="/users"><span className="mr-5">Users</span></Link>
    </div>
  )
}

export default NavBar