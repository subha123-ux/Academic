import React from "react";
import "../styles/Fees.css";

function Fees() {

  const feeData = [
    { id: 1, course: "C Programming", duration: "6 Months", classWeek: "3 Days", fees: "₹6,000", advance: "₹2,500" },
    { id: 2, course: "Python", duration: "3 Months", classWeek: "2 Days", fees: "₹4,000", advance: "₹2,000" },
    { id: 3, course: "Python", duration: "6 Months", classWeek: "2 Days", fees: "₹6,000", advance: "₹2,500" },
    { id: 4, course: "Python", duration: "1 Year", classWeek: "3 Days", fees: "₹13,000", advance: "₹3,500" },
    { id: 5, course: "Java", duration: "6 Months", classWeek: "2 Days", fees: "₹7,000", advance: "₹3,000" },
    { id: 6, course: "Web Development", duration: "6 Months", classWeek: "3 Days", fees: "₹6,000", advance: "₹2,000" },
    { id: 7, course: "Web Development", duration: "1 Year", classWeek: "3 Days", fees: "₹13,000", advance: "₹3,500" },
    { id: 8, course: "MySQL + MongoDB", duration: "3 Months", classWeek: "2 Days", fees: "₹4,000", advance: "₹2,000" },
    { id: 9, course: "DSA", duration: "6 Months", classWeek: "2 Days", fees: "₹8,000", advance: "₹3,000" },
    { id: 10, course: "DSA", duration: "1 Year", classWeek: "2 Days", fees: "₹16,000", advance: "₹5,000" },
    { id: 11, course: "Python + Django", duration: "1 Year", classWeek: "3 Days", fees: "₹14,000", advance: "₹3,000" },
    { id: 12, course: "Machine Learning", duration: "1 Year", classWeek: "3 Days", fees: "₹12,000", advance: "₹3,500" },
    { id: 13, course: "MS Office", duration: "4 Months", classWeek: "2 Days", fees: "₹4,000", advance: "₹2,500" }
  ];

  return (
    <section className="fees">

      <div className="container">

        <h1 className="fees-title">
          S&amp;D Programming Hub Fee Structure
        </h1>

        <p className="fees-location">
          📍 Bara Kanthalia, Barrackpore, Kolkata - 700121
        </p>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Course</th>
                <th>Duration</th>
                <th>Class / Week</th>
                <th>Total Fees</th>
                <th>Advance</th>
              </tr>
            </thead>

            <tbody>

              {feeData.map((item) => (

                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.course}</td>
                  <td>{item.duration}</td>
                  <td>{item.classWeek}</td>
                  <td>{item.fees}</td>
                  <td>{item.advance}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="fee-notes">

          <div className="note-card">
            🎁 Free workshops on various programming topics are organized regularly.
          </div>

          <div className="note-card">
            💻 Hands-on Live Projects included with selected courses.
          </div>

          <div className="note-card">
            🏆 Course Completion Certificate Provided.
          </div>

          <div className="note-card">
            👨‍🏫 Students can also learn through the general method without enrolling in a course.
          </div>

        </div>

      </div>

    </section>
  );
}

export default Fees;