import CourseCard from "../components/CourseCard";
import "../Styles/Courses.css";

function Courses() {

  const courses = [
    {
      image: "/python.png",
      title: "Python",
      description: "Python Programming from Beginner to Advanced with Projects.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSewHJG6yMnTnefqubyQwwWhaOxPvx-pC8vsAquG4DscE6i74w/viewform?usp=publish-editor"
    },
    {
      image: "/java.png",
      title: "Java",
      description: "Core Java, OOP, Collections, JDBC and Interview Preparation.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMRC8twrqUBVTLjESavmDOujwdNgN5R3rC9jI6M5j7TVmAMg/viewform?usp=publish-editor"
    },
    {
      image: "/c.png",
      title: "C Programming",
      description: "Programming Fundamentals with Problem Solving.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf50TgBjsqRA8_4XIydF2OqgDe8evBhsnAjkIqBOH6T0r7gQw/viewform?usp=publish-editor"
    },
    {
      image: "/sql.png",
      title: "MySQL + MongoDB",
      description: "Database Management and MySQL Queries.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfUFWvyrFmP9cv5fEzNnFY8vIrx8ULSe5Jo1ib6e3pCiDby2A/viewform?usp=publish-editor"
    },
    {
      image: "/django.png",
      title: "Django",
      description: "Full Stack Web Development with Python Django.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGj0jNwOkE2OmNsbsY7GxVAR2GbOnKtoK_sEk66e5ZEmjLqQ/viewform?usp=publish-editor"
    },
    {
        image: "/ml.png",
        title: "Machine Learning",
        description: "Introduction to Machine Learning and AI.",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLScOttZNQYMXXQvD0iwwJNP0Z2y42_u2CZhsSyOkMFooP5bJNA/viewform?usp=publish-editor"
    },
    {
        image: "/web.png",
        title: "Web Development",
        description: "Build modern, responsive websites with HTML, CSS, and JavaScript.",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLScE8C0Mo8-aIRs5456Yentlokwod3Tw7bQMRt6nuO1haQgS_g/viewform?usp=publish-editor"
    },
    {
        image: "/dsa.png",
        title: "Data Structures & Algorithms",
        description: "Master DSA for coding interviews and competitive programming.",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfbPdecfPngUPVAsefld1aReVfI4KdyQ6lZfjzrmLf4ecFS2Q/viewform?usp=publish-editor"
    },
    {
        image: "/msoffice.png",
        title: "Microsoft Office",
        description: "Master essential in MS Word, Excel, and PowerPoint for professional productivity.",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd-WTqqCB-v9lkPiTQodHdchdGlZZMqoSaiAsL_QqT3fBh3bA/viewform?usp=publish-editor"
    }
  ];

  return (
    <section className="courses">

      <div className="container">

        <h1 className="courses-title">
          Our Courses
        </h1>

        <p className="courses-subtitle">
          Learn the most in-demand programming skills with practical training,
          real-world projects and interview preparation.
        </p>

        <div className="course-grid">

          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              formLink={course.formLink}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Courses;