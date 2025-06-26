import "./Questions.css";
import type { SelectValues } from "../../types";

const Questions = ({
  isLastQuestion,
  currentQuestion,
  selected,
  setSelected,
  handleNextClick,
}: {
  isLastQuestion: boolean;
  currentQuestion: string;
  selected: SelectValues;
  setSelected: (response: "yes" | "no") => void;
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
                checked={selected === "yes"}
                onChange={() => setSelected("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="no"
                checked={selected === "no"}
                onChange={() => setSelected("no")}
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
