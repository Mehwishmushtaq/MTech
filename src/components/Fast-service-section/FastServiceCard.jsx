import React from "react";

const FastServiceCard = (props) => {
  const { imgUrl, title, projects, rating } = props.item;

  return (
    <div className="single__fast__service">
      <div className="fast__service__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn fast__btn">Free</button>
      </div>

      <div className="fast__service__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i className="ri-user-line"></i> {projects}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i className="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FastServiceCard;
