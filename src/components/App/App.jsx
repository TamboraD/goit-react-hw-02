import { useEffect, useState } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import css from './App.module.css'

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('feedback'))
    if (saved) {
      setFeedback(saved)
    }
}, [])

  useEffect(() => {
    if (feedback) {
localStorage.setItem('feedback', JSON.stringify(feedback))
    }
}, [feedback])

  const updateFeedback = (feedbackType) => { 
  setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
  }
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem('feedback')
  }
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)



  return (
    <div className={css.container}>
      <Description />
      <Options
        update={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback === 0 ?( <Notification />) :
      (<Feedback
          feedbacks={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
      />)
  }
    </div>
  )
}

export default App
