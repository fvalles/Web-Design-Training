import { isArray } from './utils';

export function min() {
  let args = [...arguments];

  if (typeof args[0] === 'object') {
    args = args[0];
  }
  
  if (args.length > 1) {
    return Math.min(...args);
  } else {
    return args[0];
  }
}

export function copy() {

}
