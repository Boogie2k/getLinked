import React from 'react'
import heroStyles from '../styles/Hero.module.css'
import Image from 'next/image'
import manImage from '../public/assets/man-wearing-smart-glasses-touching-virtual-screen 1 (1).png'
import Imgg from "../public/assets/Image 1 (1).png"
import img2 from '../public/assets/star.png'
import img3 from '../public/assets/Purple-Lens-Flare-PNG.png'
const Hero = () => {
  return (
    
    

    <>
    
    <div className={heroStyles.hero} >
    <Image src ={img2} alt=''/>
   
        <h4 className={heroStyles.h4}>
          Igniting a Revolution in HR Innovation
            </h4>
<div className={heroStyles.divide}>
            <div  className={heroStyles.prizeSec} >
              <h4 className={heroStyles.prizeSecH4}>
                getlinked Tech Hackathon 1.0
              </h4>
              <p className={heroStyles.prizeSecP}>
                Participate in getlinked tech Hackathon 2023 stand 
a chance to win a Big prize
              </p>

              <button className={heroStyles.reg}> Register </button>

              <p className={heroStyles.time}>00<span className={heroStyles.clock}>H</span>  00<span className={heroStyles.clock}>M</span>    00<span  className={heroStyles.clock}>S</span></p>
            </div>
             <div className={heroStyles.imgDiv}>
              <Image className={heroStyles.img}  alt='' src={manImage}/>
              <div className={heroStyles.imgInnerDiv}>
                 <Image className={heroStyles.img}  alt='' src={Imgg}/>
          </div>
        </div>
        </div>

       
        </div>
        </>
  )
}

export default Hero