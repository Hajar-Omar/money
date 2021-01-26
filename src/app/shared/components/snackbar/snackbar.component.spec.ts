import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TestingModule } from "src/app/testing/testing.module";

import { SnackbarComponent } from "./snackbar.component";

describe("SnackbarComponent", () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  let MatDialogRef: MatDialogRef<SnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [SnackbarComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    MatDialogRef = TestBed.get(MatDialogRef);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
