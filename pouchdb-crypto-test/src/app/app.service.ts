import PouchDB from 'pouchdb';
import {Injectable} from "@angular/core";


@Injectable()

export class CryptoService{

  public encrypt(uname:string,pw:string,db:PouchDB){
    db.crypto(uname+pw);
  }

}

