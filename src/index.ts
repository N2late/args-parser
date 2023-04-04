let args: any = process.argv.slice(2);

if (args.length === 0) {
  console.log('Add args');
  process.exit(1);
}

args = args[0].split(' ');

args[0] = args[0].replace('[', '');
args[args.length - 1] = args[args.length - 1].replace(']', '');

let obj: any = {};

args.forEach((arg: string, index: number) => {
  if (arg === '--number') {
    let key = arg.replace(/--/g, '');
    obj[key] = parseInt(args[index + 1]);
    return;
  }
  if (
    (arg.startsWith('--') && args[index + 1] === undefined) ||
    (arg.startsWith('--') && args[index + 1].startsWith('--'))
  ) {
    let key = arg.replace(/--/g, '');
    obj[key] = true;
    return;
  } else if (arg.startsWith('--')) {
    let key = arg.replace(/--/g, '');
    obj[key] = args[index + 1];
    return;
  }
});

obj = JSON.stringify(obj);
console.log(obj);
