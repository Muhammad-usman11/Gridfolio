import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cardx from '@/components/Cardx'
import Cardy from '@/components/Cardy'
import Footer from '@/components/Footer'
import Servicecard from '@/components/Servicecard'
import Getincard from '@/components/Getincard'
import Navbar from '@/components/Navbar'



export default function Home() {
  return (
   <>
    <div className=" py-[70px] bg-[#eed6c1] " > 
      <Navbar/>
      <Cardx/>
      <Cardy/>
      <Servicecard/>
      <Getincard/>
      <Footer/>
      
    </div>
   </>
  )
}
