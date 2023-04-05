interface Flag {
  [key: string]: boolean | number | string;
}

class numberClass implements Flag {
  [key: string]: number;
  constructor(key: string, args: string[], index: number) {
    this[key.replace(/--/g, '')] = Number(args[index + 1]);
  }
}

class booleanClass implements Flag {
  [key: string]: boolean;
  constructor(key: string) {
    this[key.replace(/--/g, '')] = true;
  }
}

class compositeClass implements Flag {
  [key: string]: string;
  constructor(key: string, args: string[], index: number) {
    this[key.replace(/--/g, '')] = args[index + 1];
  }
}

export class FlagFactory {
  static createFlag(
    type: string,
    key: string,
    args?: string[],
    index?: number,
  ): Flag {
    switch (type) {
      case 'number':
        return new numberClass(key, args!, index!);
      case 'boolean':
        return new booleanClass(key);
      case 'string':
        return new compositeClass(key, args!, index!);
      default:
        throw new Error('Invalid type');
    }
  }
}
