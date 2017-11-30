import React, { Component } from "react";
import "./GameCard.css";

class GameCard extends Component {
  state = {
    clicked: false,
    class: "box"
  };

  clickBox = () => {
    if (this.props.handleClick(this.state.clicked))
      this.setState({ clicked: true });
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.status) {
      this.setState({ clicked: false });
      this.setState({ class: "box anim" });
    } else {
      this.setState({ class: "box" });
    }
  };

  render() {
    return (
      <div className="column is-one-quarter">
        <div className={this.state.class} onClick={() => this.clickBox()}>
          <div className="card-image">
            <figure className="image is-square">
              <img alt={this.props.name} src={this.props.image} />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
