import React from "react";


export default function FeedbackEditor ({onGoodFeedback,onNeutralFeedback,onBadFeedback}){
    return(
        <div className="feedback">
           <div className="battonsList">
              <button type="button" className="button" onClick={onGoodFeedback}>good</button>
              <button type="button" className="button" onClick={onNeutralFeedback}>neutral</button>
              <button type="button" className="button" onClick={onBadFeedback}>bad</button>
           </div>
        </div>
    )
}