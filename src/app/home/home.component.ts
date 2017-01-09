import { Component } from '@angular/core';
import { SpotifyService } from '../spotifysearch.service'; 
import { Observable } from 'rxjs/Observable';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers:[SpotifyService],
})
export class HomeComponent {
  title = 'app works!';
   searchStr:string;
    searchRes:any;
    
    constructor(private _spotifyService:SpotifyService){
        
    }
    
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
              this.searchRes = res.artists.items;
                console.log(res.artists.items);
            })
    }
}
