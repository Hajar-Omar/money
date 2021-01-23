import { Component, Input, OnInit } from "@angular/core";
import { ICateBudget } from "src/app/core/models/category";

@Component({
  selector: "app-category-details",
  templateUrl: "./category-details.component.html",
  styleUrls: ["./category-details.component.scss"],
})
export class CategoryDetailsComponent implements OnInit {
  @Input("data") data: ICateBudget;

  constructor() {}

  ngOnInit() {}
}
