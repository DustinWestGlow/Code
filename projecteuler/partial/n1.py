def primes_sieve2(limit):
    a = [True] * limit                          # Initialize the primality list
    a[0] = a[1] = False

    for (i, isprime) in enumerate(a):
        if isprime:
            yield i
            for n in range(i*i, limit, i):     # Mark factors non-prime
                a[n] = False
gen = primes_sieve2(20)
print(next(gen))
print(next(gen))
print(next(gen))


# #8462696833 ???

# import math

# num = 600851475143
# # num = 13195
# # num = 5040
# root = int(math.sqrt(num)) + 1

# def is_prime(num):
#     # only odd numbers for half run time! Hah!
#     for i in range(2, int(math.sqrt(num))+1): #, 2):
#         if num % i == 0:
#             return False
#     return True

# print(f"num: {num}")
# # for rock in range(2, root):
# rock = num
# pick = 2
# prfs = []
# while True:
#     pick_hit = False
#     while rock % pick == 0:
#         print(f"{rock} % {pick} = 0")
#         rock = int(rock / pick)
#         print(f"{rock * pick} / {pick} = {rock}")
#         if not pick_hit:
#             if is_prime(rock):
#                 prfs.append(rock)
#             if is_prime(pick):
#                 prfs.append(pick)
#         pick_hit = True
#     pick_hit = False
#     pick += 1
#     if math.sqrt(rock) < pick:
#         break
# prfs.sort()
# print(prfs)
# print(prfs[-1])