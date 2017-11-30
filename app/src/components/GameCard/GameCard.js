import React, { Component } from "react";
import "./GameCard.css";

class GameCard extends Component {
  state = {
    clicked: false
  };

  clickBox = () => {
    if (this.props.handleClick(this.state.clicked))
      this.setState({ clicked: true });
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.status) this.setState({ clicked: false });
  };

  render() {
    return (
      <div className="column is-one-quarter">
        <div className="box" onClick={() => this.clickBox()}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt={this.props.name} src={this.props.image} />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
