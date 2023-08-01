import React from "react";

export default function FeedbackList({good, neutral, bad}){
    return(
        <ul className="list">
            <li className="item">
                <p className="text">good:{good}</p>
            </li>
            <li className="item">
                <p className="text">neutral:{neutral}</p>
            </li>
            <li className="item">
                <p className="text">bad:{bad}</p>
            </li>
        </ul>
    )
}