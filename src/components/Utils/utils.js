export function countTotalFeedback(good, bad, neutral){
    return  good + bad + neutral
}

export function countPositiveFeedbackPercentage(good, total){
    return (Math.ceil((100 * good) / total))
}