"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util/util");
var args = process.argv.slice(2);
(0, util_1.checkInputIsNotEmpty)(args);
args = (0, util_1.checkIfIsArray)(args) ? (0, util_1.splitArray)(args) : args;
var obj = {};
args.forEach(function (arg, index) {
    if ((0, util_1.checkIfIsNumber)(args, index)) {
        var key = arg.replace(/--/g, '');
        obj[key] = parseInt(args[index + 1]);
        return;
    }
    if ((0, util_1.checkIfKey)(arg) && (0, util_1.checkIfIsBoolean)(args, index)) {
        console.log('boolean');
        var key = arg.replace(/--/g, '');
        obj[key] = true;
        return;
    }
    else if ((0, util_1.checkIfKey)(arg)) {
        var key = arg.replace(/--/g, '');
        obj[key] = args[index + 1];
        return;
    }
});
obj = JSON.stringify(obj);
console.log(obj);
//# sourceMappingURL=index.js.map