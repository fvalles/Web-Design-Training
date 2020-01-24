import { isArray } from './utils';

export function min() {
  let args = [...arguments];

  if (typeof args[0] === 'object') {
    args = args[0];
  }
  
  if (args.length > 1) {
    return Math.min(...args);
  } else if (args.length === 1) {
    return args[0];
  } else {
    return undefined;
  }
}

export function copy(args) {
  if (Array.isArray(args)) {
    let copiedArray = [...args];
    return copiedArray;
  } else {
    let copiedObj = Object.assign({}, args);
    return copiedObj;
  }
}

export const reverseMerge = (firstArray, secondArray) => {
  let revMergedArray = [...secondArray, ...firstArray];
  return revMergedArray;
}