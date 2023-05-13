# def find_pairs(n):
#     result = []
#     for i in range(1, n+1):
#         for j in range(1, i+1):
#             if (i == j):
#                 continue
#             else:
#                 result.append((i, i+1))

def generate_table(dimension, ijz):
    table = []
    for i in range(dimension+1):
        row = []
        for j in range(dimension+1):
            if j == i:
                if ijz == True:
                    row.append(0)
                else:
                    continue
            else:
                row.append(j+1)
        table.append(row)
    return table 

def print_table(table):
    txt = ""
    for row in table:
        txt += ' '.join([str(item) for item in row])
        txt += '\n'
    return txt

with open("output_table.txt", 'w') as file:
    txt = ""
    file.write("TABLES:\n")
    file.write("\n\n")
    file.write("NxN sqaure, zeros on i==j\n\n")
    todo = [0, 1, 3, 5, 8]
    for dim in todo:
        txt = str(dim) + "\n"
        txt += print_table(generate_table(dim, ijz=True))
        txt += "\n"
        file.write(txt)
    file.write("i==j ELIMINATED no zeros\n\n")
    for dim in todo:
        txt = str(dim) + "\n"
        txt += print_table(generate_table(dim, ijz=False))
        txt += "\n\n"
        file.write(txt)
    file.write("\n")