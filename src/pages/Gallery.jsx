import "../Styles/Gallery.css";

function Gallery() {

  const images = [
    "/gallery/g1.jpeg",
    "/gallery/g2.jpeg",
    "/gallery/g3.jpeg",
    "/gallery/g4.jpeg",
    "/gallery/g5.jpeg",
    "/gallery/g6.jpeg",
    "/gallery/g7.jpeg",
    "/gallery/g8.jpeg",
    "/gallery/g9.jpeg",
    
  ];

  return (
    <section className="gallery">

      <div className="container">

        <h1 className="gallery-title">
          Our Gallery
        </h1>

        <p className="gallery-subtitle">
          Explore moments from our classes, workshops, coding sessions,
          seminars, and student achievements at S.J COACHING.
        </p>

        <div className="gallery-grid">

          {images.map((image, index) => (
            <div className="gallery-card" key={index}>

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
              />

              <div className="overlay">
                <h3>S&D Programming Hub</h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;