coords = ""
coord_graph = {1: 1}

for i in range(2, 40):
    n = i
    seq_len = 0
    # print(n, end=" - ")
    # print(f"({n}, ", end="")
    # x_coord = i
    while True:
        if n % 2 == 0:
            # turns into float during division
            n = int(n / 2)
        else:
            n = n * 3 + 1
        # print(n, end=", ")
        if n == 1:
            # print("end", end="\n")
            # print(seq_len, end=", ")
            # print(f"{seq_len})", end=", ")
            # y_coord = seq_len
            print(str(i) + ", " + str(seq_len) + ": " + ("-" * seq_len))
            break
        else:
            seq_len += 1
    # coord_graph[x_coord] = y_coord
    # return n
# print(coord_graph)