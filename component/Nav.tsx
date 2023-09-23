import React from 'react'
import NavStyles from'../styles/Nav.module.css'
import Link from 'next/link'


const Nav = () => {
  return (
    <>
   <nav className={`${NavStyles.nav} justify-evenly px-4`}>
        <h4 className={NavStyles.h4}>
            get<span className={NavStyles.linked}>linked</span>
        </h4>

        {/*<div>
            <span>T</span><span>L</span>
            </div>*/}

            

            <ul className={NavStyles.ul}>
                <li>Timeline</li>
                <li> Overview</li>
                <li>FAQs</li>
               <Link href ="/contact"> <li> Contact</li></Link> 
                <Link href ='/register'> <button className={NavStyles.reg}>Register</button></Link>
            </ul>

            
          
    </nav> 


    </>
  )
}

export default Nav