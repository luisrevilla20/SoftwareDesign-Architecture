import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';



const rutas: Routes= [
    {path: '', component: LogInComponent},
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class LogInRoutingModule{

}
