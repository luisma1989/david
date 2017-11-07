import React, {Component} from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <section className="contact page" id="CONTACT">
        <div className="section_overlay">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 wow bounceIn">
                    <div className="section_title">
                        <h2>CONTACTA</h2>
                    </div>
                </div>
            </div>

            <div className="contact_form wow bounceIn">
                <div className="container">
                    <div className="form_error text-center">
                        <div className="name_error hide error">Please Enter your name</div>
                        <div className="email_error hide error">Please Enter your Email</div>
                        <div className="email_val_error hide error">Please Enter a Valid Email Address</div>
                        <div className="message_error hide error">Please Enter Your Message</div>
                    </div>
                    <div className="Sucess"></div>
                    <form role="form">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="name" placeholder="Name" />
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" id="message" rows="25" cols="10" placeholder="  Message Texts..."></textarea>
                                <button type="button" className="btn btn-default submit-btn form_submit">SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default Contact
