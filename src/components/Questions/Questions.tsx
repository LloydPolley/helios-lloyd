import "./Questions.css";

const Questions = ({
  isLastQuestion,
  currentQuestion,
  selected,
  setSelected,
  handleNextClick,
}: {
  isLastQuestion: boolean;
  currentQuestion: string;
  selected: boolean | null;
  setSelected: (response: boolean | null) => void;
  handleNextClick: () => void;
}) => {
  return (
    <div className="questionnaire">
      {currentQuestion ? (
        <>
          <p className="questionnaire-header">{currentQuestion}</p>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="answer"
                value="yes"
                checked={selected === true}
                onChange={() => setSelected(true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="no"
                checked={selected === false}
                onChange={() => setSelected(false)}
              />
              No
            </label>
          </div>
          <button onClick={handleNextClick} disabled={selected === null}>
            {isLastQuestion ? "Send results" : "Next question"}
          </button>
        </>
      ) : (
        <p className="thanks">Thank you</p>
      )}
    </div>
  );
};

export default Questions;
