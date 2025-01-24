import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductPage from "../page";

describe("Product Page render", () => {
  it("renders a heading", () => {
    const { container } = render(<ProductPage />);
    const heading = screen.getByText(/More than a /);
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
