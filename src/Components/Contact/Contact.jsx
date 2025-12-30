import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        formData.append("access_key", "83802935-784b-4fc3-835d-1def4a271842")

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json())

        if (res.success) {
            alert(res.message)
            event.target.reset()
        }
    }

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                {/* LEFT */}
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I’m currently open to new projects and learning opportunities, and I’d love to collaborate on building modern, user-friendly web solutions.
                    </p>

                    <div className="contact-details">

                        {/* Email */}
                        <a
                            href="mailto:dhanushsekar2610@gmail.com"
                            className="contact-detail"
                        >
                            <img src={mail_icon} alt="email" />
                            <p>dhanushsekar2610@gmail.com</p>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+918124474699"
                            className="contact-detail"
                        >
                            <img src={call_icon} alt="phone" />
                            <p>+91 81244 74699</p>
                        </a>

                        {/* Linkedin */}
                        <a
                            href="https://www.linkedin.com/in/dhanu-sh/"
                            className="contact-detail"
                            target="_blank"
                        >
                            <img src={linkedin_icon} alt="phone" />
                            <p>linkedin.com/in/dhanu-sh</p>
                        </a>

                        {/* Location */}
                        <a
                            href="https://www.google.com/maps/place/Kanchipuram,+Tamil+Nadu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-detail"
                        >
                            <img src={location_icon} alt="location" />
                            <p>Kanchipuram, Tamil Nadu</p>
                        </a>

                    </div>
                </div>

                {/* RIGHT */}
                <form onSubmit={onSubmit} className='contact-right'>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />

                    <label>Your Email</label>
                    <input type="email" placeholder='Enter your email' name="email" required />

                    <label>Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required />

                    <button type='submit' className="contact-submit">
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
