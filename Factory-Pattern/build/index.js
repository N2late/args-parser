"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var flagFactory_1 = require("./flagFactory");
var util_1 = require("./util/util");
var args = process.argv.slice(2);
(0, util_1.checkInputIsNotEmpty)(args);
args = (0, util_1.checkIfIsArray)(args) ? (0, util_1.splitArray)(args) : args;
var flags = {};
args.forEach(function (arg, index) {
    if ((0, util_1.checkIfIsNumber)(args, index)) {
        var numberFlag = flagFactory_1.FlagFactory.createFlag('number', arg, args, index);
        return (flags = __assign(__assign({}, flags), numberFlag));
    }
    if ((0, util_1.checkIfKey)(arg) && (0, util_1.checkIfIsBoolean)(args, index)) {
        var booleanFlag = flagFactory_1.FlagFactory.createFlag('boolean', arg);
        return (flags = __assign(__assign({}, flags), booleanFlag));
    }
    else if ((0, util_1.checkIfKey)(arg)) {
        var compositeFlag = flagFactory_1.FlagFactory.createFlag('string', arg, args, index);
        return (flags = __assign(__assign({}, flags), compositeFlag));
    }
});
var newJson = JSON.stringify(flags);
console.log(newJson);
//# sourceMappingURL=index.js.map