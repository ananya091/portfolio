import React, { Component } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class About extends Component {
  render(){ 
   var profilepic = "images/profilePicture.JPG";
   const percentage1 = 75;
   const percentage2 = 66;
   const percentage3 = 50;
  return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profilepic} alt="TAnanya Shetty Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>Software engineer with experience in developing web and mobile applications. A passionate coder for usability and user experience with technical knowledge to create cool digital experiences.</p>
               <p> My experience includes programming languages such as ReactJS, AngularJS, C#, Java, MySQL, AWS, GCP, Bootstrap, jQuery.</p>
               <div className="row">
                  <div className="skillDetails"> 
                  <span className="progressrate">
                     <CircularProgressbar
                        value={percentage1}
                        text={`${percentage1}%`}
                        styles={buildStyles({
                           textColor: '#444',
                           pathColor: '#444',
                           trailColor: '#fff'
                     })}/>  
                     <h2 className="skillDetail">Web development</h2>    
                  </span>
                    
                   <span className="progressrate">
                     <CircularProgressbar
                        value={percentage2}
                        text={`${percentage2}%`}
                        styles={buildStyles({
                           textColor: '#444',
                           pathColor: '#444',
                           trailColor: '#fff'
                     })}/> 
                     <h2 className="skillDetail">Cloud Computing</h2>       
                  </span>
                  <span className="progressrate">
                     <CircularProgressbar
                        value={percentage3}
                        text={`${percentage3}%`}
                        styles={buildStyles({
                           textColor: '#444',
                           pathColor: '#444',
                           trailColor: '#fff'
                     })}/>  
                     <h2 className="skillDetail">System Desgin</h2>      
                  </span>                    
                  </div>
                  
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default About;
