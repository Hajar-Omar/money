import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from "@angular/material";
import { AccountService } from "src/app/core/services/account/account.service";
import { TestingModule } from "src/app/testing/testing.module";

import { CreateAccountComponent } from "./create-account.component";

describe("CreateAccountComponent", () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  let MatDialogRef: MatDialogRef<CreateAccountComponent>;
  let MatSnackBar: MatSnackBar;
  let AccountService: AccountService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CreateAccountComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        MatSnackBar,
        AccountService
      ],
    }).compileComponents();


    MatDialogRef= TestBed.get(MatDialogRef)
    MatSnackBar= TestBed.get(MatSnackBar)
    AccountService= TestBed.get(AccountService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });

});
