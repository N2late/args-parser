class ArgParser {
  constructor() {
    this.args = process.argv[2];
  }
}

const some = new ArgParser();

console.log(some);
