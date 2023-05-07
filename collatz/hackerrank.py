n = int(input())
cycles = 1
while True:
    if n == 1:
        print(cycles)
        break
    if n % 2 == 0:
        # turns into float during division
        n = int(n / 2)
    else:
        n = n * 3 + 1
    cycles += 1