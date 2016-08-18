function gcd(a, b) {
    return !b ? a : gcd(b, a % b)
}

var ans = 1
for (var i = 1; i <= 20; i++) ans = ans * i / gcd(ans, i)

console.log(ans)

// answer: 232792560
