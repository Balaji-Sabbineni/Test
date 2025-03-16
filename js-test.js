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