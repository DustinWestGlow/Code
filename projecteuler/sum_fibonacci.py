a = 1
b = 1
c = a

total = 0

while a <= (10**6) * 4:
    c = a
    a = a + b
    b = c
    if a % 2 == 0:
        total += a

print(total)