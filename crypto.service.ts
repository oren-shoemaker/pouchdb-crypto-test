import PouchDB from 'pouchdb';
import {Injectable} from '@angular/core';

@Injectable()
export class CryptoService{

    private salt: string = "salt";
    private localdb;

    public setDB(db){
        this.localdb = db;
    }

    public encryptDB(uname, pass){
        this.localdb.get('_local/crypto').then(function (doc){
            return new Promise(function (resolve, reject){
                crypto.pbkdf2(uname+pass, doc.salt, doc.iterations, 256/8, doc.digest, function(err, key){
                    if (err){
                        return reject(err);
                    }
                    resolve(key);
                });
            });
        }).then(function (key){

        })
    }

}