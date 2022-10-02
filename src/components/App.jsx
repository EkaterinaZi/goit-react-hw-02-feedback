import React from "react"
import Statistics from "components/Feedback/Statistics"
import FeedbackOptions from "components/Feedback/FeedbackOptions"
import Notification from "components/Feedback/Notification"
import  Section  from "components/Feedback/Section"
import {countTotalFeedback} from "./Utils/utils"

class App extends React.Component{
  static defoultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    positivePercentage: 0,
    total: 0,
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  }

onLeaveFeedback = (options) => {(
   this.setState(prevState => {
    const value = prevState[options];
    return {
      [options]: value + 1
    }
   }) );
}

    render(){
      const total = countTotalFeedback(this.state.good, this.state.neutral, this.state.bad)
    return (<>
    <Section title="Please leave feedback">
    <FeedbackOptions  onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
    <Section title="Statistics">
    {total === 0 ? (<Notification/>) : (
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total}/>)
     }
    </Section>
    </>
  )}
}
export default App;