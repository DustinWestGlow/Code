from math import sqrt, floor
def count_factors(n):
    amount = 0
    for i in range(1, floor(sqrt(n))):
        if n % i == 0:
            amount += 2
    if sqrt(n) % 1 == 0:
        amount += 1
    return amount