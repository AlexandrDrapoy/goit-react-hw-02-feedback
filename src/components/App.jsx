import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
// import Statistics from './Statistics/Statistics';
// import PropTypes from 'prop-types';
const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isFeedback: false,
  };
  // static PropTypes ={

  // }
  onLeaveFeedback = option => () => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Pleese leave feadback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
