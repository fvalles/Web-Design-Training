export function min(...args) {
  if (typeof args[0] === 'object') {
    return Math.min(...args[0]);
  } else if (args.length > 1) {
    return Math.min(...args);
  }

  return args[0];
}

export function copy(args) {
  if (Array.isArray(args)) {
    const copiedArray = [...args];
    return copiedArray;
  }

  const copiedObj = { ...args };
  return copiedObj;
}

export const reverseMerge = (firstArray, secondArray) => {
  const revMergedArray = [...secondArray, ...firstArray];
  return revMergedArray;
};

export const filterAttribs = (obj) => {
  const { a, b, ...filteredObj } = obj;
  return filteredObj;
};
