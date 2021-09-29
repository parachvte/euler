"""First Sort I

https://projecteuler.net/problem=523

Hint: Think about adding a number to the last, calculate steps to take 
      previously and afterwards.
"""
from functools import lru_cache

def pow2(n):
    return 1 << n

@lru_cache
def p(n):
    res = 1
    for i in range(n):
        res = res * (i + 1)
    return res

@lru_cache
def getMoves(n):
    if n == 1:
        return 0
    return n * getMoves(n - 1) + p(n - 1) * (pow2(n - 1) - 1)

def getExpectedMoves(n):
    return 1.0 * getMoves(n) / p(n)

def main():
    print('{:.2f}'.format(getExpectedMoves(1)))
    print('{:.2f}'.format(getExpectedMoves(2)))
    print('{:.2f}'.format(getExpectedMoves(3)))
    print('{:.2f}'.format(getExpectedMoves(4)))
    print('{:.2f}'.format(getExpectedMoves(10)))
    print('{:.2f}'.format(getExpectedMoves(30)))

if __name__ == '__main__':
    main()
