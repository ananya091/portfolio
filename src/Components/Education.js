import React, { Component } from 'react';

class Education extends Component {
  render() {
     var usfPic = "images/USF_logo.png";
     var nittePic = "images/nitte.png";
    return (
      <section id="education">
         <div className="text-container">
            <div className="row education">
               <div className="h1">
                  <h1>Education</h1>
               </div>
               <div className="three columns">
                  <img className="profile-pic"  src={usfPic} alt="USF logo Pic" />
               </div>
               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns list">
                        <div>
                           <h2>University of San Francisco</h2>
                           <p className="info">Master's in Computer Science<br/><em className="date">2019-2021</em></p> 
                           <p>Courses: Principles of Software Development, Algorithms, Data Processing in Cloud, Systems Foundation, Big Data, Cloud Computing in AWS, GCP and Azure.</p></div>       
                     </div>
                  </div>
               </div>
               <div className="three columns">
                  <img className="profile-pic"  src={nittePic} alt="USF logo Pic" />
               </div>
               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        <div>
                           <h2>NMAM Institute of Technology, Karnataka,India</h2>
                           <p className="info">Bachelor's in Electronics & Communication<br/><em className="date">2012-2016</em></p> 
                           <p>Courses: Data Structures,Computer Networks.</p></div>       
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default Education;
