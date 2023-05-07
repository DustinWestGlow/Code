import csv
import random

# count frequency of letters in ciphertext
# ciphertext = "uihjkcaldcbu" a.k.a. nonsense
ciphertext = ""
with open("ciphertext.txt") as reader:
    ciphertext = reader.read()
# {'a': 0, 'b': 0, ...}
abc = "".join([chr(x + ord('a')) for x in range(26)])
zeros = [0] * len(abc)
ctx_count = dict(zip(abc, zeros))
for c in ciphertext:
    if not c.isalpha():
        continue
    ctx_count[c.lower()] += 1
# {'a': 5, 'b': 14, ...}
# print(ctx_count)

# sort ciphertext letter frequencies (descending)
# R, S, F, I...
frequency_ciphertext = []
# https://stackoverflow.com/questions/4859292/how-can-i-get-a-random-key-value-pair-from-a-dictionary
# for sorting runs
for i in range(len(ctx_count)):
    # find most abundant letter
    abundant_letter = random.choice(list(ctx_count.keys()))
    for key in ctx_count:
        if ctx_count[key] >= ctx_count[abundant_letter]:
            abundant_letter = key
    # append it
    frequency_ciphertext.append(abundant_letter)
    # https://www.freecodecamp.org/news/python-remove-key-from-dictionary/
    # remove it and repeat for next highest letters
    del ctx_count[abundant_letter]
# print(frequency_ciphertext)

# # unsorted list of english letters and their frequencies
eng_count = {}
# # https://docs.python.org/3/library/csv.html
with open('uns_eng_frq.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        # 'a': 0.08167
        letter = str(row[0]).lower()
        frequency = float(row[1])
        eng_count[letter] = frequency
# print(eng_count)
# sort ciphertext letter frequencies (descending)
# R, S, F, I...
frequency_english = []
# https://stackoverflow.com/questions/4859292/how-can-i-get-a-random-key-value-pair-from-a-dictionary
# for sorting runs
for i in range(len(eng_count)):
    # find most abundant letter
    abundant_letter = random.choice(list(eng_count.keys()))
    for key in eng_count:
        if eng_count[key] >= eng_count[abundant_letter]:
            abundant_letter = key
    # append it
    frequency_english.append(abundant_letter)
    # https://www.freecodecamp.org/news/python-remove-key-from-dictionary/
    # remove it and repeat for next highest letters
    del eng_count[abundant_letter]
# print(frequency_english)

# MAP most frequent ctxt -> english
realkey = "SZJTRDPUNBOHEWQGVFLIKAXMYC".lower()
mapper = dict(zip(realkey, abc))
# mapper = dict(zip(frequency_ciphertext, frequency_english))

# mapper['s'] = 'a'
# mapper['h'] = 'l'
# print(mapper)

# for each letter in ciphertext
plaintext = ""
for c in ciphertext:
    if not c.isalpha():
        plaintext += c
        continue
    plaintext += mapper[c.lower()]
# SEE IF IT WORKS
# print(plaintext)

with open("frequencycracker.txt", "w") as writer:
    writer.write("".join(frequency_ciphertext) + "\n")
    writer.write("".join(frequency_english) + "\n")
    writer.write("\n")
    writer.write("\n")
    txt = ""
    cout = ""
    pout = ""
    linelength = 40
    for i in range(len(ciphertext)):
        cout += ciphertext[i]
        pout += plaintext[i]
        if i % linelength == (linelength - 1):
            txt += cout
            txt += "\n"
            txt += pout
            txt += "\n"
            txt += "\n"
            cout = ""
            pout = ""
    writer.write(txt)
    


# https://www.freecodecamp.org/news/sort-dictionary-by-value-in-python/#howtosortdatawiththesortedmethod
# https://gist.github.com/randallmorey/dea827d6f1c48374bdea0d2f5a320a16
# http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/english-letter-frequencies/
# https://stackoverflow.com/questions/51804790/in-place-modification-of-python-lists