function main() {
    const n = 2000000
    let isnt_prime = Array(n + 1)
    var primes = []

    for (var i = 2; i <= n; i++) {
        if (!isnt_prime[i]) primes.push(i)
        for (var p of primes) {
            if (i * p > n) break
            isnt_prime[i * p] = true
            if (i % p == 0) break
        }
    }

    console.log(primes.reduce((prev, curr) => prev + curr))
}
exports.main = main
if (require.main == module) main()

// 142913828922
