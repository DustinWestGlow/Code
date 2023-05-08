n = 16
# for i in range(10):
#     n *= 2
#     print(f"{str(n):>12}")
# n = 16
# for i in range(10):
#     n *= 2
#     print(f"{str(n)[-1]}", end="")

# 136251249986374875001362512499863748
# 16 -> 2^40
# observation = "".join([str(2 ** i)[-2] for i in range(4, 40)])
# print(observation)
# print(2**1000)
digits = list(str(2**1000))
from functools import reduce
observation = reduce(
    lambda x, y: int(x)+int(y), digits
)
print(observation)

# 1366
# Correct, but I cheated
# Python has too easy number handling