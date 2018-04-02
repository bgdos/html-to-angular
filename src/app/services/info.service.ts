import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InfoService {

  info: any = {};
  loaded: boolean = false;
  loaded_about: boolean = false
  team: any[] = [];

  constructor(public http:Http) {
    this.load_info();
    this.load_team_info();
   }
   public load_info(){
    this.http.get("assets/data/info.data.json")
    .subscribe( data =>{
      this.info = data.json();
      this.loaded = true;
    })
   }
   public load_team_info(){
    this.http.get("https://web-angular-beeaf.firebaseio.com/team.json")
    .subscribe( data =>{
      this.team = data.json();
      this.loaded_about = true;
    })
   }
 
}
