// import { Component } from 'react';
// import styles from './feedback.module.css';


// class FeedbackForm extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     };
    
//     static feedbackFormOptions = ["good", "neutral", "bad"];

//     handleFeedback(type) {
//         this.setState(prevState => ({
//             [type]: prevState[type] + 1,
//         }));
//     };
    
//     countTotalFeedback() {
//         // const { good, neutral, bad } = this.state;
//         const total = Object.values(this.state).reduce((accum, value)=>accum + value, 0 )
//         return total;
//     }


//     countPositiveFeedbackPercentage() {
//         const total = this.countTotalFeedback()
//         if (!total ) {
//           return 0;
//         }
//         const positivePercentage = Number(((this.state.good / this.countTotalFeedback()) *100).toFixed(2))
//     return positivePercentage;
    
//     }
    
//     render() {
//         // const { good, neutral, bad } = this.state;
        
//         const buttonElements = FeedbackForm.feedbackFormOptions.map(name => (
//           <button onClick={()=>this.handleFeedback(name)} key={name} type="button" className={styles.btn}>
//             {name.charAt(0).toUpperCase() + name.slice(1)}
//           </button>
//         ));

//         const textElements = FeedbackForm.feedbackFormOptions.map(name => (
//             <p key={name} className={styles.text}>
//             {name.charAt(0).toUpperCase() + name.slice(1)}:{' '}
//             <span>{this.state[name]}</span>
//           </p>
//         ));

//     return (
//       <div className={styles.wrapper}>
//         <div className={styles.action}>
//           <h2 className={styles.title}>Please leave feedback</h2>

//           {buttonElements}
//         </div>
//         <div className={styles.result}>
//           <h2 className={styles.title}>Statisics</h2>

//           {textElements}
//           <p className={styles.text}>Total: {this.countTotalFeedback()}</p>
//           <p className={styles.text}>
//             Positive feedback percentage:{this.countPositiveFeedbackPercentage()}%
//           </p>
//         </div>
//       </div>
//     );
//   }
// }
// export default FeedbackForm;



