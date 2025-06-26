import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
import Nav from "./components/Nav/Nav";
import { submitAnswers } from "./utils/submitAnswers";

import type { AnswerType, SelectValues } from "./types";

import "./App.css";

const QUESTIONS = [
  "Are you male and aged between 18-75?",
  "Do you smoke or drink?",
  "Do you have heart disease?",
  "Do you have high blood pressure, or are you currently on treatment for high blood pressure?",
  "Have you been advised to avoid strenuous exercise?",
];

function App() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [selected, setSelected] = useState<SelectValues>(null);
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const handleAnswer = async (response: SelectValues) => {
    const newAnswer = {
      No: questionNumber + 1,
      question: QUESTIONS[questionNumber],
      response,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    setQuestionNumber(questionNumber + 1);

    if (questionNumber + 1 === QUESTIONS.length) {
      await submitAnswers(updatedAnswers);
    }
  };

  const handleNextClick = () => {
    if (selected !== null) {
      handleAnswer(selected);
      setSelected(null);
    }
  };

  return (
    <div className="page">
      <Nav />
      <Questions
        isLastQuestion={questionNumber + 1 === QUESTIONS.length}
        currentQuestion={QUESTIONS[questionNumber]}
        selected={selected}
        handleNextClick={handleNextClick}
        setSelected={setSelected}
      />
      <Footer />
    </div>
  );
}

export default App;
