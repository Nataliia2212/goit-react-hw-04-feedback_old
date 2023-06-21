import { useState} from 'react';
import Section from './Section/Section';

import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });


  const handleClick = (event) => {
    const { name } = event.target
    setFeedback(
      prevState => ({...prevState,
      [name]: prevState[name] + 1,
    }))
  }

  const total = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;

    return total
  }
 
  
  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.ceil(feedback.good / total() * 100)
    return positivePercentage
  }

 
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={handleClick} />
        </Section>
        
        <Section title="Statistics">
          {
            total() === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />}
        </Section>
      </div>
    )
  }




