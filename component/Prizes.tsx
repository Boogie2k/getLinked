import React from 'react'
import prizesStyles from '../styles/Prizes.module.css'
import Image from 'next/image'
import img2 from '../public/assets/9486889 1 (1).png'

import img3 from '../public/assets/Rewards.png'

const Prizes = () => {
  return (
    <section className={prizesStyles.prizeSec}>
    <div className={prizesStyles.left}>
        <div className={prizesStyles.imgTwoDiv}>
       <Image src={img2} alt=''/> 
       </div>
    </div>

    <div className={prizesStyles.right}>
<div className={prizesStyles.topRDiv}>
<p className={prizesStyles.h}>
    Prizes and 
<span className={prizesStyles.span}> Rewards</span> 
</p>

<p className={prizesStyles.p}>
    Highlight for the prizes or Rewards for the winners and Participants
</p>
</div>

<div className={prizesStyles.imgThreeDiv}>

    <Image src={img3} alt=''/>
</div>
    </div>
  </section>)
}

export default Prizes