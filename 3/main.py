import math


n = 600851475143
square_root = int(math.sqrt(n))
for i in range(2, square_root + 1):
    if n % i == 0:
        print(i)
        while n % i == 0:
            n /= i
        if n == 1:
            break
