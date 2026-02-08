"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LootGems = exports.LootItemType = exports.LootRarity = exports.DROPMAX = void 0;
exports.DROPMAX = 1000;
var LootRarity;
(function (LootRarity) {
    LootRarity[LootRarity["C"] = 1000] = "C";
    LootRarity[LootRarity["U"] = 400] = "U";
    LootRarity[LootRarity["R"] = 250] = "R";
    LootRarity[LootRarity["SR"] = 150] = "SR";
    LootRarity[LootRarity["UR"] = 70] = "UR";
    LootRarity[LootRarity["XR"] = 0] = "XR";
})(LootRarity = exports.LootRarity || (exports.LootRarity = {}));
var LootItemType;
(function (LootItemType) {
    LootItemType[LootItemType["JDE"] = 400] = "JDE";
    LootItemType[LootItemType["RBN"] = 250] = "RBN";
    LootItemType[LootItemType["MDL"] = 200] = "MDL";
    LootItemType[LootItemType["BKG"] = 150] = "BKG";
    LootItemType[LootItemType["BPK"] = 200] = "BPK";
    LootItemType[LootItemType["ITM"] = 0] = "ITM";
    LootItemType[LootItemType["SPH"] = 1] = "SPH";
})(LootItemType = exports.LootItemType || (exports.LootItemType = {}));
var LootGems;
(function (LootGems) {
    LootGems[LootGems["C"] = 100] = "C";
    LootGems[LootGems["U"] = 200] = "U";
    LootGems[LootGems["R"] = 400] = "R";
    LootGems[LootGems["SR"] = 650] = "SR";
    LootGems[LootGems["UR"] = 1000] = "UR";
    LootGems[LootGems["XR"] = 2500] = "XR";
})(LootGems = exports.LootGems || (exports.LootGems = {}));
//# sourceMappingURL=lootbox.js.map