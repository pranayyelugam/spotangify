import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotifysearch.service'; 
import {Artist} from '../Artist';
import {Album} from '../Album';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{ 
    id:string;
    album:Album[];
    
    constructor(
        private _spotifyService:SpotifyService,
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
