function isPalindrome(num){
    let original = num;
    let reverse = 0;
    while(num = 0){
        let digit = num %10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num /10);
    }
    let reverse: number
    return original === reverse
}

console.log(isPalindrome(151));
console.log(isPalindrome(1325));