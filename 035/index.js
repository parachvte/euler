function main() {
    const n = 1000000
    const isnt_prime = Array(n + 1)
    const primes = []

    for (let i = 2; i <= n; i++) {
        if (!isnt_prime[i]) primes.push(i)
        for (let p of primes) {
            if (i * p > n) break
            isnt_prime[i * p] = true
            if (i % p == 0) break
        }
    }

    let count = 0
    for (let p of primes) {
        const pString = p.toString()
        let check = true
        for (let i = 1, len = pString.length; i < len && check; i++) {
            const rotation = parseInt(pString.substr(i) + pString.substr(0, i))
            if (isnt_prime[rotation]) check = false
        }
        if (check) {
            // console.log(p)
            count++
        }
    }

    console.log(count)
}
exports.main = main
if (require.main == module) main()
