"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitArray = exports.checkIfIsArray = exports.checkInputIsNotEmpty = exports.checkIfIsBoolean = exports.checkIfIsNumber = exports.checkIfKey = void 0;
function checkIfKey(arg) {
    return arg.startsWith('--');
}
exports.checkIfKey = checkIfKey;
function checkIfIsNumber(args, index) {
    var char = args[index + 1];
    return !isNaN(Number(char));
}
exports.checkIfIsNumber = checkIfIsNumber;
function checkIfIsBoolean(args, index) {
    return args[index + 1] === undefined || args[index + 1].startsWith('--');
}
exports.checkIfIsBoolean = checkIfIsBoolean;
function checkInputIsNotEmpty(args) {
    if (args.length === 0) {
        throw new Error('Input is empty');
    }
}
exports.checkInputIsNotEmpty = checkInputIsNotEmpty;
function checkIfIsArray(args) {
    return args[0].includes(' ');
}
exports.checkIfIsArray = checkIfIsArray;
function splitArray(args) {
    return args[0].split(' ');
}
exports.splitArray = splitArray;
//# sourceMappingURL=util.js.map