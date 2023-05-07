import math

# a = 756
# b = 210

# while True:
#     if int(a) % int(b) == 0:
#         print(b)
#         break
#     c = math.floor(a / b)
#     d = a - (b * c)
#     a = b
#     b = d

def gcd(big, sml):
    while True:
        if int(big) % int(sml) == 0:
            print(f"{big} = {sml} * {str(int(big/sml))} + 0")
            return int(sml)
        division = math.floor(big / sml)
        remainder = big - (sml * division)
        print(f"{big} = {division} * {sml} + {remainder}")
        big = sml
        sml = remainder
        
    
print("SOLVED!")
big = 26
sml = 3
result = gcd(big, sml)
print(f"GCD of({big}, {sml}): {result}")