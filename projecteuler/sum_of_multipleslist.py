# No input
# output integer result

# https://projecteuler.net/problem=1
# Find the sum of all the multiples of 3 or 5 below 1000.

stophere = 10**3
sum_multiples = 0

# O(n), iterate over every n
# between 1 and upper bound
for incrementer in range(1, stophere):
    n = incrementer
    # check if n is a multiplice of 3 or 5
    if (n % 3 == 0) or (n % 5 == 0):
        sum_multiples += n

# DONE!
print(sum_multiples)