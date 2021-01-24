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
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatTooltipModule,
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,

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
  ],
  exports: [
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
  ],
})
export class SharedModule {}
