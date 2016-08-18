n = 200000

isnt_prime = Array(n)
primes = []
for i in [2..n] by 1
    if !isnt_prime[i]
        primes.push i
        if primes.length is 10001
            console.log i
            process.exit
    for p in primes
        break if i * p > n
        isnt_prime[i * p] = true
        break if i % p is 0


# answer: 104743
