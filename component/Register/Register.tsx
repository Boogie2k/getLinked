import React from 'react'
import registerStyles from "../../styles/Register.module.css";
import IG from '../../public/assets/IG.svg'
import fb from '../../public/assets/f.svg'
import x from '../../public/assets/x.svg'
import ln from '../../public/assets/ri_linkedin-fill.svg'
import img2 from "../../public/assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import Image from 'next/image';

const Register = () => {
  return (
     <div className={registerStyles.contactSection}>
      
        <div className={registerStyles.left}>
  <Image src={img2} alt=''/>
        </div>
<div className={registerStyles.right}>
<div>
<h4>Register</h4>

<p>Be part of this movement!</p>
<p className={registerStyles.acct}>CREATE YOUR ACCOUNT</p>
    </div>
<section>
    <div>
        <div>
            <p>
Team’s Name
</p>

<input type='text' placeholder='Enter the name of your group'/>

        </div>
        <div>
<p>
Team’s Name
</p>

<input type='text' placeholder='Enter the name of your group'/>
        </div>
        
        <div>
            <p>
Team’s Name
</p>

<input type='text' placeholder='Enter the name of your group'/>

        </div>
    </div>

     <div>
        <div>
<p>
Team’s Name
</p>

<input type='text' placeholder='Enter the name of your group'/>
        </div>
        
        <div>
            <p>
Team’s Name
</p>

<input type='text' placeholder='Enter the name of your group'/>

        </div>
        <div>
<p>
Team’s Name
</p>

<input type='text' placeholder='Enter the name of your group'/>
        </div>
    </div>

</section>
   
  <p className={registerStyles.regisP}>
Please review your registration details before submitting
    </p>

    <p>
     <span></span>   I agreed with the event terms and conditions  and privacy policy
    </p>

    <button>
        Register Now
    </button>
</div>

    </div>
  )
}

export default Register