import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { SideMenuComponent } from "./core/components/side-menu/side-menu.component";
import { TestingModule } from "./testing/testing.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, RouterTestingModule],
      declarations: [AppComponent, SideMenuComponent, HeaderComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
