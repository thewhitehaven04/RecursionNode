function mergeSort(arr) {
  if (arr.length >= 2) {
    let lo = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)));
    let hi = mergeSort(arr.slice(Math.ceil(arr.length / 2)));
    arr = merge(lo, hi);
  } else {
    return sort(arr);
  }
  return arr;
}

function sort(pair) {
  if (pair[0] > pair[1]) return [pair[1], pair[0]];
  return pair;
}

function merge(a, b) {
  let merged = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] <= b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }
  merged = merged.concat(a);
  merged = merged.concat(b);
  return merged;
}

const x = [1, 2, 6, 0, -1, 9];
console.log('Input array: ', x);
console.log(mergeSort(x));