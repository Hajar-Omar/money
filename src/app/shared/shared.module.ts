import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatTooltipModule,
} from "@angular/material";
import { DigitOnlyDirective } from "../core/directives/digit-only/digit-only.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { CreateAccountComponent } from "../account/dialogs/create-account/create-account.component";

@NgModule({
  declarations: [DigitOnlyDirective, SnackbarComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    // material modules
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,

    // directives
    DigitOnlyDirective,

    // components
    SnackbarComponent,
    CreateAccountComponent
  ],
  entryComponents: [SnackbarComponent, CreateAccountComponent],
})
export class SharedModule {}
