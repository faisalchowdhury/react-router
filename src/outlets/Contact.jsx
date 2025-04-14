import React from 'react';

const Contact = () => {
    return (
        <div className='m-5'>
            <fieldset className="fieldset  bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">Get in touch</legend>
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input border w-full" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input border w-full" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Send Message</button>
</fieldset>
        </div>
    );
};

export default Contact;