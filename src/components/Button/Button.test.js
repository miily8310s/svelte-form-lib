import { render } from "@testing-library/svelte";
import { Button } from "./index";

describe("Buttons", () => {
  it("should have xs style when size is xs", () => {
    const { container } = render(Button, { size: "xs" });

    const button = container.querySelector("button");
    expect(button.classList.contains("xsStyle")).toBe(true);
  });
  it("should have sm style when size is sm", () => {
    const { container } = render(Button, { size: "sm" });

    expect(container).toHaveTextContent("Button");
    const button = container.querySelector("button");
    expect(button.classList.contains("smStyle")).toBe(true);
    expect(container).toMatchSnapshot();
  });
  it("should have md style when size is md", () => {
    const { container } = render(Button, { size: "md" });

    const button = container.querySelector("button");
    expect(button.classList.contains("mdStyle")).toBe(true);
  });
  it("should have lg style when size is lg", () => {
    const { container } = render(Button, { size: "lg" });

    const button = container.querySelector("button");
    expect(button.classList.contains("lgStyle")).toBe(true);
  });
});
