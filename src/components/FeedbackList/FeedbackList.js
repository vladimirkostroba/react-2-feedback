import React from "react";

// export default function FeedbackList({obj}){
//     // const {good,neutral,bad} = state;

//     return(
//         <ul className="list">
//             <li className="item">
//                 <p className="text">good:{obj.good}</p>
//             </li>
//             <li className="item">
//                 <p className="text">neutral:{obj.neutral}</p>
//             </li>
//             <li className="item">
//                 <p className="text">bad:{obj.bad}</p>
//             </li>
//         </ul>
//     )
// }

const FeedbackList = ({good,neutral,bad,onTotalFeedback}) => (
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
    <li className="item">
        <p className="text">total:{onTotalFeedback()}</p>
    </li>
</ul>
)

export default FeedbackList