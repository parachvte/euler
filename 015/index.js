function main() {
    const n = 20
    const mat = new Array(n + 1).fill(0).map(row => new Array(n + 1).fill(0))

    mat[0][0] = 1
    for (let i = 0; i <= n; i++)
        for (let j = 0; j <= n; j++) {
            if (i == 0 && j == 0) continue
            if (i == 0) {
                mat[i][j] = mat[0][j - 1]
            } else 
            if (j == 0) {
                mat[i][j] = mat[i - 1][0]
            } else {
                mat[i][j] = mat[i - 1][j] + mat[i][j - 1]
            }
        }
    console.log(mat[n][n])
}
exports.main = main
if (require.main == module) main()

// 137846528820
