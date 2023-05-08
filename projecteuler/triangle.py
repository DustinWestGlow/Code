from factor import count_factors

n = 0
i = 1
while True:
    n += i
    i += 1
    if count_factors(n) > 500:
        print(n)
        break
# 76576500