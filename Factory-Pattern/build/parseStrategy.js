"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyParseWithNumber = exports.StrategyParseComposite = exports.StrategyParseSimple = exports.ContextParser = void 0;
var StrategyParseSimple = /** @class */ (function () {
    function StrategyParseSimple() {
    }
    StrategyParseSimple.prototype.parse = function (args, obj, arg) {
        var key = arg.replace(/--/g, '');
        return (obj[key] = true);
    };
    return StrategyParseSimple;
}());
exports.StrategyParseSimple = StrategyParseSimple;
var StrategyParseComposite = /** @class */ (function () {
    function StrategyParseComposite() {
    }
    StrategyParseComposite.prototype.parse = function (args, obj, arg, index) {
        var key = arg.replace(/--/g, '');
        return (obj[key] = args[index + 1]);
    };
    return StrategyParseComposite;
}());
exports.StrategyParseComposite = StrategyParseComposite;
var StrategyParseWithNumber = /** @class */ (function () {
    function StrategyParseWithNumber() {
    }
    StrategyParseWithNumber.prototype.parse = function (args, obj, arg, index) {
        var key = arg.replace(/--/g, '');
        return (obj[key] = parseInt(args[index + 1]));
    };
    return StrategyParseWithNumber;
}());
exports.StrategyParseWithNumber = StrategyParseWithNumber;
var ContextParser = /** @class */ (function () {
    function ContextParser(strategy) {
        this.strategy = strategy;
    }
    ContextParser.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
        return true;
    };
    ContextParser.prototype.parse = function (args, obj, arg, index) {
        return this.strategy.parse(args, obj, arg, index);
    };
    return ContextParser;
}());
exports.ContextParser = ContextParser;
//# sourceMappingURL=parseStrategy.js.map