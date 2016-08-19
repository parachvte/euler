function isPalindrome(n) {
    n = n.toString()
    return n === n.split('').reverse().join('')
}

var ans = 0
for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
        if (isPalindrome(i * j)) {
            ans = Math.max(ans, i * j)
        }
    }
}
console.log(ans)

// runs approximately 1.5s
// 906609
