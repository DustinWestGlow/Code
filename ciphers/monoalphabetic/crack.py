# Hello, this file "cracks" monoalphabetic ciphers
# by filing brute force results
# elsewhere we will use BF files to guess at
# the key, then reverse the key,
# of ciphertext from a monoalphabetic cipher

from monoalphabetic import Monoalphabetic

# DONE! check 'caesar.txt' for results
# mono = Monoalphabetic()
# abcm = abcm = mono.alphabet
# caesar_file = open("caesar.txt", "w")
# for key in range(0, 26+1):
#     mono.caesar(key)
#     shifted = mono.substitute(abcm)
#     caesar_file.write(f"{key},{shifted}\n")

# DONE! check 'multiplicative.txt' for results
mono = Monoalphabetic()
abcm = abcm = mono.alphabet
multiplicative_file = open("multiplicative.txt", "w")
for key in range(0, 26+1):
    mono.multiplicative(key)
    shifted = mono.substitute(abcm)
    multiplicative_file.write(f"{key},{shifted}\n")