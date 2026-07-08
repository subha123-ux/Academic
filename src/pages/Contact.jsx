import "../styles/Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    e.target.reset();
  };

  return (
    <section className="contact">

      <div className="container">

        <h1 className="contact-title">
          Contact Us
        </h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Fill out the form below and we'll get back
          to you as soon as possible.
        </p>

        <div className="contact-wrapper">

          {/* Contact Information */}

          <div className="contact-info">

            <div className="info-card">
              <h3>📍 Address</h3>
              <p>
                S&D Programming Hub
                <br />
                Bara Kanthalia, Barrackpore, Kolkata - 700121
              </p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 9832591226</p>
              <p>+91 6296166280</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>malsubhajit010@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>⏰ Working Hours</h3>
              <p>
                Monday - Sunday
                <br />
                8:00 AM - 9:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter Your Name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <textarea
              rows="6"
              placeholder="Write Your Message..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        {/* Google Map */}

        <div className="map-section">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Bara+Kanthalia,+Barrackpore,+West+Bengal,+India&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;