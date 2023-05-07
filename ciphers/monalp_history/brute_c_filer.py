def caesar_cipher(plaintext, k):
    ciphertext = ""
    # every character input
    for c in plaintext:
        # skip non letters like (?!,.)
        if not c.isalpha():
            ciphertext += c
            continue
        # keep capitals in place 'A' -> 'D' for k=3
        case = ord('a')
        if c.isupper():
            case = ord('A')
        # setup formula inputs
        reduced = ord(c) - case
        # FORMULA
        formula = (reduced + k) % 26
        # finish formula outputs
        adjusted = formula + case
        backinbusiness = chr(adjusted)
        # output
        ciphertext += backinbusiness
    return ciphertext

from random import randint
message = "Porky the pig went to Los Angeles to buy a burger from in and out! It was animal style, too!"
# key = randint(1, 25)
key = 26 - 9
encrypted = caesar_cipher(message, key)

with open("attacks.txt", "w") as attack_file:
    for i in range(0, 25 + 1):
        attempt = caesar_cipher(encrypted, i)
        out = ""
        out += f"Key: {i}, Result: {attempt}\n"
        attack_file.write(out)
    