"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fbBaseline = void 0;
function fibonacci(start, pos) {
    let res = start;
    let pre = 0;
    while (pos--) {
        let t = res;
        res += pre;
        pre = t;
    }
    return res;
}
exports.default = fibonacci;
exports.fbBaseline = 128;
//# sourceMappingURL=Fibonacci.js.map