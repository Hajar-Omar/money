import { ElementRef } from "@angular/core";
import { DigitOnlyDirective } from "./digit-only.directive";

describe("DigitOnlyDirective", () => {
  it("should create an instance", () => {
    let element: ElementRef;
    const directive = new DigitOnlyDirective(element);
    expect(directive).toBeTruthy();
  });
});
