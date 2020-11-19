import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from 'src/app/modules/user/components/balance/balance.component';
import { InfoTableComponent } from 'src/app/modules/user/components/info-table/info-table.component';
import { NavComponent } from './components/nav/nav.component';
import { SendFormComponent } from './components/send-form/send-form.component';
import { WithFormComponent } from './components/with-form/with-form.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { HomeComponent } from './pages/home/home.component';
import { SendComponent} from './pages/send/send.component'
import { WithdrawalComponent } from './pages/withdrawal/withdrawal.component';
import { AccountComponent } from './pages/account/account.component';

const rutas: Routes= [
    {path: 'Home', component: HomeComponent},
    {path: 'Send', component: SendComponent},
    {path: 'Withdrawal', component: WithdrawalComponent},
    {path: 'Account', component: AccountComponent}
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class UserRoutingModule{

}
