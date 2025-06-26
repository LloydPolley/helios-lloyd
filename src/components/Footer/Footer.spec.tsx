import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders both lists with correct items", () => {
    render(<Footer />);

    expect(screen.getAllByRole("list")).toHaveLength(2);
  });
});
