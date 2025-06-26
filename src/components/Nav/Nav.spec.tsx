import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

vi.mock("../icons/Logo", () => ({
  default: () => <div data-testid="logo">Logo</div>,
}));

describe("Nav", () => {
  it("renders the logo", () => {
    render(<Nav />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
