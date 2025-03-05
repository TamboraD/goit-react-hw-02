import { useState } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
// import './App.css'

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const updateFeedback = (feedbackType) => { 
  setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
  }
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({good: 0, neutral: 0, bad: 0})
  }


  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      <Feedback
        feedbacks={feedback}
      />
    </>
  )
}

export default App
