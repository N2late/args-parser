interface ParseStrategy {
  parse(args: string[]): void;
}

class ParseStrategySimple implements ParseStrategy {
  parse(args: string[]) {
    let key = args[0].replace(/--/g, '');
    return { [key]: true };
  }
}

class ParseStrategyComposite implements ParseStrategy {
  parse(args: string[]) {
    let key = args[0].replace(/--/g, '');
    return { [key]: +args[1] };
  }
}

class ParseStrategyWithNumber implements ParseStrategy {
  parse(args: string[]) {
    let key = args[0].replace(/--/g, '');
    return { [key]: +args[1] };
  }
}

class ParseContext {
  private strategy: ParseStrategy;

  constructor(strategy: ParseStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ParseStrategy) {
    this.strategy = strategy;
  }

  parse(args: string[]) {
    return this.strategy.parse(args);
  }
}
