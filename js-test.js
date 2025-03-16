function reverseString(str) {
    let rev = ''
    for(let i of str){
        rev = i + rev
    }
    return rev;
}
console.log(reverseString("hello")); // Expected output: "olleh"

function isPalindrome(str) {
    let revStr = reverseString(str);
    if(str == revStr){
        return true
    }
    return false
}
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false


function findMax(arr) {
    arr.sort()
    return arr.pop();
}
console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

function removeDuplicates(arr) {
    return new Set(arr)
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]

function factorial(n) {
    let fact=1;
    for(let i=1;i<=n;i++){
        fact *= i
    }
    return fact
}
console.log(factorial(5)); // Expected output: 120


function fibonacci(n) {
    let a =0,b=1;
    let arr = []
    arr.push(a)
    arr.push(b)
    for(let i=2;i<n;i++){
        let c = a+b
        arr.push(c)
        a = b
        b = c
    }
    return arr
}
console.log(fibonacci(5)); // Expected output: [0, 1, 1, 2, 3]


function areAnagrams(str1, str2) {
    str1 = str1.split("")
    str2 = str2.split("")
    str1.sort();
    str2.sort();

    if(str1.length != str2.length) return false;
    for(let i=0;i<str1.length;i++) {
        if(str1[i] != str2[i]){
            return false
        }
    }
    return true
}
console.log(areAnagrams("listen", "silent")); // Expected output: true


function secondLargest(arr) {
    arr.sort();
    return arr.at(-2)
}
console.log(secondLargest([10, 20, 4, 45, 99])); // Expected output: 45


function findMissingNumber(arr) {
    arr.sort();
    let min = arr[0]
    let max = arr.at(-1);
    for(let i= min;i<max;i++){
        if(!arr.includes(i)){
            return i;
        }
    }
}
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3


function countOccurrences(str) {
    let freq = {}
    for( const char of str){
        freq[char] = (freq[char] || 0) +1;
    }
    return freq;
}
console.log(countOccurrences("hello")); // Expected output: { h: 1, e: 1, l: 2, o: 1 }


function flattenArray(arr) {
    return arr.flat(2);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Expected output: [1, 2, 3, 4, 5, 6]


function fun() {
    console.log('This is a function')
}
function debounce(func, delay) {
    let timeout=null
    return () => {
        if(timeout) clearTimeout(timeout)

        timeout=setTimeout(() => {
            func()
        }, delay)
    }
}

const debfunc = debounce(fun, 1000);
debfunc()

function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
  
    return function executedFunction(...args) {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastExecTime;
  
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
          timeoutId = null;
        }, delay - elapsedTime);
      }
    };
  }


function longestWord(str) {
    let arr = str.split(" ")
    let maxLen = 0,i =-1;
    for(let s=0;s<arr.length;s++){
        if(arr[s].length >= maxLen){
         maxLen = arr[s].length
         i = s;
        }    
    }
    return arr[i]
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Expected output: "jumps"


function arrayIntersection(arr1, arr2) {
    let inter = []
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])) inter.push(arr1[i])
    }
    return inter;
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Expected output: [2, 3]

function groupByKey(arr, key) {
    return arr.reduce((acc, obj) => {
        (acc[obj[key]] = acc[obj[key]] || []).push(obj);
        return acc;
    }, {});
}

function mergeSortedArrays(arr1, arr2) {
    let arr = arr1.concat(arr2)
    arr.sort()
    return arr
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]


function customMap(arr, callback) {
    let result = [];
    for (let i=0;i<arr.length;i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function stringPermutations(str) {
    if (str.length <= 1) return [str];
    let permutations = [];
    for (let i=0;i<str.length;i++) {
        let char = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (let perm of stringPermutations(remainingChars)) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}
console.log(stringPermutations("abc")); // Expected output: ["abc", "acb", "bac", "bca", "cab", "cba"]

function firstNonRepeatingChar(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("aabbcce")); // Expected output: "e"


console.log(1 + "2" + "2");      // 122
console.log(1 + +"2" + "2");     // 32
console.log(1 + -"1" + "2");    //02
console.log(+"1" + "1" + "2");  // 112
console.log("A" - "B" + "2");  // nan2
console.log("A" - "B" + 2);    //nan

console.log(0.1 + 0.2 === 0.3);  //false

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);  // 456

function foo() {
    return
    {
        name: "John"
    };
}
console.log(foo()) // undefined


function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sum(2)(3)(4)); // Expected output: 9
