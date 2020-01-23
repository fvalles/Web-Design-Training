import { isArray } from './utils';

export function min(param) {
  let arrayVal = Array.isArray(param);
  
  if (arrayVal) {
    return Math.min(...param);
  } else {
    return param;
  }
}

export function copy() {

}
