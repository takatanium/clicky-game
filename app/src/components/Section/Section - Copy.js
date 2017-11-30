import React from "react";

const Section = props => {
	return (
	  <section className="section">
	    <div className="container">
	      <div className="columns">
	        <div className="tile is-parent is-vertical is-4">
	          <article className="tile is-child notification is-info">
              <div className="content has-text-left">
                <span className="is-size-1 has-text-weight-bold">CLICKY</span>
                <p className="is-size-1 has-text-weight-bold has-text-right">GAME</p>
                <span className="subtitle">Click to Play</span>
                <p className="subtitle">No Repeats Allowed</p>
              </div>
            </article>
	          <article className="tile is-child notification is-warning">
              <div className="content has-text-right">
                <p className="is-size-2 has-text-left">STATS</p>
                <br />
                <span className="subtitle is-size-3">
                  Score: {props.score}
                </span>
                <p className="subtitle is-size-3">
                  Max: {props.max}
                </p>
              </div>
            </article>
	        </div>
	        <div className="column is-8">
	          <div className="columns is-multiline is-mobile">
	            {props.children}
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
	);
}

export default Section;
