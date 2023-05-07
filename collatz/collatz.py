willend = []

start = 2
stop = 40
print(f"{start} -> {stop}")
for i in range(2, 40):
    n = i
    while True:
        if n not in willend:
            willend.append(n)
            if n % 2 == 0:
                # turns into float during division
                n = int(n / 2)
            else:
                n = n * 3 + 1
            if n == 1:
                break
        else:
            break
        
    # return n

print()
willend.sort()
# WOW! Gap-between-nums bar chart!
# for i in range(1, len(willend)):
#     dif = (willend[i] - willend[i-1])
#     if dif > 1:
#         print("x, " * dif)
print(willend)
# for i in range(1, len(willend)):
#     dif = (willend[i] - willend[i-1])
#     if dif > 1:
#         print("x, ", end="")
#         # print("x, " * (dif - 1), end="")
#     print(willend[i], end=", ")
print()