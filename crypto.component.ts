import {CryptoService} from "./crypto.service";
import {Component} from "@angular/core";
import PouchDB from 'pouchdb';

@Component({
    selector: 'crypto-component',
    templateUrl: 'crypto.component.html'

})

export class CryptoComponent{

    private db = new PouchDB('kittens');

    constructor(private cryptoService: CryptoService){}

    ngOnInit() {
        
    }

}
