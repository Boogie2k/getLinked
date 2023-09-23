import React from 'react'
import timelineStyles from '../styles/Timeline.module.css'


const Timeline = () => {
let num =[ 1,2,3,4,5,6]


let tl =[{head :'Hackathon Announcement', body:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`, time:'November 18, 2023'},{head :'Hackathon Announcement', body:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`, time:'November 18, 2023'},{head :'Hackathon Announcement', body:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`, time:'November 18, 2023'}]

let tr =[{head :'Hackathon Announcement', body:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`, time:'November 18, 2023'},{head :'Hackathon Announcement', body:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`, time:'November 18, 2023'},{head :'Hackathon Announcement', body:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`, time:'November 18, 2023'}]

let timelineOrder = [{num:1, lHead :'Hackathon Announcement', lBody:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,lTime:'November 18, 2023', rHead :'Hackathon Announcement', rBody:`The getlinked tech hackathon 1.0 is formally announced`, rTime: 'November 18, 2023'},

{num:1, lHead :'Hackathon Announcement', lBody:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,lTime:'November 18, 2023', rHead :'Hackathon Announcement', rBody:`The getlinked tech hackathon 1.0 is formally announced`, rTime: 'November 18, 2023'},{num:1, lHead :'Hackathon Announcement', lBody:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,lTime:'November 18, 2023', rHead :'Hackathon Announcement', rBody:`The getlinked tech hackathon 1.0 is formally announced`, rTime: 'November 18, 2023'},{num:1, lHead :'Hackathon Announcement', lBody:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,lTime:'November 18, 2023', rHead :'Hackathon Announcement', rBody:`The getlinked tech hackathon 1.0 is formally announced`, rTime: 'November 18, 2023'},{num:1, lHead :'Hackathon Announcement', lBody:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,lTime:'November 18, 2023', rHead :'Hackathon Announcement', rBody:`The getlinked tech hackathon 1.0 is formally announced`, rTime: 'November 18, 2023'},{num:1, lHead :'Hackathon Announcement', lBody:`The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,lTime:'November 18, 2023', rHead :'Hackathon Announcement', rBody:`The getlinked tech hackathon 1.0 is formally announced`, rTime: 'November 18, 2023'},
]


  return (
    <div className={timelineStyles.timelineSection}>
        <h4 className={timelineStyles.h}>
            Timeline
        </h4>
        <p className={timelineStyles.p}>
            Here is the breakdown of the time we anticipate 
using for the upcoming event.
        </p>

        

         {
timelineOrder.map(item=>{return(
<div className={timelineStyles.innerDiv}>

<section>
            <div className={timelineStyles.left}>
           
<h4>
  {item.lHead}
</h4>
<p>{item.lBody}</p>
         </div>
             <div className={timelineStyles.center}>
                <div className={timelineStyles.circleContainer}>
        <div className={timelineStyles.purpleCircle}>
          {item.num}
        </div>
        <div className={timelineStyles.borderLine}></div>
    </div>
            </div>


            
             <div className={timelineStyles.right}>
             <h4>{item.rTime}</h4> 
            </div>
          </section>
          
          
      
          
          
           </div>
)})
          }
    </div>
  )
}

export default Timeline