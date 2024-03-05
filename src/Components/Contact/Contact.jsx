import "./Contact.css";
import { useRef, useState } from 'react'
import 'react-phone-number-input-plus/style.css'
import PhoneInput from 'react-phone-number-input-plus'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [value, setValue] = useState()
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c60za7w', 'template_bouwyzg', form.current, {
        publicKey: 'Boq2-Wzthufrjzl8I',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()

  }
  return (
    <div>
      <div className="contact">
        <h3>CONTACT US</h3>
        <div className="contact-container">
          <div className="contact-form-container">
            <form action="" className="conatct-form" ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="user_name" id="name" placeholder='Full Name' required />
              <label htmlFor="email">Email:</label>
              <input type="email" name="user_email" id="email" placeholder='Email' required />
              <label htmlFor="phone">Phone:</label>
              <PhoneInput
                className='country-input'
                defaultCountry="PK"
                placeholder="Phone number"
                value={value}
                onChange={setValue}
                required
                name="user_phone"
                id="phone"
              />
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" required placeholder='Write Your Message Here' rows="5"></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="contact-map">
            <iframe
              title="unique"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.1823674951568!2d73.13837317551018!3d31.438517409617777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268f81b2ee939%3A0xf63788f52a5ff58c!2sMall%20of%20Faisalabad!5e0!3m2!1sen!2s!4v1705733984882!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: "0", marginTop: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="contact-map-bottom">
              <p>Gracia</p>
              <p>Office Address :The park Residences , Ejyption Block Bahria Town Lahore, Pakistan</p>
              <p>Working Hours : Monday to Saturday 11:00 am to 07:00 pm</p>
              <p>Phone No : 0321-1999999</p>
              <p>Email: Graciapk.com</p>
              <p>Gracia.pk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;