import math

# https://projecteuler.net/thread=3#171

num = 600851475143
prfs = []
i = 3
def is_prime(x):
    if x % 2 == 0:
        return False
while i * i < num:
    if num % i == 0:
        if is_prime(i):
            prfs.append(i)
    i += 2
prfs.sort()
print(prfs)
print(prfs[-1])


# num = 13195
# num = 5040
root = int(math.sqrt(num)) + 1

def is_prime(num):
    # only odd numbers for half run time! Hah!
    for i in range(2, int(math.sqrt(num))+1): #, 2):
        if num % i == 0:
            return False
    return True
