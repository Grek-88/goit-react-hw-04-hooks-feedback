import BtnFeedback from "../BtnFeedback/BtnFeedback";

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <BtnFeedback text="Good" onClick={onLeaveFeedback} />
      <BtnFeedback text="Neutral" onClick={onLeaveFeedback} />
      <BtnFeedback text="Bad" onClick={onLeaveFeedback} />
    </>
  );
}
