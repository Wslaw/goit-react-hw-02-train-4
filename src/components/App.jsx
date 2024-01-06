import React from 'react';
import { Component } from 'react';
import Section from './feedback/Section';
import Statistics from './feedback/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Notification from './feedback/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message='There is no feedback' />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={
                total === 0 ? 0 : Math.round((good / total) * 100)
              }
            />
          )}
        </Section>
      </div>
    );
  }
}

