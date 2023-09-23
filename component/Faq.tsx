import React from 'react'
import img2 from '../public/assets/cwok_casual_21 1.png'
import Image from 'next/image'
import faqStyles from '../styles/Faq.module.css'


const Faq = () => {

    let faqs =['Can I work on a project I started before the hackathon?', 'What happens if I need help during the hackathon?', 
'What happens if I dont have an idea for a project?', 'Can I join a team or do I have to come with one?', 'What happens after the hackathon ends',
'Can I work on a project I started before the hackathon?' 
]

faqs.map(item=>{console.log(item)})
console.log(faqs)
  return (
    <div className={faqStyles.faqSection}>
        <div className={faqStyles.left}>
<p className={faqStyles.h}>
Frequently Ask
<span> Question</span> 
</p>


<p className={faqStyles.p}>
    We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0
</p>

<section>
   {/* <div className={faqStyles.faqs}>
<p>
    Can I work on a project I started before the hackathon? 
</p> <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z" fill="#D434FE"/>
</svg>

        </div>
  */}
  {faqs.map(item=>{
    return(
         <div className={faqStyles.faqs}>
<p>
    {item}
</p> <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z" fill="#D434FE"/>
</svg>

        </div>
    )
  })}


</section>


        </div>

        <div>
<Image src ={img2} alt=''/>
            </div>
    </div>
  )
}

export default Faq