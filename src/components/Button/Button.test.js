import { render } from "@testing-library/svelte";
import { Button } from "./index";

describe("Buttons", () => {
  it("should include text for All, Active and Completed buttons", () => {
    const { container } = render(Button, { size: "sm" });

    expect(container).toHaveTextContent("Button");
  });
});
