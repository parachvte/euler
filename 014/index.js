function calculate(steps_to_one, n) {
    if (steps_to_one[n] !== undefined) {
        return steps_to_one[n]
    }
    let ret = undefined
    if (n === 1) {
        ret = 0
    } else if (n % 2 === 0) {
        ret = 1 + calculate(steps_to_one, n / 2)
    } else {
        ret = 1 + calculate(steps_to_one, n * 3 + 1)
    }
    return steps_to_one[n] = ret
}
function main() {
    const steps_to_one = {}
    let max_steps = 0
    let max_i = 0
    for (let i = 1; i <= 1000000; i++) {
        const steps = calculate(steps_to_one, i)
        if (steps > max_steps) {
            max_steps = steps
            max_i = i
        }
    }
    console.log(max_i)
}
exports.main = main
if (require.main == module) main()

// 837799
