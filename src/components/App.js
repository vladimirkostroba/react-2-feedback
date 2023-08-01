import React, { Component, Fragment } from 'react';
// import ReactDOM from "react-dom";
import FeedbackEditor from './FeedbackEditor/FeedbackEditor';
import FeedbackList from './FeedbackList/FeedbackList';


export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


    

    render(){

        return (
            <Fragment>
                <FeedbackEditor/>

                <FeedbackList />
            </Fragment>

        )
    }
}