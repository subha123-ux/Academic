import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>S&D Programming Hub</h2>

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
              📞 <strong>Subhajit</strong><br />
              9832591226
            </div>

            <div>
              📞 <strong>Dhriti Kumar</strong><br />
              6296166280
            </div>

          </div>

        <hr />

        <p className="copyright">
          © 2026 S&D Programming Hub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;