import React from "react";

const Game = props => {
	return (
    <div className="column is-8">
      <div className="columns is-multiline is-mobile">
        {props.children}
      </div>
    </div>
	);
}

export default Game;
