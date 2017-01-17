import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {ProjectsComponent} from '../projects/projects.component';
import {HomeComponent} from '../home/home.component';
const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule{}