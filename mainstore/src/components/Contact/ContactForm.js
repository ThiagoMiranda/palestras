import React from 'react'

export default () => (
    <div className="contact_form">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="contact_form_container">
                        <div className="contact_form_title">Get in Touch</div>

                        <form action="#" id="contact_form">
                            <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                                <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your name" required="required" data-error="Name is required." />
                                <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Your email" required="required" data-error="Email is required." />
                                <input type="text" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your phone number" />
                            </div>
                            <div className="contact_form_text">
                                <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                            </div>
                            <div className="contact_form_button">
                                <button type="submit" className="button contact_submit_button">Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <div className="panel"></div>
    </div>
)