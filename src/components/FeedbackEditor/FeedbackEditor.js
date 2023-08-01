import React from "react";


export default function FeedbackEditor (){
    return(
        <div className="feedback">
           <div className="battonsList">
              <button type="button" className="button">good</button>
              <button type="button" className="button">neutral</button>
              <button type="button" className="button">bad</button>
           </div>
        </div>
    )
}