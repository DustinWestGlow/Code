from caesar import caesar_cipher
from multiplicative import Multiplicative
from speller import spellcheck

ciphertext = ""

with open("crack_ciphertext.txt") as reader:
    ciphertext = reader.read()
# print(ciphertext)

brute_forcing = open("crack_bruteforcing.txt", "w")
observations = []
mc = Multiplicative()

# TESTING CIPHERING WEBSITE HELP
# ct = mc.alphabet
# ct = ciphertext
# multiplied = mc.encrypt(ct, 9)
# shifted = caesar_cipher(multiplied, 5)
# trial = shifted
# print(trial)

for mult_key in range(1, 26+1):
    for caes_key in range(1, 26+1):
        ct = ciphertext
        multiplied = mc.encrypt(ct, mult_key)
        shifted = caesar_cipher(multiplied, caes_key)
        # shifted = caesar_cipher(ct, caes_key)
        # multiplied = mc.encrypt(shifted, mult_key)
        # trial = multiplied
        trial = shifted
        observation = {
            'correct': spellcheck(trial),
            'key_caesar': caes_key,
            'key_multiplicative': mult_key
        }
        observations.append(observation)
        brute_forcing.write(f"shift={str(caes_key)},multiplied={str(mult_key)}\n")
        brute_forcing.write(trial + "\n")
brute_forcing.close()

# find max correct spelled words and use that one
max_correct = -1
max_correct_index = -1
for i in range(len(observations)):
    o = observations[i]
    if o['correct'] > max_correct:
        max_correct_index = i
found = observations[max_correct_index]
print("found")
print(found)
with open("cracked.txt", 'w') as writer:
    shifted = found['key_caesar']
    multiplied = found['key_multiplicative']
    writer.write(f"shift={str(shifted)},multiplied={str(multiplied)}\n")
    writer.write(mc.encrypt(caesar_cipher(ciphertext, shifted), multiplied))
print("END")
# print(ciphertext)
# print(caesar_cipher(mc.encrypt(ciphertext, 11), 3))
# print(caesar_cipher(mc.encrypt(ciphertext, 3), 15))
# print(mc.decrypt(caesar_cipher(ciphertext, 5), 3))
# print(caesar_cipher(mc.encrypt(ciphertext, 3), 11))
# print(caesar_cipher(mc.encrypt(ciphertext, 9), 5))