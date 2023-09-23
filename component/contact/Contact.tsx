import React from 'react'
import contactStyles from "../../styles/Contact.module.css";
import IG from '../../public/assets/IG.svg'
import fb from '../../public/assets/f.svg'
import x from '../../public/assets/x.svg'
import ln from '../../public/assets/ri_linkedin-fill.svg'
import Image from 'next/image';

const Contact = () => {
  return (
     <div className={contactStyles.contactSection}>
        
        <div className={contactStyles.left}>
<h4> Get in Touch </h4>

<p>Contact
Information</p>

<p>
    27,Alara Street
Yaba 100012
Lagos State
</p>

<p>
    Call Us : 07067981819
</p>

<p>we are open from Monday-Friday
08:00am - 05:00pm</p>

<div>
<p style={{color:'#D434FE', fontSize:'1rem', marginTop:'4%'}}>
    Share on
</p>

<div className={contactStyles.iconDiv}>
    <Image src={IG} alt=''/>
     <Image src={fb} alt=''/>
      <Image src={x} alt=''/>
       <Image src={ln} alt=''/>
</div>
<div>


</div>
</div>
        </div>
<div className={contactStyles.right}>

    <h4>
        Questions or need assistance?
Let us know  about it!
    </h4>
    

    <input type='text'  placeholder='first Name'/>
    <input type='email' placeholder='Mail' />
    <input style={{minHeight:'7.4375rem'}} type='text' placeholder='Message' />

    <button type='button' >Submit</button>

</div>

    </div>
  )
}

export default Contact