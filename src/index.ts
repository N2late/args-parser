import {
  ContextParser,
  StrategyParseSimple,
  StrategyParseComposite,
  StrategyParseWithNumber,
} from './parseStrategy';

import {
  checkIfKey,
  checkIfIsNumber,
  checkIfIsBoolean,
  checkInputIsNotEmpty,
  checkIfIsArray,
  splitArray,
} from './util/util';

let args: string[] = process.argv.slice(2);

checkInputIsNotEmpty(args);

args = checkIfIsArray(args) ? splitArray(args) : args;

let obj: any = {};

args.forEach((arg: string, index: number) => {
  if (checkIfIsNumber(args, index)) {
    let key = arg.replace(/--/g, '');
    obj[key] = parseInt(args[index + 1]);
    return;
  }
  if (checkIfKey(arg) && checkIfIsBoolean(args, index)) {
    let key = arg.replace(/--/g, '');
    obj[key] = true;
    return;
  } else if (checkIfKey(arg)) {
    let key = arg.replace(/--/g, '');
    obj[key] = args[index + 1];
    return;
  }
});

obj = JSON.stringify(obj);
console.log(obj);
