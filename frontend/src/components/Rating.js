import React from "react";

const Rating = ({ stars, reviews }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: "#f8e825" }}
          className={
            stars > 0.9
              ? "fas fa-star"
              : stars > 0.2
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: "#f8e825" }}
          className={
            stars > 2.9
              ? "fas fa-star"
              : stars > 1.2
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: "#f8e825" }}
          className={
            stars > 2.9
              ? "fas fa-star"
              : stars > 2.2
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: "#f8e825" }}
          className={
            stars > 3.9
              ? "fas fa-star"
              : stars > 3.2
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: "#f8e825" }}
          className={
            stars > 4.9
              ? "fas fa-star"
              : stars > 4.2
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{reviews && reviews}</span>
    </div>
  );
};

export default Rating;
