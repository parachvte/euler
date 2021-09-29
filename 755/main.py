"""
Problem link: https://projecteuler.net/problem=755

Solution note:

    The problem is to calculate all possible combinations of fibonacci numbers with
    a sum smaller or equal to 10^13.

    We search all Fibonacci numbers in descending order, subtract selected ones from
    the total sum (in our case is 10^13), compare the sum difference, and record the
    number of combinations.

    Firstly, We have an inference that: f(n) = sum {f(i) | for i = 0..n-2} + 2
    When the sum difference >= sum of all Fibonacci numbers left (f(n - 1) + f(n) -2),
    all combinations of f(n - 1) ... f(0) are accepted, no more search needed.
    That's 2^n combinations.

    The second prune is LRU cache which reduces our calculation from 573881 to 108
    times, execution time from near 2s to instant.

    answer: 2877071595975576960

    Maximum to calculate S(10**104) due to my maximum recursion depth is 500.
"""

from functools import lru_cache

MAX_SUM = 10 ** 13
fib = [1, 2]

@lru_cache
def dfs(n, left):
    # fib array can not be in the signature cuz lru_cache doesn't support array
    global fib

    if left == 0:  # nothing can be selected
        return 1

    if n == 0:  # I doubt we will reach here.
        return 1

    sum_left = fib[n - 1] + (fib[n] - 2)

    res = 0
    for opt in range(2):
        current = fib[n] if opt == 1 else 0
        if current > left:
            break

        # important prune
        if current + sum_left <= left:
            res += 1 << n
        else:
            res += dfs(n - 1, left - current)

    return res
    

def main():
    global fib

    while True:
        new_value = fib[-1] + fib[-2]
        if new_value > MAX_SUM:
            break

        fib.append(new_value)

    fib_n = len(fib)

    print('count of fibonacci numbers =', fib_n)
    print(' '.join(map(str, fib)))

    print('S({}) = {}'.format(100, dfs(fib_n - 1, 100)))
    print('S({}) = {}'.format(10000, dfs(fib_n - 1, 10 ** 4)))
    print('S({}) = {}'.format(10 ** 13, dfs(fib_n - 1, 10 ** 13))) 


if __name__ == '__main__':
    main()

