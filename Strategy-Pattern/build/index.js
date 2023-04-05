"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseStrategy_1 = require("./parseStrategy");
var util_1 = require("./util/util");
var args = process.argv.slice(2);
(0, util_1.checkInputIsNotEmpty)(args);
args = (0, util_1.checkIfIsArray)(args) ? (0, util_1.splitArray)(args) : args;
var obj = {};
args.forEach(function (arg, index) {
    var contextParser = new parseStrategy_1.ContextParser(new parseStrategy_1.StrategyParseSimple());
    contextParser.setStrategy(new parseStrategy_1.StrategyParseWithNumber());
    if ((0, util_1.checkIfIsNumber)(args, index)) {
        contextParser.setStrategy(new parseStrategy_1.StrategyParseWithNumber());
        contextParser.parse(args, obj, arg, index);
        return;
    }
    if ((0, util_1.checkIfKey)(arg) && (0, util_1.checkIfIsBoolean)(args, index)) {
        contextParser.setStrategy(new parseStrategy_1.StrategyParseSimple());
        contextParser.parse(args, obj, arg);
        return;
    }
    else if ((0, util_1.checkIfKey)(arg)) {
        contextParser.setStrategy(new parseStrategy_1.StrategyParseComposite());
        contextParser.parse(args, obj, arg, index);
        return;
    }
});
var newJson = JSON.stringify(obj);
console.log(newJson);
//# sourceMappingURL=index.js.map