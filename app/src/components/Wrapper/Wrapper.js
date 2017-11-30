import React from "react";
import "./Wrapper.css";

const Wrapper = props => {
	return (
	  <section className="section">
	    <div className="columns is-multiline">
	      {props.children}
	    </div>
	  </section>
	);
}

export default Wrapper;
