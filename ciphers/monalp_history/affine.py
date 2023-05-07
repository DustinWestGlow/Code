from caesar import caesar_cipher
from multiplicative import Multiplicative

# Caesar cipher keys
# !0, !26, !13
c_ks = [x for x in range(1, 25+1)]
c_ks.remove(13)
# Multiplicative cipher keys
# !0, !1, !13, !26, !even
m_ks = [(x*2+1) for x in range(1, 12+1)]
m_ks.remove(13)

mc = Multiplicative()

message = "get up out of that grave woah"

import random
print(f"MESSAGE: '{message}'")
print("ENCRYPTING...")
multiplied = random.choice(m_ks)
shifted = random.choice(c_ks)
encrypted = mc.encrypt(message, multiplied)
print(f"multiplicative '{multiplied}': {encrypted}")
encrypted = caesar_cipher(encrypted, shifted)
print(f"caesar '{shifted}': {encrypted}")

print("DECRYPTING...")
# decrypt attempts
attack_file = open("attacks_affine.txt", "w")
attack_file.write("shift,multiply,caesar,multiplicative,result\n")
for mult in m_ks:
    for shift in c_ks:
        c = encrypted
        m = caesar_cipher(c, shift)
        k = mc.encrypt(m, mult)
        p = k
        attack_file.write(f"{shift},{mult},{m},{k},{p}\n")
        if p == message:
            print(f"caesar '{shift}': {m}")
            print(f"multiplicative '{mult}': {k}")
            print("CRACKED!")
            print(f"message = '{p}'")
attack_file.close()