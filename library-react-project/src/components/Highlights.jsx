import React from "react";
import Highlight from "./ui/Highlight.jsx";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon="bolt"
              title="Easy and Quick"
              para="Get instant access to all the books you purchase"
            />
            <Highlight
              icon="book-open"
              title="10,000+ Books"
              para="Library has books in all your favorite categories"
            />
            <Highlight
              icon="tags"
              title="Affordable"
              para="Get your hands on popular books for as little as $10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
