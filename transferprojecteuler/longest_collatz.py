# answer
# 837799

limit = 10 **6
# limit = 15
endings = {}
# stickout is the length that sticks out! (longest)
stickout = 0
# self explanatory var
longest_starter = 2
for i in range(2, limit):
    starter = i
    n = i
    length = 1
    while True:
        if n == 1:
            break
        # NOT if n in endings HERE
        if n % 2 == 0:
            n /= 2
        else:
            n = 3*n + 1
        # BUT HERE
        if n in endings:
            length += endings[n]
            break
        length += 1
    # endings[starter] = length
    if length > stickout:
        stickout = length
        longest_starter = starter
print(longest_starter)