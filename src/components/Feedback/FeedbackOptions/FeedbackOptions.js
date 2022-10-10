import React from "react";
import { Button } from "./FeedbackOptions.styled";
const FeedbackOptions = ({onLeaveFeedback}) => (
   <>
   <Button type="button" onClick={() => onLeaveFeedback("good")}>Good
      </Button> 
      <Button type="button" onClick={() => onLeaveFeedback("neutral")}>Neutral
      </Button>
      <Button type="button" onClick={() =>onLeaveFeedback("bad")}>Bad
      </Button>
   </>
);

export default FeedbackOptions;