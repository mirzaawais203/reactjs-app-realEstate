import './PopUpModel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const PopUpModel = ({ onClose }) => {
    const modelRef = useRef();
    const formRef = useRef();

    const closeModel = (e) => {
        if (modelRef.current === e.target) {
            onClose();
        }
    }

    const sendEmailAndNavigate = (e) => {
        e.preventDefault();

        // Send email
        emailjs.sendForm('service_c60za7w', 'template_bouwyzg', formRef.current, {
            publicKey: 'Boq2-Wzthufrjzl8I',
        }).then(
            () => {
                console.log('SUCCESS!');
                // After sending email, navigate to the specified link
                 window.open("https://drive.google.com/file/d/1HZ9D78OZbOfNQI5mQlCR6Lwizy6DTId9/view?usp=sharing", "_blank");
        },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );

        // Reset the form
        e.target.reset();
    }

    return (
        <div className='popup' ref={modelRef} onClick={closeModel}>
            <div className='popup-x'>
                <FontAwesomeIcon icon={faTimes} className='popup-close' onClick={onClose} />
                <div className='popup-form'>
                    <h3>Download E-Brochure</h3>
                    <form ref={formRef} onSubmit={sendEmailAndNavigate}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="user_name" id="name" placeholder='Full Name' required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="user_email" id="email" placeholder='Email' required />
                        <label htmlFor="phone">Phone:</label>
                        <input type="number" name="user_phone" id="phone" placeholder='0301-1234567' required />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopUpModel;
