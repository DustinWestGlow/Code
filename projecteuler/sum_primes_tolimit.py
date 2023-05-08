import math

# 2 million
limit = 2 * (10 ** 6)
# limit = 200

# make list of k [1, 40]
# of 6k +- 1
# k_lim = 40
# for i in range(1, k_lim + 1):
    # print(f"6{i} - 1 = {6*i-1}")
    # print(f"6{i} + 1 = {6*i+1}")

import math
answer = 0  
primes = [2, 3]
# remember to set up answer after 2,3 before primes!
from functools import reduce
answer = reduce(lambda x, y: x+y, primes)
k_switch = True
n = 5
# for n in range(3, limit + 1, 2):
while True:
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
    if k_switch:
        n += 2
    else:
        n += 4
    k_switch = not k_switch
    if n > limit:
        break
# k = 1
# while True:
#     na = 6*k - 1
#     nb = 6*k + 1
print(primes[:20])
print(answer)

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

import math

limit = 2 * (10 ** 6)
limit = 200

# arr = list(range(2, limit, 2))
# primes = []
# while True:
#     primes.append(arr[0])
#     for e in arr:
#         for p in primes:
#             if e % p == 0:
#                 del e
#                 break

# Sieve of Eratosthenes
# all even trashed
# all 6K +- 1 trashed
sieve = [False] * limit
sieve[0] = True
sieve[1] = True
sieve[2] = True
for i in range(4, limit, 2):
    sieve[i] = True
# TODO
# 6k +- 1
# crosslimit = sqrt(limit) why?
primes = [2]
total = 2
for i in range(3, limit, 2):
    if not sieve[i]:
        primes.append(i)
        total += i
        for j in range(i, limit, i):
            sieve[j] = True
print(primes)
print(total)