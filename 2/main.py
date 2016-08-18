
def fibonacci():
    a, b = 1, 2
    yield a
    yield b
    while True:
        a, b = b, a + b
        yield b

sum = 0
for fib in fibonacci():
    if fib > 4000000:
        break
    sum += fib if fib & 1 == 0 else 0
print(sum)
