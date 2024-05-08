import { prototype } from "html-webpack-plugin";
import React from "react"


export const Card=(props)=>{
    return (  
    <div className="card m-5">
    <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.buttonUrl} className="btn btn-primary">
            {props.buttonLabel}
        </a>
    </div>
</div>
    );
}
Card.prototype={
  imageUrl: prototype.string,
  title: prototype.string,
  description: prototype.string,
  buttonUrl: prototype.string,
  buttonLabel: prototype.string
}

