import React from "react";

const Section = props => {
	return (
	  <section className="section">
	    <div className="container">
	      <div className="columns">
          {props.children}
	      </div>
	    </div>
	  </section>
	);
}

export default Section;
