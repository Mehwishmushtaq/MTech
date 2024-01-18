import React from "react";
import serviceLinks from "./serviceLinks";


const ServiceCard = (props) => {
  const { imgUrl, title, id, desc } = props.item;

  //link based on the service's id
  const link = serviceLinks[`service${id}`];


  return (
    <div className="single__course__item text-center ">
      <div className="course__img">
        <a href={link}>
          <img src={imgUrl} alt="zz" className="w-100" />
        </a>

      </div>

      <div className="course__details">
        <h6 className="course__title mb-2">{title}</h6>
        <p className="course__desc text-center ">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
