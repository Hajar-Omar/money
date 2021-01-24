import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountListComponent } from "../account-list/account-list.component";
import { AccountDetailsComponent } from "../account-details/account-details.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AccountListComponent, AccountDetailsComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
