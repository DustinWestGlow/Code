# Hello, here run tests and have fun
# write commands to print encrypted
# things to the terminal

from monoalphabetic import Monoalphabetic

# message = "and you too, brutus?"
key = 3
mono = Monoalphabetic()
abcm = mono.alphabet
mono.multiplicative(key)
# mono.caesar(key) # mono.genmap("c", 3)
message = "be fruitful and multiply"
encrypted = mono.substitute(message)# substitute(abcm)
# again = mono.substitute(encrypted)
print(key)
print(abcm)
print(message)
print(encrypted)
# print(again)