import React from 'react';
import axios from 'axios';

import './contactUs.scss';


class ContactUs extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    
  }
  handleChange = event => {
    const {value, name } = event.target;
    
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    
    axios.post('https://www.enformed.io/41qi9muq', this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err.message)
    );
  };
  
  render() {
    return (
      <section id='contact-us' tabIndex={-1} className='contactUs'>
            <div className='contactUs-details'>
                <form className='form' onSubmit={this.handleSubmit}>
                <div className='margin-format heading'>
                    <h2 className='heading'>
                        Contact us
                    </h2>
                </div>
                <div className='form__group'>
                    <input onChange={this.handleChange} name='name' type='text'  className='form__input' placeholder='Full name' id='name' required />
                    <label htmlFor='name' className='form__label'>Full Name</label>
                </div>
                <div className='form__group'>
                    <input onChange={this.handleChange} name='email' type='email' className='form__input' placeholder='Email address' id='email' required />
                    <label htmlFor='email' className='form__label'>Email Address</label>
                </div>
                <div className='form__group'>
                    <input onChange={this.handleChange} name='phone' type='text' className='form__input' placeholder='Phone number' id='phone' required />
                    <label htmlFor='phone' className='form__label'>Phone Number</label>
                </div>
                <div className='form__group'>            
                    <textarea onChange={this.handleChange} name='message' cols={10} rows={4} className='form__input' placeholder='Comment' aria-invalid='false' defaultValue=''/>
                    <label htmlFor='message' className='form__label'>Your Message</label>
                </div>
                <button type='submit' className='form__button'>Send</button>
            </form>
          <div className='contactUs-address'>
            <h2 className='heading-secondary'>
              Address
            </h2>
            <p>26 Mabo Street, Surulere, Lagos, Nigeria</p>
            <p>+234-805 5220618, +234-808 2441532, +234-80115830000</p>
            <p>ask@daintyevent.com</p>
          </div>
        </div>
      </section>
        );
    };


}

export default ContactUs;

