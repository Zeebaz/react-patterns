import { fireEvent, render, screen } from "@testing-library/react";
import { HOC } from ".";
import { BrowserRouter } from "react-router-dom";

describe("HOC", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HOC />
      </BrowserRouter>
    );
  });

  test("Should renders HOC title", () => {
    expect(screen.getByText(/Hight Order Component Pattern/i)).toBeDefined();
  });

  test("Should not display menu", () => {
    expect(screen.getByText(/props getters/i)).toBeNull();
    screen.debug();
  });

  test("Should display menu", () => {
    const menuButton = screen.getByTestId("menu-button");
    fireEvent.click(menuButton);
    expect(screen.getByText(/props getters/i)).toBeDefined();
  });
});
