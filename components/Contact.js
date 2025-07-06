import React, { useState } from 'react'
import Title from './Title'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });
    
    const form = e.target;
    try {
      // Use the Netlify Forms submission endpoint
      const formData = new FormData(form);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Thank you for your message! I will get back to you soon.' }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'There was a problem sending your message. Please try again.' }
      });
    }
  };

  return (
    <section id='contact' className='hero wrapper'>
      <Title title='Get In Touch' color='#ffffff' />
      
      <div className='container'>
        <div className='columns is-vcentered'>
          <div className='column is-5'>
            <div className='contact-info'>
              <h3 className='title is-4 has-text-white'>Let's Connect</h3>
              <p className='subtitle has-text-white is-6'>
                I'm always open to discussing new projects, opportunities, or collaborations.
              </p>
              
              <div className='contact-details'>
                <div className='contact-item'>
                  <span className='icon'>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <span>n.kannan200@gmail.com</span>
                </div>
                <div className='contact-item'>
                  <span className='icon'>
                    <i className='fas fa-map-marker-alt'></i>
                  </span>
                  <span>Bangalore, India</span>
                </div>
              </div>
              
              <div className='social-links'>
                <a href='https://www.linkedin.com/in/kannan91/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='social-icon'>
                  <span className='icon is-medium'>
                    <i className='fab fa-linkedin fa-lg'></i>
                  </span>
                </a>
                <a href='https://github.com/kannann1' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='social-icon'>
                  <span className='icon is-medium'>
                    <i className='fab fa-github fa-lg'></i>
                  </span>
                </a>
                <a href='https://medium.com/@Kannan91' target='_blank' rel='noopener noreferrer' aria-label='Medium' className='social-icon'>
                  <span className='icon is-medium'>
                    <i className='fab fa-medium fa-lg'></i>
                  </span>
                </a>
                <a href='https://www.credly.com/users/kannann1' target='_blank' rel='noopener noreferrer' aria-label='Credly' className='social-icon'>
                  <span className='icon is-medium'>
                    <i className='fas fa-certificate fa-lg'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div className='column is-7'>
            <div className='contact-form-container'>
              {formStatus.submitted ? (
                <div className='notification is-success'>
                  <p>{formStatus.info.msg}</p>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className='contact-form'>
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <div className='field'>
                    <label className='label has-text-white'>Name</label>
                    <div className='control'>
                      <input 
                        className='input' 
                        type='text' 
                        name='name' 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Your Name' 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className='field'>
                    <label className='label has-text-white'>Email</label>
                    <div className='control'>
                      <input 
                        className='input' 
                        type='email' 
                        name='email' 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Your Email' 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className='field'>
                    <label className='label has-text-white'>Subject</label>
                    <div className='control'>
                      <input 
                        className='input' 
                        type='text' 
                        name='subject' 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder='Subject' 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className='field'>
                    <label className='label has-text-white'>Message</label>
                    <div className='control'>
                      <textarea 
                        className='textarea' 
                        name='message' 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Your Message' 
                        rows='5' 
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className='field'>
                    <div className='control'>
                      <button 
                        type='submit' 
                        className={`button is-primary is-medium ${formStatus.submitting ? 'is-loading' : ''}`}
                        disabled={formStatus.submitting}
                      >
                        <span className='icon'>
                          <i className='fas fa-paper-plane'></i>
                        </span>
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <footer className='footer'>
        <div className='content has-text-centered'>
          <p>
            &copy; {new Date().getFullYear()} Kannan Narayanasamy. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .hidden {
          display: none;
        }
        .wrapper {
          padding-top: 50px;
          padding-bottom: 0;
          background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
          color: #ffffff;
          font-size: 1.3em;
        }
        .contact-info {
          padding: 2rem;
        }
        .contact-details {
          margin: 2rem 0;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .contact-item .icon {
          margin-right: 1rem;
          color: #3273dc;
        }
        .social-links {
          margin: 2rem 0;
          display: flex;
          gap: 1.5rem;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background-color: #3273dc;
          transform: translateY(-3px);
        }
        .contact-form-container {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .contact-form .label {
          color: #ffffff;
        }
        .contact-form .input,
        .contact-form .textarea {
          background-color: rgba(255, 255, 255, 0.9);
          border: none;
          box-shadow: none;
          transition: all 0.3s ease;
        }
        .contact-form .input:focus,
        .contact-form .textarea:focus {
          box-shadow: 0 0 0 2px #3273dc;
        }
        .footer {
          background-color: #2c3e50;
          padding: 1.5rem;
          margin-top: 3rem;
        }
        .footer p {
          color: #bdc3c7;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  )
}

export default Contact
