import React, { Component } from "react";

class Contact extends Component {
    render() {

        return (
            <section id="contact" style={{ zIndex: "10", backgroundColor: "#"}}>
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "white" }}>
                    <span>Contact</span>
                    </h1>
                    <form action="https://getform.io/f/7da2abcb-e589-4a62-ba2e-4a2b47c432e4"
                        method="POST"
                        encType="multipart/form-data">

                        <div className="flex">
                            <div>
                                <label className="form-title-settings">Name</label>
                                <br/>
                                <input type="text" className="input" name="name"/>
                            </div>
                            <div>
                                <label className="form-title-settings">Phone Number</label>
                                <br/>
                                <input type="text" className="input" name="phone_number"/>
                            </div>
                            <div>
                                <label className="form-title-settings">Email</label>
                                <br/>
                                <input type="text" className="input" name="email"/>
                            </div>
                            <div>
                                <label className="form-title-settings">Subject</label>
                                <br/>
                                <input type="text" className="input" name="subject"/>
                            </div>
                            <div>
                                <label className="form-title-settings">Message</label>
                                <br/>
                                <textarea rows="10" className="textarea" name="message"/>
                            </div>
                            <button className="button">
                                    Send Message
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        );
    }
}

export default Contact;
