import React, { Component } from 'react'
import myPDF from '../Resume.pdf';


class Header extends Component {
  render() {
     var profilepic = "images/profilePicture.JPG";
    return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#education">Education</a></li>
               <li><a className="smoothscroll" href="#projects">Projects</a></li>
               <li><a className="smoothscroll" href="#experience">Experience</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
                <img className="profile-pic"  src={profilepic} alt="TAnanya Shetty Profile Pic" />
               <h1 className="responsive-headline">Ananya Shetty</h1>
               <h2>Full-stack developer</h2>
               <div className="download">
                     <p>
                        <a href={myPDF} download="Resume.pdf"className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
               </div>
               <hr />
            </div>
         </div>
   </header>
    );
  }
}

export default Header;
