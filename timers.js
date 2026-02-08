"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Daily = exports.COMMEND = exports.THANKS = exports.TRANSFER = exports.BOX_TRADE = void 0;
/** 2 hours */
exports.BOX_TRADE = 2 * 60 * 60e3;
/** 4 hours */
exports.TRANSFER = 4 * 60 * 60e3;
/** 1 hour */
exports.THANKS = 1 * 3.6e+6;
/** 1 hour */
exports.COMMEND = 1 * 3.6e+6;
var Daily;
(function (Daily) {
    /** 22 hours */
    Daily[Daily["DAILY_DAY"] = 79200000] = "DAILY_DAY";
    /** 55 hours */
    Daily[Daily["DAILY_EXPIRE"] = 198000000] = "DAILY_EXPIRE";
})(Daily = exports.Daily || (exports.Daily = {}));
//# sourceMappingURL=timers.js.map