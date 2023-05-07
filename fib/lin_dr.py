seq = [0, 1]

for i in range(2, 10+2):
    seq.append(seq[-1]+seq[-2])
    print(seq[i])