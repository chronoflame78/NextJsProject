import Image from 'next/image'
import Link from "next/link"
import ProductCard from "./components/ProductCard"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/authOptions" 
import { useState } from "react";


import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
  ssr: false,
  loading: () => <p>...Loading</p>
})

export default async function Home() {
  const session = await getServerSession(authOptions);

  //const [isVisible, setIsVisible] = useState(false);

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
      {/* <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent/>} */}
    </main>
  )
}
