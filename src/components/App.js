import React, { Component, Fragment } from 'react';
// import ReactDOM from "react-dom";
import FeedbackEditor from './FeedbackEditor/FeedbackEditor';
import FeedbackList from './FeedbackList/FeedbackList';


export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      addGoodFeedback = () =>{
        this.setState(prevState =>{
            return{
                good:prevState.good += 1
            }
            
        })
      };

      addNeutralFeedback = () =>{
        this.setState(prevState =>{
            return{
                neutral:prevState.neutral += 1
            }
        })
      };

      addBadFeedback = () =>{
        this.setState(prevState =>{
            return{
                bad:prevState.bad += 1
            }
        })
      };

      countTotalFeedback = () =>{
        let total = 0;
        for(let i of Object.values(this.state)){
            total += i;
        }
        return total;
      }
      


    

    render(){
        const{good,neutral,bad}=this.state

        return (
            <Fragment>
                <FeedbackEditor onGoodFeedback={this.addGoodFeedback}
                onNeutralFeedback = {this.addNeutralFeedback}
                onBadFeedback = {this.addBadFeedback}/>
                

                <FeedbackList good={good}
                neutral={neutral}
                bad={bad} 
                onTotalFeedback = {this.countTotalFeedback}/>
            </Fragment>

        )
    }
}