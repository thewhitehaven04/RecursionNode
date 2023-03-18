function fibonacciRecursive(n) {
  if (n === 2) {
    return [0, 1];
  } else if (n === 1) {
    return [0];
  } else {
    const prev = fibonacciRecursive(n - 1);
    return [...prev, prev[n - 2] + prev[n - 3]];
  }
}

console.log(fibonacciRecursive(8));