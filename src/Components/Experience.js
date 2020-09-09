import React, { Component } from 'react';


class Experience extends Component {
render() {
  var accenturePic = "images/Accenture.png";
  return (
    <section id="experience">
      <div className="text-container">
        <div className="row experience">
          <div className="h1">
            <h1>Experience</h1>
          </div>
          <div className="three columns">
            <img className="profile-pic"  src={accenturePic} alt="Accenture logo Pic" />
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns list">
                <div>
                  <h2>Accenture Private Solutions Limited</h2>
                  <p className="info">Application Development Analyst<br/><em className="date">2016-2019</em></p> 
                  <p>
                  * Designed and developed a web application that was used as a learning tool by more than 400 K employees at Accenture using angularJs and ASP.Net.
                  <br/>
                  * Accelerated goal to increase performance by more than 50 % by moving the database from MSSQL to AWS services.
                  <br/>
                  * Developed a model that collected more than 10K course data and was streamed to an artificial intelligence module that gave predictions on different skills important for a learner using python and MySQL.
                  <br/>
                  * Handled and modified existing data model, stored procedures and Restful APIs to correct coding errors, upgraded interfaces and improved average performance by 35%.
                  <br/>
                  * Scrum master for a team of 8 to deliver a major part of the project where the team had to change the skill of each employee to the skill recommended by Accenture.
                  <br/>
                  </p>
                </div>       
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>);
  }
}

export default Experience;
