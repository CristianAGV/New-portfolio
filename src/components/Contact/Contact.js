import React from 'react';
import './Contact.css'
function Contact() {
  return <section className='footer' id='contact'>
    <article className='section-container reset'>
        <h2 className='section-title'>Let's Talk</h2>

        <form className='form-container'>
            <div className='form-column'>
                <div className='form-input'>
                    <label for='name'>First Name</label>
                    <input type='text'id='name'/>
                </div>

                <div className='form-input'>
                    <label for='lastname'>Last Name</label>
                    <input type='text' id='lastname'/>
                </div>

                <div className='form-input'>
                    <label for='email'>Email Adress</label>
                    <input type='email' id='email'/>
                </div>

                <input type='submit' value='Send' className='form-btn'/>
            </div>

            <div className='form-column'>
                <div className='form-input'>
                    <label for='message'>Your Message</label>
                    <textarea id='message' rows='10' cols='25'></textarea>
                </div>
            </div>
        </form>
    </article>
    
    
</section>;
}

export default Contact;
