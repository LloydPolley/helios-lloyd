import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Questions from "./Questions";

const defaultProps = {
  isLastQuestion: false,
  currentQuestion: "Do you smoke?",
  selected: null,
  setSelected: vi.fn(),
  handleNextClick: vi.fn(),
};

describe("Questions component", () => {
  it("renders the question text", () => {
    render(<Questions {...defaultProps} />);
    expect(screen.getByText("Do you smoke?")).toBeInTheDocument();
  });

  it("renders Yes and No radio buttons", () => {
    render(<Questions {...defaultProps} />);
    expect(screen.getByLabelText("Yes")).toBeInTheDocument();
    expect(screen.getByLabelText("No")).toBeInTheDocument();
  });

  it("calls setSelected with true when Yes is clicked", () => {
    const setSelected = vi.fn();
    render(<Questions {...defaultProps} setSelected={setSelected} />);
    fireEvent.click(screen.getByLabelText("Yes"));
    expect(setSelected).toHaveBeenCalledWith("yes");
  });

  it("calls setSelected with false when No is clicked", () => {
    const setSelected = vi.fn();
    render(<Questions {...defaultProps} setSelected={setSelected} />);
    fireEvent.click(screen.getByLabelText("No"));
    expect(setSelected).toHaveBeenCalledWith("no");
  });

  it("disables the Next button when selected is null", () => {
    render(<Questions {...defaultProps} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("enables the Next button when selected is not null", () => {
    render(<Questions {...defaultProps} selected={"yes"} />);
    expect(screen.getByRole("button")).toBeEnabled();
  });

  it('displays "Send results" if isLastQuestion is true', () => {
    render(
      <Questions {...defaultProps} isLastQuestion={true} selected={"yes"} />
    );
    expect(screen.getByText("Send results")).toBeInTheDocument();
  });

  it('renders "Thank you" when no current question is provided', () => {
    render(<Questions {...defaultProps} currentQuestion="" />);
    expect(screen.getByText("Thank you")).toBeInTheDocument();
  });

  it("calls handleNextClick when the button is clicked", () => {
    const handleNextClick = vi.fn();
    render(
      <Questions
        {...defaultProps}
        selected={"yes"}
        handleNextClick={handleNextClick}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleNextClick).toHaveBeenCalled();
  });
});
