import React from "react"
import PropTypes  from "prop-types";



export const Body =(props) =>{
    return (
        <div>
            <h1>cool things</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sapiente. Officiis repellendus ratione architecto optio exercitationem accusantium minima obcaecati, quaerat corrupti. Voluptatem sequi quam et ullam tenetur porro, ratione soluta.</p>
            <a href={props.buttonUrl} className="btn btn-primary">
            {props.buttonLabel}
            </a>
        </div>
    );   
}
Body.propTypes={
  buttonUrl: PropTypes.string,
  buttonLabel : PropTypes.string,
}