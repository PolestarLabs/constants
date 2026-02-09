"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.league = exports.discoin = exports.countries = exports.Clusters = void 0;
var clusters_1 = require("./clusters");
Object.defineProperty(exports, "Clusters", { enumerable: true, get: function () { return __importDefault(clusters_1).default; } });
var countries_1 = require("./countries");
Object.defineProperty(exports, "countries", { enumerable: true, get: function () { return __importDefault(countries_1).default; } });
var discoin_1 = require("./discoin");
Object.defineProperty(exports, "discoin", { enumerable: true, get: function () { return __importDefault(discoin_1).default; } });
__exportStar(require("./lootbox"), exports);
__exportStar(require("./shop"), exports);
__exportStar(require("./timers"), exports);
__exportStar(require("./ui-colors"), exports);
var league_json_1 = require("./league.json");
Object.defineProperty(exports, "league", { enumerable: true, get: function () { return __importDefault(league_json_1).default; } });
//# sourceMappingURL=index.js.map