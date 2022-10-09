import React from "react";
import { Li, Span} from "./Statistics.styled";
import {countPositiveFeedbackPercentage} from 'components/Utils/utils'
const Statistics = ({good, neutral, bad, total} ) => (
    <ul>
    <Li>Good:<Span>{good}</Span>
    </Li> 
    <Li>Neutral:<Span>{neutral}</Span>
    </Li> 
    <Li>Bad:<Span>{bad}</Span>
    </Li> 
    <Li>Total:<Span>{total}</Span>
    </Li> 
    <Li>Positive feedback:<Span>{countPositiveFeedbackPercentage(good, total)} %</Span>
    </Li> 
    </ul>
);

export default Statistics;