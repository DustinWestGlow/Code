# def find_pairs(n):
#     result = []
#     for i in range(1, n+1):
#         for j in range(1, i+1):
#             if (i == j):
#                 continue
#             else:
#                 result.append((i, i+1))


def generate_pairs(n):
    pairs = []
    for i in range(n+1):
        for j in range(n+1):
            if j == i:
                continue
            else:
                pairs.append((i+1, j+1))
    return pairs

# https://stackoverflow.com/questions/10201977/how-to-reverse-tuples-in-python
def remove_directional(pairs):
    vetted = pairs[:]
    for pair in vetted:
        # reversed = (pair[1], pair[0])
        reversed = pair[::-1]
        if reversed in vetted:
            vetted.remove(reversed)
    return vetted

todo = [0, 1, 2, 3, 4, 5]
for n in todo:
    p = generate_pairs(n)
    rd = remove_directional(p)
    txt = str(p) + "\n" + str(rd) + '\n' + "Directional: "+ str(len(p)) + ", Non-Directional: " + str(len(rd)) + "\n"
    print(txt)

# a
# ab
# abc
# abcd
# amount of elements
# = width * height / 2
# 1 + 2 + 3 + ... + m
# (m + 1)(m)/2
# triangular numbers

