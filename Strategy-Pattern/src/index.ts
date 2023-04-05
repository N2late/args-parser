import {
  ContextParser,
  StrategyParseSimple,
  StrategyParseComposite,
  StrategyParseWithNumber,
} from './parseStrategy';
import { Obj } from './util/types';

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

let obj: Obj = {};

args.forEach((arg: string, index: number) => {
  let contextParser = new ContextParser(new StrategyParseSimple());

  if (checkIfIsNumber(args, index)) {
    contextParser.setStrategy(new StrategyParseWithNumber());
    contextParser.parse(args, obj, arg, index);
    return;
  }

  if (checkIfKey(arg) && checkIfIsBoolean(args, index)) {
    contextParser.setStrategy(new StrategyParseSimple());
    contextParser.parse(args, obj, arg);
    return;
  } else if (checkIfKey(arg)) {
    contextParser.setStrategy(new StrategyParseComposite());
    contextParser.parse(args, obj, arg, index);
    return;
  }
});

const newJson = JSON.stringify(obj);
console.log(newJson);
