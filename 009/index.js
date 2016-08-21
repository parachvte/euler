function main() {
    for (let i = 1; i < 1000; i++)
        for (let j = i + 1; j < 1000; j++) {
            let k = Math.sqrt(i * i + j * j)
            if (i + j + k === 1000 && k * k === i * i + j * j) {
                console.log(i * j * k)
            }
        }
}
exports.main = main
if (require.main == module) main()

// 31875000
