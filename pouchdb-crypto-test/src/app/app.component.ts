import {Component, OnInit} from '@angular/core';
import PouchDB from 'pouchdb';
import {denodeify} from "q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  db: PouchDB;
  dbinfo = 'test';

  public ngOnInit(){
    this.db = new PouchDB('kittens');
    this.updateInfo();
  }

  public updateInfo(){
    this.dbinfo = this.db.info().then(info =>{
      console.log(info);
      return info;
    }).catch(err =>{
      console.log(err);
      return err;
    });
  }




}
