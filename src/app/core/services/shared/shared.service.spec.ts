import { TestBed } from "@angular/core/testing";
import { TestingModule } from "src/app/testing/testing.module";

import { SharedService } from "./shared.service";

describe("SharedService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [TestingModule] })
  );

  it("should be created", () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
