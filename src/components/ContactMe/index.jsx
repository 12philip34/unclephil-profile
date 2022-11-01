import React from 'react';
import { useRef } from 'react';
import style from './style.module.css';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pyqnyq9', 'template_henbcgv', form.current, 'XXqzEKD0pPvPMnpgN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <div>
            <div className={style.formContainer} id='contact'>
                <form ref={form} className={style.formBox} onSubmit={sendEmail}>
                    <div className={style.fieldSet}>
                        <label htmlFor="name" className={style.label}>Name:</label>
                        <input type="text" placeholder='name' id='name' className={style.inputBox} name='name' />
                    </div>
                    <div className={style.fieldSet}>
                        <label htmlFor="email" className={style.label}>Email:</label>
                        <input type="email" placeholder='email' id='email' className={style.inputBox} name='email' />
                    </div>
                    <div className={style.fieldSet}>
                        <label htmlFor="subject" className={style.label}>Subject</label>
                        <input type="text" placeholder='subject' id='subject' className={style.inputBox} name='subject' />
                    </div>
                    <textarea className={style.textArea} name="message" cols="30" rows="10" placeholder="message here:" required></textarea>
                    <div className={style.submitBox}>
                        <input type="submit" value="Send Message" className={style.submitButton} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe