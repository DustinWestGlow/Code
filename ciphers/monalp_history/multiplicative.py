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

# print(f"{bcolors.HEADER}This is a multiplicative ciphering program. Stay Awesome.{bcolors.ENDC}")

class Multiplicative:
    def __init__(self):
        self.alphabet = "".join([chr(x + ord('a')) for x in range(26)])
        self.alphabet_map = {}
    def run_conversion(self, text):
        converted = ""
        for c in text:
            if not (c.isalpha() and c.islower()):
                converted += c
                continue
            converted += self.alphabet_map[c]
        return converted
    def encrypt(self, plaintext, key):
        for i in range(len(self.alphabet)):
            p = i
            # ENCRYPT HELPER WEBSITE TESTING
            # p = i + 1
            multiplied = (p * key) % 26# - 1) % 26
            decimated_origin = self.alphabet[i]
            decimated_letter = self.alphabet[multiplied]
            self.alphabet_map[decimated_origin] = decimated_letter
        return self.run_conversion(plaintext)
    def decrypt(self, ciphertext, key):
        for i in range(len(self.alphabet)):
            n = i + 1 # 'b' = 2
            while True:
                divided = n / key
                if not divided % 1 == 0:
                    n += 26
                    continue
                origin = self.alphabet[i]
                destination = self.alphabet[(int(divided) % 26) - 1]
                self.alphabet_map[origin] = destination
                break
        return self.run_conversion(ciphertext)


# message = "be fruitful and multiply"
# !0, !1, !13, !26, !even
# keys = [(x*2+1) for x in range(1, 13)]
# keys.remove(13)
# cipher = Multiplicative()
# message = "be fruitful and multiply"
# encrypted = cipher.encrypt(message, 3)
# inverse = cipher.encrypt(encrypted, 9)
# decrypted = cipher.decrypt(encrypted, 3)
# print(encrypted)
# print(inverse)
# print(decrypted)
# print("alphabet")
# print(cipher.encrypt(cipher.alphabet, 25))