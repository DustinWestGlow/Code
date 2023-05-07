# THE WEBSITE SOLVED IT
# GAVE ME THE SUBSTITUTION INFO
# SO IM GONNA TRY IT NOW
# SORRY
# https://ciphertools.co.uk/#/crack
# subkey = "FOZGPYHQXIRAJSBKTCLUDMVENW"
subkey = "LORUXADGJMPSVYBEHKNQTWZIFC"
subkey = subkey.lower()
# subkey = subkey.split("")

ciphertext = ""
with open("crack_ciphertext.txt") as reader:
    ciphertext = reader.read()

decrypted = ""
alphabet = "".join([chr(x + ord('a')) for x in range(26)])
for letter in ciphertext:
    if not letter.islower():
        continue
    decrypted += alphabet[subkey.index(letter.lower())]
print(decrypted)

letter_count = {}
# alphabet = "".join([chr(x + ord('a')) for x in range(26)])
for letter in alphabet:
    letter_count[letter] = 0
# print(letter_count)

for letter in ciphertext:
    if not (letter.islower()):
        continue
    current_count = letter_count[letter]
    letter_count[letter] = current_count + 1
# print(letter_count)

cipher = {'a': 'k', 'b': 'd', 'c': 'c', 'd': 'd',
'e': 'p', 'f': 'd', 'g': 'g', 'h': 'h', 'i': 'i',
'j': 'n', 'k': 'k', 'l': 'a', 'm': 'j', 'n': 'h',
'o': 'g', 'p': 'p', 'q': 't', 'r': 'c', 's': 's',
't': 't', 'u': 'l', 'v': 'v', 'w': 'w', 'x': 'e',
'y': 's', 'z': 'm'}

decrypted = ""

# for letter in ciphertext:
#     if not letter.islower():
#         continue
#     decrypted += cipher[letter]
# print(decrypted)
# print(ciphertext)