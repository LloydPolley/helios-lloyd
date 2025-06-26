import { vi } from "vitest";
import { submitAnswers } from "./submitAnswers";
import type { AnswerType } from "../types";

const mockData: AnswerType[] = [
  {
    No: 1,
    question: "Do you smoke?",
    response: "yes",
  },
  {
    No: 2,
    question: "Do you drink?",
    response: "no",
  },
];

describe("submitAnswers", () => {
  it("logs the submitted answers", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    submitAnswers(mockData);
    expect(consoleSpy).toHaveBeenCalledWith("Submitted answers:", mockData);
  });
});
