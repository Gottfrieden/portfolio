import React from 'react';
import '../Styles/Contact.css';

export default function Contact() {
    return (
        <div className='contact-page-container'>
            <div className='contact-form-container'>
                <h1>Tell me about<br /> <span className='accent-color'>your project</span></h1>
                <form>
                    <input type='text' placeholder='Full name' required />
                    <div className='phone-mail-container'>
                        <input type='email' placeholder='Email' id='email' required />
                        <input type='tel' placeholder='Phone' id='phone' />
                    </div>
                    <select id='subject' required>
                        <option value="">Subject</option>
                        <option value="">UX / UI</option>
                        <option value="">Web development</option>
                        <option value="">SEO</option>
                        <option value="">Marketing / Communication</option>
                        <option value="">Graphic Design</option>
                    </select>
                    <textarea placeholder='Your message' required />
                    <input type='submit' value='Hire me' />
                </form>
            </div>
        </div>
    )
} 