import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as submitModule from "./utils/submitAnswers";
import { vi } from "vitest";

describe("App integration test", () => {
  it("lets the user answer all questions and submits results", async () => {
    const submitSpy = vi
      .spyOn(submitModule, "submitAnswers")
      .mockImplementation(() => {});

    render(<App />);

    const QUESTIONS = [
      "Are you male and aged between 18-75?",
      "Do you smoke or drink?",
      "Do you have heart disease?",
      "Do you have high blood pressure, or are you currently on treatment for high blood pressure?",
      "Have you been advised to avoid strenuous exercise?",
    ];

    for (let i = 0; i < QUESTIONS.length; i++) {
      expect(screen.getByText(QUESTIONS[i])).toBeInTheDocument();

      fireEvent.click(screen.getByLabelText("Yes"));
      fireEvent.click(screen.getByRole("button"));
    }

    expect(await screen.findByText("Thank you")).toBeInTheDocument();
    expect(submitSpy).toHaveBeenCalledTimes(1);

    expect(submitSpy).toHaveBeenCalledWith([
      { No: 1, question: QUESTIONS[0], response: "yes" },
      { No: 2, question: QUESTIONS[1], response: "yes" },
      { No: 3, question: QUESTIONS[2], response: "yes" },
      { No: 4, question: QUESTIONS[3], response: "yes" },
      { No: 5, question: QUESTIONS[4], response: "yes" },
    ]);
  });
});
