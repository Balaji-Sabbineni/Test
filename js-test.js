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
