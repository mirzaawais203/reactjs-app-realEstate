import "./Contact.css";
import { useRef } from 'react'
// import 'react-phone-number-input-plus/style.css'
// import PhoneInput from 'react-phone-number-input-plus'
import emailjs from '@emailjs/browser';
// Import React Toastify components and CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  // const [value, setValue] = useState()
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c60za7w', 'template_bouwyzg', form.current, {
        publicKey: 'Boq2-Wzthufrjzl8I',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          // Display success toast
          toast.success("Your mail has been sent successfully!");
          // Reset the form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Display error toast
          toast.error("Failed to send message. Please try again.");
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
              <input type="number" name="user_phone" id="phone" placeholder='Phone Number' required />
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" placeholder='Write Your Message Here' rows="5"></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="contact-map">
            <iframe
              title="unique"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2752.119694482084!2d74.17663624723231!3d31.389800177891736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffa85b28bc51%3A0xa30d66a6ca0eca0d!2sBahria%20Springs%20Park!5e1!3m2!1sen!2s!4v1710742404799!5m2!1sen!2s"
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
      <ToastContainer />
    </div>
  );
};

export default Contact;