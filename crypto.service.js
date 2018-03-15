"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let CryptoService = class CryptoService {
    constructor() {
        this.salt = "salt";
    }
    setDB(db) {
        this.localdb = db;
    }
    encryptDB(uname, pass) {
        this.localdb.get('_local/crypto').then(function (doc) {
            return new Promise(function (resolve, reject) {
                crypto.pbkdf2(uname + pass, doc.salt, doc.iterations, 256 / 8, doc.digest, function (err, key) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(key);
                });
            });
        }).then(function (key) {
        });
    }
};
CryptoService = __decorate([
    core_1.Injectable()
], CryptoService);
exports.CryptoService = CryptoService;
//# sourceMappingURL=crypto.service.js.map