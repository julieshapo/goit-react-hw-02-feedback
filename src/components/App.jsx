import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
// import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = option => {
    this.setState(prevState => {
      let newState = { ...prevState };

      newState[option] = prevState[option] + 1;

      return newState;
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor(
      (this.good / this.countTotalFeedback()) * 100
    );
    return percentage;
  };

  render() {
    const keys = Object.keys(this.state);
    return (
      <Layout>
        <FeedbackOptions options={keys} onStateUpdate={this.updateState} />
        <Statistics
          options={keys}
          stats={this.state}
          total={this.countTotalFeedback}
          percentage={this.countPositiveFeedbackPercentage}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
