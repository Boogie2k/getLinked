import React from 'react'
import introductionStyles from '../styles/Introduction.module.css'
import Image from 'next/image'
import ideaImg from '../public/assets/the big idea 1.png'
const Introduction = () => {
  return (
  <>
  <div className={introductionStyles.introduction}>

    <div className={introductionStyles.bigIdea}>

<Image src = {ideaImg} alt=''/>

<p> The big idea</p>
    </div>
    <div className={introductionStyles.introTo}>
<h4>
    Introduction to getlinked tech Hackathon 1.0
</h4>
<p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of</p>

    </div>
  </div>
  </>
  )
}

export default Introduction