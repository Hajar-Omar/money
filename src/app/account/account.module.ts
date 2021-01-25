import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountListComponent } from "./account-list/account-list.component";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { SharedModule } from "../shared/shared.module";
import { PayeeComponent } from "./payee/payee.component";

@NgModule({
  declarations: [AccountListComponent, AccountDetailsComponent, PayeeComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
