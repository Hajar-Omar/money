import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "src/app/shared/components/snackbar/snackbar.component";

export function openSnackBar(
  _snackBar: MatSnackBar,
  msg: string,
  style: boolean
) {
  _snackBar.openFromComponent(SnackbarComponent, {
    duration: 3000,
    horizontalPosition: "center",
    verticalPosition: "top",
    panelClass: style ? "alert-info" : "alert-danger",
    data: msg,
  });

  // _snackBar.open(msg, "", {
  //   duration: 3000,
  //   horizontalPosition: "center",
  //   verticalPosition: "top",
  //   panelClass: style ? "success" : "fail",
  // });
}
