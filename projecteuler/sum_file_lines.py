sum = 0

with open("_13.txt", 'r') as f:
    for line in f:
        sum += int(line)

print(sum)