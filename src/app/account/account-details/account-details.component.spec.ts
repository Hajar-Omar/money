import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TestingModule } from "src/app/testing/testing.module";

import { AccountDetailsComponent } from "./account-details.component";

describe("AccountDetailsComponent", () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AccountDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
