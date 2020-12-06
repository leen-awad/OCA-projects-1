import React from "react";
import "./card-style.css";


const Card = props => {

  function Book(){
    localStorage.setItem("myServices" , JSON.stringify( props))
  }

  return (
    <article className="cardleen">
      <div className="overflowLeen">
        <img src={props.imgsrc} alt="hh" className="card-img-top-Leen" />
      </div>
      <div className="text-leen">
        <h4 className="card-title-Leen">{props.title}</h4>
        <p className='carddescription'>
          {props.description}.
        </p>
        <h3 className='LeenPrice'>{props.price}</h3>
      </div>
      <a href="/booking" onClick={Book} className="link1">Book</a>
    </article>

  );

}
export default Card