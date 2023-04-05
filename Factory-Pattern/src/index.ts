import { FlagFactory } from './flagFactory';
import { FlagType } from './util/types';

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

let flags: FlagType = {};

args.forEach((arg: string, index: number) => {
  if (checkIfIsNumber(args, index)) {
    const numberFlag = FlagFactory.createFlag('number', arg, args, index);
    return (flags = { ...flags, ...numberFlag });
  }

  if (checkIfKey(arg) && checkIfIsBoolean(args, index)) {
    const booleanFlag = FlagFactory.createFlag('boolean', arg);
    return (flags = { ...flags, ...booleanFlag });
  } else if (checkIfKey(arg)) {
    const compositeFlag = FlagFactory.createFlag('string', arg, args, index);
    return (flags = { ...flags, ...compositeFlag });
  }
});

const newJson = JSON.stringify(flags);
console.log(newJson);
