import React, { Component } from 'react';

class Projects extends Component {
  render() {
    var gcp = 'images/GCP.png';
    var systemdesign = 'images/ARM.jpg';
    var tourist = 'images/Tourist.jpeg';
    var sports = 'images/sports.jpg'
    var traffic = 'images/traffic.jpg';

    return (
      <section id="projects">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div className="cardsrow">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img className="profile-pic"  src={gcp} alt="USF logo Pic" />
                     <h1>Batch Processing of Data using DataFlow and BigQuery</h1> 
                  </div>
                  <div class="flip-card-back">
                    <p>* Process large (raw) data to produce meaningful, summarized data which involves manual data inspection, programmatic data cleanup & data manipulation, and analysis of 
                      the produced data.
                      <br/>
                      * Worked on MapReduce framework and used Apache Beam Java SDK to develop a data processing pipeline that can efficiently process big data in cloud.
                    </p> 
                  </div>
                </div>
              </div>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                   <img className="profile-pic"  src={systemdesign} alt="USF logo Pic" />
                    <h1>Distinct Caching Techniques on Raspberry Pi</h1> 
                  </div>
                  <div class="flip-card-back">
                    <p>* Implementation and Performance Analysis of the 3 cache techniques: Direct Mapped Cache, Fully Associative Cache and Set Associative Cache.
                     </p> 
                  </div>
                </div>
              </div>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                     <img className="profile-pic"  src={tourist} alt="USF logo Pic" />
                      <h1>Tourist Advisor Web Application</h1> 
                  </div>
                  <div class="flip-card-back">
                    <p>* Created a Travel Advisor App comprising of all hotel in Bay Area and corresponding reviews. The user can submit a review which can be edited/deleted.
                      <br/>
                      * Developed this using Jetty Server/JDBC where in users can explore different tourist spots with review of a particular tourist location using Expedia data and Google API.
                    </p> 
                  </div>
                </div>
              </div>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                   <img className="profile-pic"  src={sports} alt="USF logo Pic" />
                    <h1>Sports Club Web Application</h1> 
                  </div>
                  <div class="flip-card-back">
                    <p>* Created a Single Page Application using ReactJs and Java where in users can explore different services provided by the sports club and register for any sport using Springboot and Reactjs as front end.
                    </p> 
                  </div>
                </div>
              </div> 
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                     <img className="profile-pic"  src={traffic} alt="USF logo Pic" />
                      <h1>Smart Traffic Controller</h1> 
                  </div>
                  <div class="flip-card-back">
                   <p>* Teamed in developing an automated traffic controller that captured the image of a lane in a junction that calculated the total number of vehicles on that lane, based varying signal timings.
                    </p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </section>
  );
  }
}

export default Projects;
