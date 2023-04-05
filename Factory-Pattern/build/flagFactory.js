"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagFactory = void 0;
var numberClass = /** @class */ (function () {
    function numberClass(key, args, index) {
        this[key.replace(/--/g, '')] = Number(args[index + 1]);
    }
    return numberClass;
}());
var booleanClass = /** @class */ (function () {
    function booleanClass(key) {
        this[key.replace(/--/g, '')] = true;
    }
    return booleanClass;
}());
var compositeClass = /** @class */ (function () {
    function compositeClass(key, args, index) {
        this[key.replace(/--/g, '')] = args[index + 1];
    }
    return compositeClass;
}());
var FlagFactory = /** @class */ (function () {
    function FlagFactory() {
    }
    FlagFactory.createFlag = function (type, key, args, index) {
        switch (type) {
            case 'number':
                return new numberClass(key, args, index);
            case 'boolean':
                return new booleanClass(key);
            case 'string':
                return new compositeClass(key, args, index);
            default:
                throw new Error('Invalid type');
        }
    };
    return FlagFactory;
}());
exports.FlagFactory = FlagFactory;
//# sourceMappingURL=flagFactory.js.map