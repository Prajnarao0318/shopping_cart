import React from 'react';
import './Footer.css'; // Optional: Add custom styles if needed

function FooterComponent() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 py-4" id="foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:contact.quickkart@gmail.com">contact.quickkart@gmail.com</a><br />
              Phone: +91 xxxxxxxxxx
            </p>
          </div>
          <div className="col-lg-6 col-md-6 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">facebook.com/QuickKart</a></li>
              <li><a href="#" className="text-dark">twitter.com/QuickKart</a></li>
              <li><a href="#" className="text-dark">instagram.com/QuickKart</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p>&copy; 2024 QuickKart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
