import React from 'react'
import footerStyles from '../styles/Footer.module.css'
import IG from '../public/assets/IG.svg'
import fb from '../public/assets/f.svg'
import x from '../public/assets/x.svg'
import ln from '../public/assets/ri_linkedin-fill.svg'
import Image from 'next/image'
import grp from "../public/assets/Group.svg";

import loc from '../public/assets/loc.svg'

const Footer = () => {
  return (
    <section className={footerStyles.section}>
<div className={footerStyles.topDiv}>
<div className={footerStyles.left}>
  <p className={footerStyles.h}>
    get<span>linked</span></p>
    
    <p className={footerStyles.longP}>Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology</p>

<div><p>Terms of use </p> <p>Privacy Policy</p></div>
    </div><div className={footerStyles.center}>
      <h4>Useful Links</h4>

      <p>Overview</p>

      <p>Timeline</p>
      <p>FAQs</p>

      <p>Register</p>

      <p className={footerStyles.imgP}>Follow us <Image src={IG} alt=''/>  <Image src={fb} alt=''/> <Image src={x} alt=''/><Image src={ln} alt=''/></p>
      </div><div className={footerStyles.right}><h4>Contact Us</h4>

      

<div><Image src={grp} alt=''/>  <p>+234 6707653444</p> </div>
<div>  <Image src={loc} alt=''/>  <p>27,Alara Street
Yaba 100012
Lagos State</p> </div></div>
</div>

<div className={footerStyles.bottomDiv}>
<p>All rights reserved. © getlinked Ltd.</p>
</div>
      </section>
  )
}

export default Footer