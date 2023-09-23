import Image from 'next/image'
import React from 'react'
import img2 from '../public/assets/Partner and Sponsors.png'
import partnerStyle from '../styles/Partner.module.css'
const Partner = () => {
  return (
    <section className={partnerStyle.section}>

        <div className={partnerStyle.topDiv}>
<h4>
    Partners and Sponsors
</h4>

<p>
    Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors
</p>

        </div>

        <div className={partnerStyle.bottomDiv}>
            <Image src={img2} alt=''/>

        </div>

        </section>
  )
}

export default Partner