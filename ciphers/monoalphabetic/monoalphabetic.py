# Caesar, Multiplicative, and CM/MC Affine
# reduce to generating a substitution map
# hence monoalphabetic online terminology

# First make an instance, mono
# then create the map using from 'c,m,cm,mc'
# then map the plaintext using 'substitute'
# And VOILA! You have the ciphertext!
# Dustin West, April 4, 2023

# test alp/map creation in python shell
# alphabet = "".join([chr(x + ord('a')) for x in range(26)])
# substitution = dict(zip(alphabet, alphabet))

class Monoalphabetic:
    def __init__(self):
        self.alphabet = "".join([chr(x + ord('a')) for x in range(26)])
        self.substitution = dict(zip(self.alphabet, self.alphabet))
    def substitute(self, plaintext):
        # p > c via submapping (cipher wheel)
        ciphertext = ""
        for c in plaintext:
            if not (c.isalpha() and c.islower()):
                ciphertext += c
                continue
            ciphertext += self.substitution[c]
        return ciphertext
    def multiplicative(self, key):
        abc = self.alphabet
        for i in range(len(abc)):
            c_plain = abc[i]
            c_cipher = abc[(((i + 1) * key) - 1) % len(abc)]
            self.substitution[c_plain] = c_cipher
    def caesar(self, key):
        abc = self.alphabet
        for i in range(len(abc)):
            c_plain = abc[i]
            c_cipher = abc[(i + key) % len(abc)]
            self.substitution[c_plain] = c_cipher