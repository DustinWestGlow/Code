# 2 million
limit = 2 * (10 ** 6)

import math
answer = 0  
primes = [2]
# remember to set up answer after 2 before primes!
from functools import reduce
answer = reduce(lambda x, y: x+y, primes)
for n in range(3, limit + 1, 2):
    is_prime = True
    for p in primes:
        if n % p == 0:
            is_prime = False
            break
        if p > math.sqrt(n):
            break
    if is_prime:
        primes.append(n)
        answer += n

print(answer)