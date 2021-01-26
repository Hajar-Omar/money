import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TestingModule } from "src/app/testing/testing.module";

import { AccountListComponent } from "./account-list.component";

describe("AccountListComponent", () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AccountListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
