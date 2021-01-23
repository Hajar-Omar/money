import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {
  MatCheckboxModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
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
  ],
})
export class SharedModule {}
