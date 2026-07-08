
function CourseCard({ image, title, description, formLink }) {

  return (

    <div className="course-card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <a
        href={formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="join-btn"
      >
        Join Now
      </a>

    </div>

  );
}

export default CourseCard;