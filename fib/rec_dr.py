# https://realpython.com/fibonacci-sequence-python/
cache = {0: 0, 1: 1}

def fibonacci_of(n):
    if n in cache:  # Base case
        return cache[n]
    # Compute and cache the Fibonacci number
    cache[n] = fibonacci_of(n - 1) + fibonacci_of(n - 2)  # Recursive case
    return cache[n]

print([fibonacci_of(n) for n in range(150)])
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]