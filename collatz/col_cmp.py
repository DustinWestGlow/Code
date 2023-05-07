regular = []
shortcut = []

start = 2
stop = 40

for i in range(start, stop):
    n_reg, n_sho = i, i
    seq_reg, seq_sho = 0, 0
    while True:
        if n_reg % 2 == 0:
            n_reg = int(n_reg / 2)
        else:
            n_reg = (n_reg * 3) + 1
        if n_reg == 1:
            regular.append(seq_reg)
            break
        else:
            seq_reg += 1
    while True:
        if n_sho % 2 == 0:
            # turns into float during division
            n_sho = int(n_sho / 2)
        else:
            # n = n * 3 + 1
            n_sho = int(((n_sho * 3) + 1) / 2)
        if n_sho == 1:
            shortcut.append(seq_sho)
            break
        else:
            seq_sho += 1
   
for i in range(stop - start):
    print((regular[i] - shortcut[i]) * "-")