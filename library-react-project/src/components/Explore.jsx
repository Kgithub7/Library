import React from "react";

function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore More <span className="purple">Books</span>
          </h2>
          <a href="/books" className="btn">
            More Books
          </a>
        </div>
      </div>
    </section>
  );
}

export default Explore;
