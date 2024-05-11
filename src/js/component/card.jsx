import {PropTypes } from "prop-types";
import React from "react"


export const Card=(props)=>{
    return (  
         
         <div className="col-sm-12 col-md-6 col-lg-3">
        <article className="card" id="card_margin">

            
    <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <section className="text-center">

        <a href={props.buttonUrl} className="btn btn-primary">
            {props.buttonLabel}
        </a>
        </section>
    </div>
        </article>
</div>
    );
}
Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
  }
