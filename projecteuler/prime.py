# 8462696833 ???

import math

# num = 600851475143
# num = 13195
num = 5040
# num = 26
root = int(math.sqrt(num)) + 1

def is_prime(num):
    for i in range( 2, int(math.sqrt(num))+1 ):
        if num % i == 0:
            return False
    return True

print(f"num: {num}")
for i in range(2, root):
    if num % i == 0:
        # print(f"i = {i}, num/i = {int(num/i)}")
        sm_div = i
        lg_div = int(num / i)
        print(f"{sm_div} * {lg_div}")
        if is_prime(sm_div):
            print(f"Prime sm_div: {sm_div}")
        if is_prime(lg_div):
            print(f"Prime lg_div: {lg_div}")

# import math
# num = 24
# root = int(math.sqrt(num)) + 1

# def is_prime(num):
#     return False

# print(f"num: {num}")
# for i in range(2, root):
#     if num % i == 0:
#         # print(f"i = {i}, num/i = {int(num/i)}")
#         print(f"{i} * {int(num/i)}")

# # find if one number is a prime

# import math
# def is_prime(num):
#     for i in range( 2, int(math.sqrt(num))+1 ):
#         if num % i == 0:
#             return False
#     return True
# # x = 11
# primes = []
# for maybe in range(1, 45):
#     if is_prime(maybe):
#         primes.append(maybe)
# print(primes)
# import math
# num = 11
# prime = True
# # Do not start range at 1,
# # any prime is modulo true to 1
# for i in range(2, int(math.sqrt(num))):
#     if num % i == 0:
#         prime = False
#         break
# print(f"{num} prime? {prime}")

# import math

# num = 100
# root = int(math.sqrt(num))

# for i in range(1, root):
#     prime = True
#     for j in range(1, i):
#         if i % j == 0:
#             prime = False
#             break
    