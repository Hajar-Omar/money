import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppConfigService } from "src/app/core/services/app-config/app-config.service";
import { TransactionService } from "src/app/core/services/transaction/transaction.service";
import { TestingModule } from "src/app/testing/testing.module";

import { PayeeComponent } from "./payee.component";

describe("PayeeComponent", () => {
  let component: PayeeComponent;
  let fixture: ComponentFixture<PayeeComponent>;

  let appConfigService: AppConfigService;
  let transactionService: TransactionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [PayeeComponent],
      providers: [AppConfigService, TransactionService],
    }).compileComponents();

    transactionService = TestBed.get(TransactionService);
    appConfigService = TestBed.get(AppConfigService);

    // set base url
    appConfigService.AppConfig = {
      baseUrl: "https://api.youneedabudget.com/v1/",
      token: "",
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
