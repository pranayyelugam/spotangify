import { Component } from '@angular/core';
import { SpotifyService } from './spotifysearch.service'; 
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers:[SpotifyService],
})
export class AppComponent {
  title = 'app works!';
  
    
    
    constructor(){
        
    }
    
    
}
