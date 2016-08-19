process.stdin.on 'data', (chunk) ->
    number = chunk.toString().split('\n').join ''
    ans = 0
    for i in [0...number.length-13]
        product = number.substr(i, 13).split('').reduce(((prev, curr) -> prev * curr), 1)
        ans = Math.max ans, product

    console.log ans

# coffee main.coffee < in.txt
# 23514624000
