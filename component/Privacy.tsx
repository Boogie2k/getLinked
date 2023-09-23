import Image from 'next/image'
import React from 'react'
import img2 from '../public/assets/08 1.png'
import privacyStyles from '../styles/Privacy.module.css'
import img3 from '../public/assets/Vector (6).png'
import list from "../public/assets/list terms.svg";

const Privacy = () => {
  return (
   <section className={privacyStyles.section}>

    <div className={privacyStyles.upperDiv}>
<p className={privacyStyles.h}>
    Privacy Policy and 
<span> Terms</span> 
</p>
    <p style={{fontWeight:'400', fontSize:'0.875rem', opacity:'0.75'}}>
        Last updated on September 12, 2023
    </p>
    <p  style={{fontWeight:'400', fontSize:'0.875rem', width:'70%'}}>Below are our privacy & policy, which outline a lot of goodies. 
it’s our aim to always take of our participant</p>

<div className={privacyStyles.bottomDiv}>
    <p>
        At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.
        </p>
        <h4>
            Licensing Policy
        </h4>
        <h5>
            Here are terms of our Standard License:
        </h5>

        <ul>
 <li> <Image src={list} alt='' /> The Standard License grants you a non-exclusive right to
navigate and register for our event </li> 

 <li> <Image src={list} alt='' /> The Standard License grants you a non-exclusive right to
navigate and register for our event </li> 
</ul>
        <button>
            Read More
        </button>
</div>
    </div>

    <div className={privacyStyles.imgDiv}>
<Image src={img2} alt=''/>

<div className={privacyStyles.innerImgDiv}>
 <Image src={img3} alt=''/>
</div>




    </div>
   </section>
  )
}

export default Privacy