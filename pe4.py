entries = []

top = [str(c) for c in range(2, 9+1)]
top = "  _" + ' _'.join(top)
print(top)
# for i in range(2, 9+1):
#     row = str(i)
#     row += (" *" * (i-2))
#     for j in range(i, 9+1):
#         row += (" " + str((i * j) % 10))
#     print(row)

for i in range(2, 9+1):
    row = str(i)
    row += ("  *" * (i-2))
    for j in range(i, 9+1):
        product = i * j
        prefix = " "
        if product < 10:
            prefix = " _"
        printable = prefix + str(product)
        row = row + printable
    print(row)