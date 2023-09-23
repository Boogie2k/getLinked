import React from 'react'
import rulesStyles from '../styles/Rules.module.css'
import ruleImg from '../public/assets/7450159 1 (1).png'
import Image from 'next/image'

const Rules = () => {
  return (
   <div className={rulesStyles.rulesSection} >
    <div className={rulesStyles.rules}>
        <p className={rulesStyles.h}>Rules and
<span> Guidelines</span></p>

<p className={rulesStyles.p}>Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</p>
    </div>

    <div>
<Image src={ruleImg} alt=''/>
    </div>

    </div>
  )
}

export default Rules