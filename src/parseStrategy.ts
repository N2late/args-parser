import { Obj } from './util/types';

interface ParseStrategy {
  parse(
    args: string[],
    obj: Obj,
    arg?: string,
    index?: number | undefined,
  ): void;
}

class StrategyParseSimple implements ParseStrategy {
  parse(args: string[], obj: Obj, arg: string) {
    let key = arg.replace(/--/g, '');

    return (obj[key] = true);
  }
}

class StrategyParseComposite implements ParseStrategy {
  parse(args: string[], obj: Obj, arg: string, index: number) {
    let key = arg.replace(/--/g, '');
    return (obj[key] = args[index + 1]);
  }
}

class StrategyParseWithNumber implements ParseStrategy {
  parse(args: string[], obj: Obj, arg: string, index: number) {
    let key = arg.replace(/--/g, '');

    return (obj[key] = parseInt(args[index + 1]));
  }
}

class ContextParser {
  private strategy: ParseStrategy;

  constructor(strategy: ParseStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ParseStrategy) {
    this.strategy = strategy;
    return true;
  }

  parse(args: string[], obj: Obj, arg?: string, index?: number) {
    return this.strategy.parse(args, obj, arg, index);
  }
}

export {
  ContextParser,
  StrategyParseSimple,
  StrategyParseComposite,
  StrategyParseWithNumber,
};
