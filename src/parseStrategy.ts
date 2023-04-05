interface ParseStrategy {
  parse(args: string[]): void;
}

class StrategyParseSimple implements ParseStrategy {
  parse(args: string[]) {
    let key = args[0].replace(/--/g, '');
    return { [key]: true };
  }
}

class StrategyParseComposite implements ParseStrategy {
  parse(args: string[]) {
    let key = args[0].replace(/--/g, '');
    return { [key]: +args[1] };
  }
}

class StrategyParseWithNumber implements ParseStrategy {
  parse(args: string[]) {
    let key = args[0].replace(/--/g, '');
    return { [key]: +args[1] };
  }
}

class ContextParser {
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

export {
  ContextParser,
  StrategyParseSimple,
  StrategyParseComposite,
  StrategyParseWithNumber,
};
