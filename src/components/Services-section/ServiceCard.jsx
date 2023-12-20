import React from "react";
import serviceLinks from "./serviceLinks";


const ServiceCard = (props) => {
  const { imgUrl, title, projects, rating, id } = props.item;

  //link based on the service's id
  const link = serviceLinks[`service${id}`];


  return (
    <div className="single__course__item">
      <div className="course__img">
        <a href={link}>
          <img src={imgUrl} alt="zz" className="w-100" />
        </a>

      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="projects d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {projects} projects
          </p>

          <p className="projects d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {projects}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="enroll"> Request a Quote</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
