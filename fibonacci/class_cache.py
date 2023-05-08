#https://realpython.com/fibonacci-sequence-python/
# fibonacci_class.py

class Fibonacci:
    def __init__(self):
        self.cache = [0, 1]

    def __call__(self, n):
        # Validate the value of n
        if not (isinstance(n, int) and n >= 0):
            raise ValueError(f'Positive integer number expected, got "{n}"')

        # Check for computed Fibonacci numbers
        if n < len(self.cache):
            return self.cache[n]
        else:
            # Compute and cache the requested Fibonacci number
            fib_number = self(n - 1) + self(n - 2)
            self.cache.append(fib_number)

        return self.cache[n]

# VERY BUENO
# fibonacci_of = Fibonacci()
# print(fibonacci_of(5))
fibonacci_of = Fibonacci()
res = [fibonacci_of(n) for n in range(20)]
print(res)

# NO BUENO
# Fibonacci(5)