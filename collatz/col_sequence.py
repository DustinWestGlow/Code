

for i in range(2, 15):
    n = i
    print(n, end=", ")
    while True:
        if n % 2 == 0:
            # turns into float during division
            n = int(n / 2)
        else:
            n = n * 3 + 1
        print(n, end=", ")
        if n == 1:
            print("end", end="\n")
            break
    # return n
