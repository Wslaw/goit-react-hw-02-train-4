import React from 'react';
import styles from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.action}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={styles.btn}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

