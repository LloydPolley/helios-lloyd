import { vi } from "vitest";
import { submitAnswers } from "./submitAnswers";
import type { AnswerType } from "../types";

const mockData: AnswerType[] = [
  {
    questionNo: 1,
    question: "Do you smoke?",
    response: true,
  },
  {
    questionNo: 2,
    question: "Do you drink?",
    response: false,
  },
];

describe("submitAnswers", () => {
  it("logs the submitted answers", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    submitAnswers(mockData);
    expect(consoleSpy).toHaveBeenCalledWith("Submitted answers:", mockData);
  });
});
