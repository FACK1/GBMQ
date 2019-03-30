import React, { Component } from "react";
import {
  StyledContent,
  CongratsImg,
  StyledHeader,
  MessageText,
  SmallTitle,
  BigTitle,
  StyledButton,
  Results,
  Column1,
  Column,
  Column2,
} from "./index.style";
import CongratsImage from "./congratulations.png";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        score: 0,
        percentage: 0,
        rank: 0,
        score2: 0,
        percentage2: 0,
        rank2: 0,
        scoreImprovement: 0,
        percentageImprovement: 0,
        rankImprovement: 0
      }
    };
  }
  getComparisonResult = () => {
    return new Promise((resolve, reject) => {
      const results = {
        score: 0,
        percentage: 0,
        rank: 0,
        score2: 0,
        percentage2: 0,
        rank2: 0,
        scoreImprovement: 0,
        percentageImprovement: 0,
        rankImprovement: 0
      };
      if (results) {
        resolve(results);
      } else {
        reject(new Error("No results found!"));
      }
    });
  };

  setComparisonResult = results => {
    return new Promise((resolve, reject) => {
      this.setState({ results }, () => {
        if (results) {
          resolve();
        } else {
          reject(new Error("No results found!"));
        }
      });
    });
  };

  componentDidMount() {
    this.getComparisonResult()
      .then(this.setComparisonResult)
      .catch(err => {
        alert("Loading results error: ", err.message);
      });
  }

  render() {
    return (
      <React.Fragment>
        <StyledContent>
          <CongratsImg src={CongratsImage} />
          <StyledHeader>
            <MessageText>You have finished the</MessageText>
            <SmallTitle>Great British Money</SmallTitle>
            <BigTitle>Quiz</BigTitle>
          </StyledHeader>
          <Results>
            <Column1>
              <p>In Terms Of</p>
              <p>Score</p>
              <p>Percentage</p>
              <p>Rank of age</p>
            </Column1>
            <Column>
              <p>Quiz 1</p>
              <p>{this.state.results.score}/20</p>
              <p>{this.state.results.percentage}%</p>
              <p>{this.state.results.rank}</p>
            </Column>
            <Column>
              <p>Quiz 2</p>
              <p>{this.state.results.score2}/20</p>
              <p>{this.state.results.percentage2}%</p>
              <p>{this.state.results.rank2}</p>
            </Column>
            <Column2>
              <p>Progress</p>
              <p>{this.state.results.scoreImprovement}</p>
              <p>{this.state.results.percentageImprovement}</p>
              <p>{this.state.results.rankImprovement}</p>
            </Column2>
          </Results>
          <StyledButton>Home</StyledButton>
        </StyledContent>
      </React.Fragment>
    );
  }
}

export default Result;
