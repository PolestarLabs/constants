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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundPrices = exports.MedalPrices = exports.TOKEN_MODIFIER = exports.JADE_MODIFIER = exports.SAPPHIRE_MODIFIER = void 0;
const Fibonacci_1 = __importStar(require("./util/Fibonacci"));
const mdP = (S) => ~~((0, Fibonacci_1.default)(Fibonacci_1.fbBaseline, S));
const bgP = (S) => ~~(mdP(S) * (0, Fibonacci_1.default)(Fibonacci_1.fbBaseline * 2.5, 1) * S / Fibonacci_1.fbBaseline);
exports.SAPPHIRE_MODIFIER = 0.000794912559618442;
exports.JADE_MODIFIER = 2250;
exports.TOKEN_MODIFIER = 0.5;
var MedalPrices;
(function (MedalPrices) {
    /** 1664 */
    MedalPrices[MedalPrices["UR"] = mdP(6)] = "UR";
    /** 1024 */
    MedalPrices[MedalPrices["SR"] = mdP(5)] = "SR";
    /** 640 */
    MedalPrices[MedalPrices["R"] = mdP(4)] = "R";
    /** 384 */
    MedalPrices[MedalPrices["U"] = mdP(3)] = "U";
    /** 256 */
    MedalPrices[MedalPrices["C"] = mdP(2)] = "C";
})(MedalPrices = exports.MedalPrices || (exports.MedalPrices = {}));
var BackgroundPrices;
(function (BackgroundPrices) {
    /** 24960 */
    BackgroundPrices[BackgroundPrices["UR"] = bgP(6)] = "UR";
    /** 12800 */
    BackgroundPrices[BackgroundPrices["SR"] = bgP(5)] = "SR";
    /** 6400 */
    BackgroundPrices[BackgroundPrices["R"] = bgP(4)] = "R";
    /** 2880 */
    BackgroundPrices[BackgroundPrices["U"] = bgP(3)] = "U";
    /** 1280 */
    BackgroundPrices[BackgroundPrices["C"] = bgP(2)] = "C";
})(BackgroundPrices = exports.BackgroundPrices || (exports.BackgroundPrices = {}));
//# sourceMappingURL=shop.js.map