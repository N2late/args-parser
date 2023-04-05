function checkIfKey(arg: string) {
  return arg.startsWith('--');
}

function checkIfIsNumber(args: string[], index: number) {
  const char = args[index + 1];
  return !isNaN(Number(char));
}

function checkIfIsBoolean(args: string[], index: number) {
  return args[index + 1] === undefined || args[index + 1].startsWith('--');
}

function checkInputIsNotEmpty(args: string[]) {
  if (args.length === 0) {
    throw new Error('Input is empty');
  }
}

function checkIfIsArray(args: string[]) {
  return args[0].includes(' ');
}

function splitArray(args: string[]) {
  return args[0].split(' ');
}

export {
  checkIfKey,
  checkIfIsNumber,
  checkIfIsBoolean,
  checkInputIsNotEmpty,
  checkIfIsArray,
  splitArray,
};
