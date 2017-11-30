import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Section from "./components/Section";
import Tile from "./components/Tile";
import Game from "./components/Game";
import GameCard from "./components/GameCard";
import friends from "./friends.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: this.randomDisplay(),
      status: true,
      score: 0,
      maxScore: 0
    };
  };

  handleClick = clicked => {
    this.setState({ status: true });
    if (!clicked) {
      this.setState({ 
        random: this.randomDisplay(),
        maxScore: Math.max(this.state.score + 1, this.state.maxScore),
        score: this.state.score + 1
      });
      return true;
    } else {
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
        <Section>
          <Tile score={this.state.score} 
                max={this.state.maxScore} />
          <Game>
            {this.state.random.map(friend => (
              <GameCard
                status={this.state.status}
                handleClick={this.handleClick}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
          </Game>
        </Section>
      </Wrapper>
    );
  }
}

export default App;
