import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    status: true,
    score: 0,
    maxScore: 0
  };

  handleClick = clicked => {
    this.setState({ status: true });
    if (!clicked) {
      this.setState({ 
        maxScore: Math.max(this.state.score + 1, this.state.maxScore),
        score: this.state.score + 1 
      });
      return true;
    }
    else {
      this.setState({ 
        status: false,
        score: 0
      });
      return false;
    }
  };

  randomDisplay = () => {
    let num = Array.from(Array(friends.length), (_,x) => x);
    let rand, rNum = [], objArray = [];
    while (num.length){
      rand = Math.floor(Math.random()*num.length);
      rNum.push(num.splice(rand,1)[0]);
    }
    rNum.forEach(i => objArray.push(friends[i]));
    return objArray;
  };

  render() {
    return (
      <Wrapper>
        <Title>Score: {this.state.score} Max: {this.state.maxScore}</Title>
        {this.randomDisplay().map(friend => (
          <GameCard
            status={this.state.status}
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
