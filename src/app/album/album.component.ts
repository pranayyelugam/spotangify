import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../service/searchservice.service';
import {Artists} from '../artists';
import {Albums} from '../albums';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent { 
    id:string;
    album:Albums[];
    
    constructor(
        private _spotifyService:SearchserviceService,
        private _route:ActivatedRoute){
        
    }
    
     ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })                               
            })
    }
}
