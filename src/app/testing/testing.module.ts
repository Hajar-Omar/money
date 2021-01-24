import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SharedModule,
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
  ],
})
export class TestingModule {}
