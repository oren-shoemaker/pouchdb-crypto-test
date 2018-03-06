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
    this.getInfo();
  }

  private getInfo(){
    this.db.info().then(info =>{
      this.dbinfo = info;
    }).catch(err =>{
      this.dbinfo = err;
    })
  }




}
