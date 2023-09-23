import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/component/Nav'
import Hero from '@/component/Hero'
import Introduction from '@/component/Introduction'
import Rules from '@/component/Rules'
import Judge from '@/component/Judge'
import Faq from '@/component/Faq'
import Timeline from '@/component/Timeline'
import Prizes from '@/component/Prizes'
import Partner from '@/component/Partner'
import Privacy from '@/component/Privacy'
import Footer from '@/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
<Nav/>
<Hero/>
<Introduction/>
<Rules/>
<Judge/>
<Faq/>
<Timeline/>
<Prizes/>
<Partner/>
<Privacy/>
<Footer/>
  </>
  )
}
