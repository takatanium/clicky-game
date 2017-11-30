import React from "react";

const Tile = props => {
	return (
    <div className="tile is-parent is-vertical is-4">
      <article className="tile is-child notification is-info">
        <div className="content">
          <div className="is-size-1 has-text-weight-bold has-text-left">CLICK</div>
          <div className="is-size-1 has-text-weight-bold has-text-left">GAME</div>
          <div className="is-size-4 has-text-right">Click to Play</div>
          <div className="is-size-4 has-text-right">No Repeats Allowed</div>
        </div>
      </article>
      <article className="tile is-child notification is-warning">
        <div className="content">
          <div className="is-size-2 has-text-weight-bold has-text-left">GAME</div>
          <div className="is-size-2 has-text-weight-bold has-text-left">STATS</div>
          <div className="is-size-3 has-text-right">Score: {props.score}</div>
          <div className="is-size-3 has-text-right">Max Score: {props.max}</div>
        </div>
      </article>
    </div>
	);
}

export default Tile;
