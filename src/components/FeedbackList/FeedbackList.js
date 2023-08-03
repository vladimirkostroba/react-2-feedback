import React from "react";
import PropTypes from "prop-types";

const FeedbackList = ({good,neutral,bad,total,procent}) => (
    <div>
        <h2>Statistics</h2>
        {total === 0 && (<h3>Not feedbacks geeven</h3>)}

        {total > 0 && (
             <ul className="list">
             <li className="item">
                 <p className="text">good: {good}</p>
             </li>
             <li className="item">
                 <p className="text">neutral: {neutral}</p>
             </li>
             <li className="item">
                 <p className="text">bad: {bad}</p>
             </li>
             <li className="item">
                 <p className="text">total: {total}</p>
             </li>
             <li className="item">
                 <p className="text">positive feedbacks: {procent ? procent : 0}%</p>
             </li>
         </ul>
        )}
    </div>
   
);

 FeedbackList.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    procent:PropTypes.number.isRequired,
 }

   

export default FeedbackList