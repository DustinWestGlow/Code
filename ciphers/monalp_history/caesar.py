# chr(ord(' ') - ord('a')) gives not in range error
# because space is below 97 and space - 97 < 0
# no chr exists for x < 0

def caesar_cipher(plaintext, k):
    ciphertext = ""
    for p_char in plaintext:
        # ciphertext += " "
        if not p_char.isalpha():
            ciphertext += p_char
            continue
        # print(ord(p), end=" ")
        # c = chr(ord(p) - ord('a'))
        # c = (p + k) % 26
        ord_case = ord('a')
        if p_char.isupper():
            ord_case = ord('A')
        p_num = ord(p_char) - ord_case
        c_wrap = (p_num + k) % 26
        c_adjusted = c_wrap + ord_case
        c_char = chr(c_adjusted)
        # print(f"p = {p}, c = {c}, ord(p) = {ord(p)}, ord(p) - ord('a') = {ord(p) - ord('a')}")
        # print(f"p_char={p_char}, p_num={p_num}, c_wrap={c_wrap}, c_adjusted={c_adjusted}, c_char={c_char}")
        ciphertext += c_char
    return ciphertext

# alphabet = "".join([chr(x + ord('a')) for x in range(26)]) 
# plaintexts = [alphabet,
# "and you too brutus",
# "and you too, brutus?",
# "And You Too, Brutus?"]
# k = 3

# print("Caesar Cipher --- ")
# print(f"ord(a) = {ord('a')}")
# print()
# for text in plaintexts:
#     print(f"Key = {k}")
#     print(" " + " ".join(text))
#     print(caesar_cipher(text, k))
#     print()
# for i in range(26*3+1):
#     print(f"Key = {i}")
#     if i % 26 == 0:
#         print(alphabet)
#     print(caesar_cipher(alphabet, i))
# print(f"Key = 13")
# rot = alphabet
# print(rot)
# rot = caesar_cipher(rot, 13)
# print(rot)
# rot = caesar_cipher(rot, 13)
# print(rot)