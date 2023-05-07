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

# c = (p + k) % 26 for c in [0, 25], p in [0, 25]
# The Mathematics of Secrets library book
# Dustin West Apr 1, 2023
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
key = randint(3, 20)
# message = "And you too, Brutus?"
message = "Porky the pig went to Los Angeles to buy a burger from in and out! It was animal style, too!"
encrypted = caesar_cipher(message, key)
print("Encrypted message: ")
print(encrypted)

rev_key = 26 - key

from nltk import tokenize
import json
valid_words = {}
with open('words_dictionary.json') as word_file:
    valid_words = json.load(word_file)
def crack(ciphertext):
    language_amounts = []
    for i in range(1, 25 + 1):
        trial = caesar_cipher(ciphertext, i)
        words = tokenize.word_tokenize(trial)
        correctly_spelled = 0
        for word in words:
            if word.lower() in valid_words:
                correctly_spelled += 1
        language_amounts.append(correctly_spelled)
    print(language_amounts)
    # https://stackoverflow.com/questions/13300962/python-find-index-of-minimum-item-in-list-of-floats
    val, idx = max((val, idx) for (idx, val) in enumerate(language_amounts))
    return (idx + 1)

out_color = bcolors.OKGREEN
# print(f"key = {rev_key}")
cracked = crack(encrypted)
print(f"{out_color}Cracked! Key = {str(cracked)}, message = {caesar_cipher(encrypted, cracked)} {bcolors.ENDC}")