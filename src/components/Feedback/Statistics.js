import React from "react";
import {countPositiveFeedbackPercentage} from 'components/Utils/utils'
const Statistics = ({good, neutral, bad, total} ) => (
    <ul>
    <li>Good:{good}
    </li> 
    <li>Neutral:{neutral}
    </li> 
    <li>Bad:{bad}
    </li> 
    <li>Total:{total}
    </li> 
    <li>Positive feedback:{countPositiveFeedbackPercentage(good, total)} %
    </li> 
    </ul>
);

export default Statistics;