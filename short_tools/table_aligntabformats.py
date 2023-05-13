matrix = [
   ["Ah!",  "We do have some Camembert", "sir"],
   ["It's a bit", "runny", "sir"],
   ["Well,",  "as a matter of fact it's", "very runny, sir"],
   ["I think it's runnier",  "than you",  "like it, sir"]
]

s = [[str(e) for e in row] for row in matrix]
lens = [max(map(len, col)) for col in zip(*s)]
fmt = '\t'.join('{{:{}}}'.format(x) for x in lens)
table = [fmt.format(*row) for row in s]
print('\n'.join(table))