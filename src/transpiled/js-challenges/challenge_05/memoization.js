const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
};
const memoize = (fn) => {
    let cache;
    return () => {
        if (cache)
            return cache;
        let result = fn();
        cache = result;
        return result;
    };
};
const memoized = memoize(expensiveFunction);
console.log(`## Challenge 05_A - BASIC MEMOIZATION ##
1st call : ${memoized()}
2nd call : ${memoized()}
3rd call : ${memoized()}`);
const memoizeOneLiner = (fn, cache = undefined) => {
    return () => { return (cache) ? cache : cache = fn(); };
};
const memoizedOneLiner = memoizeOneLiner(expensiveFunction);
console.log(`## Challenge 05_B - MEMOIZATION ONE LINER ##
1st call :  ${memoizedOneLiner()}
2nd call :  ${memoizedOneLiner()}
3rd call :  ${memoizedOneLiner()}`);
let count = 0;
const repeatText = (repetitions, text) => (count++, `${text} `.repeat(repetitions).trim());
const memoizeArgs = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        return cache[key] || (cache[key] = fn(...args));
    };
};
const memoizedGreet = memoizeArgs(repeatText);
console.log(`## Challenge 05_C - MEMOIZATION  WITH ARGUMENTS ##
1st call :  ${memoizedGreet(1, "pam")}
2nd call :  ${memoizedGreet(3, "chun")}
3rd call :  ${memoizedGreet(1, "pam")}
4th call :  ${memoizedGreet(3, "chun")}
Call counts: ${count}`);
//# sourceMappingURL=memoization.js.map