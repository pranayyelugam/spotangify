import {Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';

const routes: Routes = [
    {
        path:'contact',
        pathMatch:'full',
        component:ContactComponent
    }
 
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule{}