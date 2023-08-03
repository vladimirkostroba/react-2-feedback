import React from "react";
import PropTypes from "prop-types";


export default function FeedbackEditor ({onGoodFeedback,onNeutralFeedback,onBadFeedback}){
    return(
        <div className="feedback">
            <h2>Please leave you feedback</h2>
           <div className="battonsList">
              <button type="button" className="button" onClick={onGoodFeedback}>good</button>
              <button type="button" className="button" onClick={onNeutralFeedback}>neutral</button>
              <button type="button" className="button" onClick={onBadFeedback}>bad</button>
           </div>
        </div>
    )
}

FeedbackEditor.propTypes = {
    onGoodFeedback:PropTypes.func.isRequired,
    onNeutralFeedback:PropTypes.func.isRequired,
    onBadFeedback:PropTypes.func.isRequired,
}