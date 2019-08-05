import React from 'react';

import './contactUs.scss';


class ContactUs extends React.Component {
  constructor() {
    super();
    
    this.state = {
        address: '26 Mabo Street, Surulere, Lagos, Nigeria',
        number: '+234-805 5220618, +234-808 2441532, +234-80115830000',
        email: 'ask@daintyevent.com'
    };
    
    }

    render() {
        return (
        <section id="contact-us" tabIndex={-1} className="contactUs">
            <div className="contactUs-details">
                <form action="https://www.enformed.io/41qi9muq" method="post" className="form" onsubmit="handleSubmit(Contact)">
                <div className="margin-format heading">
                    <h2 className="heading-secondary">
                        Contact us
                    </h2>
                </div>
                <div className="form__group">
                    <input name="name" type="text" className="form__input" placeholder="Full name" id="name" required />
                    <label htmlFor="name" className="form__label">Full name</label>
                </div>
                <div className="form__group">
                    <input name="email" type="email" className="form__input" placeholder="Email address" id="email" required />
                    <label htmlFor="email" className="form__label">Email address</label>
                </div>
                <div className="form__group">            
                    <textarea name="message" cols={10} rows={4} className="form__input" placeholder="Comment" aria-invalid="false" defaultValue={""} />
                    <label htmlFor="message" className="form__label">Comment</label>
                </div>
                <button type="submit" className="form__button">Send</button>
            </form>
          <div className="contactUs-address">
            <h2 className="heading-secondary">
              Address
            </h2>
            <p>{this.state.address}</p>
            <p>{this.state.number}</p>
            <p>{this.state.email}</p>
          </div>
        </div>
      </section>
        );
    };


}

export default ContactUs;

