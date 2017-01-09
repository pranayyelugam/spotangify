import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AppComponent } from './app.component';
import {HomeComponent } from './home/home.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumsComponent} from './albums/albums.component';
const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    },{
        path:'about',
        component:AboutComponent
    },{
        path:'artist/:id',
        component: ArtistComponent
    },
    {
        path:'album/:id',
        component: AlbumsComponent
    },
    

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}