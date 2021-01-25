import { Component, Input, OnInit } from "@angular/core";
import { IMonth } from "../../models/budget-details";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input("months") months: IMonth[];

  constructor() {}

  ngOnInit() {}
}
