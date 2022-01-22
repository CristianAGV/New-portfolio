import React, {useRef} from 'react';
import Slide from 'react-reveal/Slide';
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {

    
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);
    
        emailjs.sendForm('service_6oxi8it', 'template_meucxpd', e.target, 'user_20BHE7vx62R35rTt9WUKG')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
    
        e.target.reset()
    }

    



  return <section className='footer' id='contact'>
    <article className='section-container reset'>
        <h2 className='section-title'>Let's Talk</h2>

        <Slide bottom>
            <form className='form-container' ref={form} onSubmit={sendEmail}>
                <div className='form-column'>
                    <div className='form-input'>
                        <label htmlFor='name'>First Name</label>
                        <input type='text'id='name'/>
                    </div>

                    <div className='form-input'>
                        <label htmlFor='lastname'>Last Name</label>
                        <input type='text' id='lastname'/>
                    </div>

                    <div className='form-input'>
                        <label htmlFor='email'>Email Adress</label>
                        <input type='email' id='email'/>
                    </div>

                    <input type='submit' value='Send' className='form-btn'/>
                </div>

                <div className='form-column'>
                    <div className='form-input'>
                        <label htmlFor='message'>Your Message</label>
                        <textarea id='message' rows='10' cols='25' name='message'></textarea>
                    </div>
                </div>
            </form>
        </Slide>
        
    </article>
    
    
</section>;
}

export default Contact;
