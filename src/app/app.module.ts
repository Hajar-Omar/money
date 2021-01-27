import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./core/components/header/header.component";
import { SideMenuComponent } from "./core/components/side-menu/side-menu.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { AppConfigService } from "./core/services/app-config/app-config.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpHeadersInterceptor } from "./core/interceptors/http.interceptor";
import { HttpErrorInterceptor } from "./core/interceptors/http-error.interceptor";
import { SharedModule } from "./shared/shared.module";
import { CreateAccountComponent } from "./account/dialogs/create-account/create-account.component";
import { SnackbarComponent } from "./shared/components/snackbar/snackbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    NotFoundComponent,
    SnackbarComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  entryComponents: [SnackbarComponent, CreateAccountComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (setting: AppConfigService) => () => setting.getSetting(),
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
