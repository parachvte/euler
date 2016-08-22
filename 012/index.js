function factors(n) {
    const factors = []
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            factors.push(i)
            factors.push(n / i)
        }
    }
    return factors
}
function main() {
    let current = 0
    for (let i = 1; ; i++) {
        current += i
        if (factors(current).length >= 500) {
            console.log(current)
            process.exit()
        }
    }
}
exports.main = main
if (require.main == module) main()

// 76576500
