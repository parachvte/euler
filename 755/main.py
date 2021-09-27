from functools import lru_cache

MAX_SUM = 10000000000000
fib = [1, 2]

def has_bit(opt, i):
    return 1 if (opt & (1 << i)) > 0 else 0

@lru_cache
def dfs(i, left):
    global fib
    if left == 0:
        return 1

    if i == -1 or i == 0:
        return 1

    fib_2 = fib[i] - 2

    res = 0
    for opt in range(4):
        s = has_bit(opt, 1) * fib[i] + has_bit(opt, 0) * fib[i - 1]

        if s > left:
            break

        if s + fib_2 <= left:
            res += 1 << (i - 1)
        else:
            res += dfs(i - 2, left - s)

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

# answer: 2877071595975576960
