import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      return index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < people.length - 4) {
      return 3;
    } else {
      return number;
    }
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="Review">
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
          <div>
            {" "}
            <button className="random-btn" onClick={randomPerson}>
              Suprise me
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Review;
