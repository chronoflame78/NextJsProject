import Image from 'next/image'
import Link from "next/link"
import ProductCard from "./components/ProductCard"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import coffee from '@/public/images/coffee.jpg'

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      {/* <Image src={coffee} alt=""/> */}
      <Image src="https://bit.ly/react-cover" 
      // width={300} 
      // height={170} 
      fill
      className="object-cover"
      alt=""
      priority
      />
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  )
}
