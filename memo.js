function memoize(fn){
	const cache = {}
	return function(...args){
	  if (cache[args]){
		return cache[args];
	  }
	  newCall = fn.apply(null, args);
	  cache[args] = newCall;
	  return newCall;
	}
  }

const fastFib = memoize(fib);
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fastFib(n - 1) + fastFib(n - 2);
}