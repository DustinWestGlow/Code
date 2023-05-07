import random

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
# print(f"{bcolors.WARNING}Warning: No active frommets remain. Continue?{bcolors.ENDC}")

# ascii mapping
# instead of alphabet list wrapping index mapping!
# alphabet_map = {}
#     for i in range(26):
#         # i = 1, 'b' = 'f'
#         c = alphabet[i]
#         # 97
#         case = ord('a')
#         # 98 - 97 + 1 = 2
#         reduced = ord(c) + 1 - case
#         # i+1 = 2, k = 3, formula = 6
#         # * (i+1) is unnecessary!, reduced += 1 every loop anyway
#         formula = (reduced * k)
#         # formula = 5 (index in a list)
#         # 'f' = 5 in [0, 6], 'z' = 'z' at 26-1=25
#         formula -= 1
#         # uhhhh...
#         formula %= 26
#         adjusted = formula + case
#         backinbusiness = chr(adjusted)
#         print(f"(i{i},{c},{reduced}) - formula={formula}, adjusted={adjusted}, backinbusiness={backinbusiness}")
#         # create the cipher using an alphabet and a key
#         alphabet_map[c] = backinbusiness

    # ciphertext = ""
    # for i in range(len(plaintext)):
    #     c = plaintext[i]
    #     case = ord('a')
    #     # if c.isupper():
    #     #     case = ord('A')
    #     reduced = ord(c) + 1 - case
    #     formula = (reduced * k * (i + 1)) % 26
    #     formula = formula - 1 # a=1, c=3
    #     adjusted = formula + case
    #     backinbusiness = chr(adjusted)
    #     ciphertext += backinbusiness
        # print(f"i={i}, c={c}, case={case}, reduced={reduced}, formula={formula}, adjusted={adjusted}, backinbusiness={backinbusiness}")
    # return ciphertext

print(f"{bcolors.HEADER}This is a multiplicative ciphering program. Stay Awesome.{bcolors.ENDC}")

def multiplicative(plaintext, k):
    alphabet = "".join([chr(x + ord('a')) for x in range(26)]) 
    alphabet_map = {}
    for i in range(26):
        multiplied = (((i + 1) * k) - 1) % 26
        alphabet_map[alphabet[i]] = alphabet[multiplied]
    # print(alphabet_map)
    ciphertext = ""
    for c in plaintext:
        if not (c.isalpha() and c.islower()):
            ciphertext += c
            continue
        ciphertext += alphabet_map[c]
    return ciphertext
def decrypt_multiplicative(ciphertext, k):
    alphabet = "".join([chr(x + ord('a')) for x in range(26)]) 
    alphabet_map = {}
    for i in range(26):
        big = i + 1
        while True:
            # increasing sum divided by key
            divided = big / k
            # if whole number
            if divided % 1 == 0:
                # deciphered
                # print(f"i: {i}, big: {big}, divided: {divided},")# am[a[i]]: {alphabet_map[alphabet[i]]}")
                c = alphabet[int(divided) - 1]
                alphabet_map[alphabet[i]] = c
                break
            big += 26
    plaintext = ""
    for c in ciphertext:
        if not (c.isalpha() and c.islower()):
            plaintext += c
            continue
        plaintext += alphabet_map[c]
    return plaintext

# the message for this test also happens to be the alphabet
# message = "".join([chr(x + ord('a')) for x in range(26)])
# message = "The quick brown fox jumped over the lazy dog"
message = "be fruitful and multiply"
print("Message: " + message)
# !0, !1, !13, !26, !even
keys = [(x*2+1) for x in range(1, 13)]
keys.remove(13)
alphabet = "".join([chr(x + ord('a')) for x in range(26)])
encrypted = multiplicative(alphabet, 2)
print(encrypted)
decrypted = multiplicative(encrypted, 14)
# decrypted = decrypt_multiplicative(encrypted, 3)
print(decrypted)
# truekey = random.choice(keys)
# encrypted = multiplicative(message, truekey)
# print(f"{bcolors.WARNING}Encrypted - '{message}'{bcolors.ENDC} with key = '{truekey}'")
# print(f"{bcolors.FAIL}Ciphertext - {encrypted}{bcolors.ENDC}")
# for key in keys:
#     trial = multiplicative(encrypted, key)
#     if trial == message:
#         print(f"{bcolors.OKGREEN}SOLVED! Inverse = {key}{bcolors.ENDC} - {trial}")
#         break
# print(multiplicative(multiplicative(message, 3), 9))
# three = multiplicative(message, 3)
# nine = multiplicative(three, 9)
# print(nine)
# for i in range(26):
#     encrypted = multiplicative(message, i)
#     for j in range(26):
#         decrypted = multiplicative(encrypted, j)
#         if decrypted == message:
#             print(f"{bcolors.OKGREEN}{i}, {j}{bcolors.ENDC} = {decrypted}")

# enc = multiplicative(message, 3)
# for j in range(100):
#     for i in range(5, 13, 2):
#         enc = multiplicative(enc, i)
#         print(enc)
#         if enc == message:
#             out = bcolors.OKGREEN
#             out += str(j) + " " + str(i)
#             out += "\n" + enc
#             out += bcolors.FAIL
#             print(out)
# for key in keys:
#     encrypted = multiplicative(message, key)
#     print(key, encrypted)
