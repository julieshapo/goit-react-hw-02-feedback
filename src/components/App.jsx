import { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setStateUpdate = option => {
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
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const totalCount = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onStateUpdate={this.setStateUpdate} />
        </Section>
        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={keys}
              statistic={this.state}
              total={totalCount}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}

// // import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout/Layout';
// import { FeedbackOptions } from './Feedback/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// // import { Section } from './Section/Section';
// import { Container } from './Layout/Layout.styled';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   updateState = option => {
//     this.setState(prevState => {
//       let newState = { ...prevState };

//       newState[option] = prevState[option] + 1;

//       return newState;
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percentage = Math.floor(
//       (this.good / this.countTotalFeedback()) * 100
//     );
//     return percentage;
//   };

//   render() {
//     const keys = Object.keys(this.state);
//     return (
//       <Layout>
//         <Container>
//           {/* <Section title={'Please leave feedback'}>
//             <FeedbackOptions />
//           </Section> */}
//           {/* <Section title={'Statistics'}>
//             <Statistics
//               options={keys}
//               stats={this.state}
//               total={this.countTotalFeedback}
//               percentage={this.countPositiveFeedbackPercentage}
//             />
//           </Section> */}
//           <FeedbackOptions options={keys} onStateUpdate={this.updateState} />
//           <Statistics
//             options={keys}
//             stats={this.state}
//             total={this.countTotalFeedback}
//             percentage={this.countPositiveFeedbackPercentage}
//           />
//         </Container>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
