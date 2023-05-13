# https://realpython.com/python-thinking-recursively/

# seed the pseudorandom number generator
from random import seed
from random import randint
# seed random number generator
seed(1)
vals = [randint(0,10) for i in range(10)]

# Each function call represents an elf doing his work 
def rec(vals):
    # Worker elf doing his work
    if len(vals) == 1:
        val = vals[0]
        print("{}".format(val))

    # Manager elf doing his work
    else:
        mid = len(vals) // 2
        first_half = vals[:mid]
        second_half = vals[mid:]

        # Divides his work among two elves
        rec(first_half)
        rec(second_half)

rec(vals)