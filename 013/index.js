function main() {
    process.stdin.on('data', function (chunk) {
        numbers = chunk.toString().split('\n')

        const sum = numbers.reduce(
            (prev, curr) => prev + (parseInt(curr.substr(0, 15)) || 0), 
            0
        )
        console.log(sum.toString().substr(0, 10))
    })
}
exports.main = main
if (require.main == module) main()

