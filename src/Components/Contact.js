import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class Contact extends Component {

  render() {
     function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_8TvZVMyZ', e.target, 'user_vmn23nRCMYB9rmXogNwL2')
           .then((result) => {
              alert('Your message was sent, thank you!');
              document.getElementById("form").reset();
           }, (error) => {
                 alert('Sorry soemthing went wrong'); 
           });
     }
   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Contact Me.</span></h1>
            </div>
            <div className="ten columns">
               <h2 className="lead">Contact me</h2>
            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form id="form" className="contact-form" onSubmit={sendEmail}>
                  <input type="hidden" name="contact_number" />
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Subject</label>
                  <input type="text" name="user_subject" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input className="submit" type="submit" value="Send" />
               </form>
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Address and Phone</h4>
                  <p className="address">
                     Ananya Shetty<br />
                     2566 McAllister Street <br />
                     San Francisco, California, 94118<br />
                     <span>+12077666642</span>
                  </p>
               </div>
            </aside>
         </div>
      </section>
    );
  }
}

export default Contact;
