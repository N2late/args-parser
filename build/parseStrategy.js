"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyParseWithNumber = exports.StrategyParseComposite = exports.StrategyParseSimple = exports.ContextParser = void 0;
var StrategyParseSimple = /** @class */ (function () {
    function StrategyParseSimple() {
    }
    StrategyParseSimple.prototype.parse = function (args) {
        var _a;
        var key = args[0].replace(/--/g, '');
        return _a = {}, _a[key] = true, _a;
    };
    return StrategyParseSimple;
}());
exports.StrategyParseSimple = StrategyParseSimple;
var StrategyParseComposite = /** @class */ (function () {
    function StrategyParseComposite() {
    }
    StrategyParseComposite.prototype.parse = function (args) {
        var _a;
        var key = args[0].replace(/--/g, '');
        return _a = {}, _a[key] = +args[1], _a;
    };
    return StrategyParseComposite;
}());
exports.StrategyParseComposite = StrategyParseComposite;
var StrategyParseWithNumber = /** @class */ (function () {
    function StrategyParseWithNumber() {
    }
    StrategyParseWithNumber.prototype.parse = function (args) {
        var _a;
        var key = args[0].replace(/--/g, '');
        return _a = {}, _a[key] = +args[1], _a;
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
    };
    ContextParser.prototype.parse = function (args) {
        return this.strategy.parse(args);
    };
    return ContextParser;
}());
exports.ContextParser = ContextParser;
//# sourceMappingURL=parseStrategy.js.map