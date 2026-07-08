import React from "react";
import "../styles/Home.css";

function Home() {

  const googleForm =
    "https://docs.google.com/forms/d/e/1FAIpQLSfoh-HCuBYXNK2LuvlKzmyOJ0Gl9RFG4Wbcn8nljvNJjMRGaw/viewform?usp=publish-editor";

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">

          <div className="hero-text">

            <h1>
              Welcome To <br />
              <span>S&amp;D Programming Hub</span>
            </h1>

            <p>
                Are you ready to embark on a journey of coding excellence? Join S&D Programming Hub today and unlock your potential in the world of programming!
                Wheather you're a school student, college student, or a working professional, our courses are designed to help you gain real-world skills and confidence.
            </p>

            <p>
              Learn Python, Java, C, C++, SQL, React, Django,
              Web Development, DSA, Microsoft Office and prepare yourself for interviews
              through practical projects and expert guidance.
            </p>

            <a
              href={googleForm}
              target="_blank"
              rel="noreferrer"
              className="enroll-btn"
            >
              Enroll Now
            </a>

          </div>

          <div className="hero-image">
            <img src="/hero.jpeg" alt="Programming Hub" />
          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="container stats-container">

          <div className="stat-card">
            <h2>500+</h2>
            <p>Students</p>
          </div>

          <div className="stat-card">
            <h2>20+</h2>
            <p>Courses</p>
          </div>


          <div className="stat-card">
            <h2>10+</h2>
            <p>Expert Trainers</p>
          </div>

          <div className="stat-card">
            <h2>20+</h2>
            <p>Free Workshops</p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why">

        <div className="container">

          <h2 className="section-title">
            Why Choose Us?
          </h2>

          <div className="why-grid">

            <div className="why-card">
              💻
              <h3>Live Practical Classes</h3>
              <p>
                Learn through hands-on coding sessions.
              </p>
            </div>

            <div className="why-card">
              📚
              <h3>Industry Curriculum</h3>
              <p>
                Updated syllabus designed for real jobs.
              </p>
            </div>

            <div className="why-card">
              🎯
              <h3>Interview Preparation</h3>
              <p>
                Mock interviews, coding rounds and aptitude.
              </p>
            </div>

            <div className="why-card">
              🏆
              <h3>Certificate</h3>
              <p>
                Get a certificate after course completion.
              </p>
            </div>

            <div className="why-card">
              🚀
              <h3>Projects</h3>
              <p>
                Build real-world projects for your portfolio.
              </p>
            </div>

            <div className="why-card">
              🤝
              <h3>Placement Guidance</h3>
              <p>
                Resume building and career support.
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;