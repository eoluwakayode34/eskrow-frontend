import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByText("Get started by editing");

    expect(heading).toBeInTheDocument();
  });
});
