import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ICateBudget } from "src/app/core/models/category";
import { categoryDetailsMock } from "src/app/testing/mock-data/categoryDetails.mock";
import { TestingModule } from "src/app/testing/testing.module";

import { CategoryDetailsComponent } from "./category-details.component";

describe("CategoryDetailsComponent", () => {
  let component: CategoryDetailsComponent;
  let fixture: ComponentFixture<CategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CategoryDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailsComponent);
    component = fixture.componentInstance;

    const data: ICateBudget = categoryDetailsMock; // assign @Input prop
    component.data = data;

    fixture.detectChanges(); // calls NgOnit
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
