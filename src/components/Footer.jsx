import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>S.J COACHING</h2>

        <p>
          Learn Programming with Practical Projects and Expert Guidance.
        </p>

        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>

          <div className="contact-list">

            <div>
              📞 <strong>Subhajit Mal (Trainer at NIIT FOUNDATION)</strong><br />
              9832591226
            </div>

          </div>

        <hr />

        <p className="copyright">
          © 2026 S.J COACHING. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;