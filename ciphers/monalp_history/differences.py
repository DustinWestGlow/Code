# TRASHED
# Duplicate code
# weird problem to solve anyway

alphabet = "".join([chr(x + ord('a')) for x in range(26)]) 
alphabet_map = {}
k = 3
for i in range(26):
    multiplied = (((i + 1) * k) - 1) % 26
    alphabet_map[alphabet[i]] = alphabet[multiplied]
d1 = alphabet_map
# print(alphabet_map)

alphabet_map = {}
for i in range(26):
    # i = 1, 'b' = 'f'
    c = alphabet[i]
    # 97
    case = ord('a')
    # 98 - 97 + 1 = 2
    reduced = ord(c) + 1 - case
    # i+1 = 2, k = 3, formula = 6
    # * (i+1) is unnecessary!, reduced += 1 every loop anyway
    formula = (reduced * k)
    # formula = 5 (index in a list)
    # 'f' = 5 in [0, 6], 'z' = 'z' at 26-1=25
    formula -= 1
    # uhhhh...
    formula %= 26
    adjusted = formula + case
    backinbusiness = chr(adjusted)
    # print(f"(i{i},{c},{reduced}) - formula={formula}, adjusted={adjusted}, backinbusiness={backinbusiness}")
    # create the cipher using an alphabet and a key
    alphabet_map[c] = backinbusiness
d2 = alphabet_map
# print(alphabet_map)

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

keys_1 = []
vals_1 = []
for (k, v) in d1.items():
    keys_1.append(k)
    vals_1.append(v)
keys_2 = []
vals_2 = []
for (k, v) in d2.items():
    keys_2.append(k)
    vals_2.append(v)
keys_string = ""
for i in range(26):
    color = bcolors.OKGREEN
    if not keys_1[i] == keys_2[i]:
        color = bcolors.FAIL
    keys_string += f"{color}{keys_1[i]},{keys_2[i]} {bcolors.ENDC}"
for i in range(26):
    color = bcolors.OKGREEN
    if not keys_1[i] == keys_2[i]:
        color = bcolors.FAIL
    keys_string += f"{color}{keys_1[i]},{keys_2[i]} {bcolors.ENDC}"
print(keys_string)