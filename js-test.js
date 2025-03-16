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
