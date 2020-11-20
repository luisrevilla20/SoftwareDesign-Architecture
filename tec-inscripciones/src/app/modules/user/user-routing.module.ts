import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SendComponent} from './pages/send/send.component'


const rutas: Routes= [
    {path: 'Home', component: HomeComponent},
    {path: 'Send', component: SendComponent},
    //{path: 'Withdrawal', component: WithdrawalComponent},
    //{path: 'Account', component: AccountComponent}
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class UserRoutingModule{

}
