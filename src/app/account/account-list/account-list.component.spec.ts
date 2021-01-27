import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { IAccountListRes } from "src/app/core/models/account";
import { AccountService } from "src/app/core/services/account/account.service";
import { AppConfigService } from "src/app/core/services/app-config/app-config.service";
import { accountsListMock } from "src/app/testing/mock-data/accountList.mock";
import { TestingModule } from "src/app/testing/testing.module";

import { AccountListComponent } from "./account-list.component";

describe("AccountListComponent", () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  let appConfigService: AppConfigService;
  let accountService: AccountService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AccountListComponent],
      providers: [AppConfigService, AccountService],
    }).compileComponents();

    appConfigService = TestBed.get(AppConfigService);
    accountService = TestBed.get(AccountService);

    // set base url
    appConfigService.AppConfig = {
      baseUrl: "https://api.youneedabudget.com/v1/",
      token: "",
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("getAccounts() to work correctly", fakeAsync(() => {
    const response: IAccountListRes = accountsListMock;

    spyOn(accountService, "getAccounts").and.returnValue(
      of(response).pipe(delay(1))
    );

    // Trigger ngOnInit()
    fixture.detectChanges();
    expect(component.dataSource.data.length).toEqual(0);

    // Act
    component.loadAccounts();

    // Simulates the asynchronous passage of time
    tick(1);
    expect(component.dataSource.data).toEqual(response.data.accounts);
  }));
});
