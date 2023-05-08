
# one, two, three, nine
# ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
# twenty, twenty two, twenty nine
# thirty, ninety nine
# one hundred and ..., two hundred, nine hundred,
# one thousand

roof = 10 ** 2

ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
midteens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
tens = ['suppozed ZEROTEN?', 'supposed ten?', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

def convert(num):
    s = ""
    p_100 = num // 100
    p_10 = (num - ((num // 100) * 100)) // 10
    if num >= 10 ** 3:
        s += str(ones[num // (10 ** 3)])
    if p_100 > 0:
        s += str(ones[p_100])
        s += " "
        s += "hundred"
    if p_100 > 00 and p_10 > 1:
        s += " and "
    if p_10 > 1:
        
        s += ""
        s += str(tens[p_10])
    if p_10 == 1:
        if p_100 > 0:
            s += " and "
        s += ""
        s += str(midteens[num % 10])
    elif (num % 10) > 0:
        if p_100 > 0 and p_10 == 0:
            s += " and "
        if p_10 > 1:
            s += " "
        s += ""
        s += ones[num % 10]
    if num == 0:
        s += "zero"
    return s

# with open("numbers.txt", 'w') as file:
#     for i in range(0, 999):
#         file.write(f"{str(i):>7}   " +  convert(i) + "\n")
# with open("numbers_collapsed.txt", 'w') as file:
#     for i in range(0, 1000):
#         converted = convert(i)
#         smashed = ''.join(filter(str.isalpha, converted))
#         file.write(f"{str(i):>7}   " + str(len(smashed)) + "    " + smashed + "\n")
with open("numbers.csv", 'w') as file:
    file.write('n,length,smashed,real\n')
    for i in range(0, 1000):
        converted = convert(i)
        smashed = ''.join(filter(str.isalpha, converted))
        line = ""
        line += str(i) + ','
        line += str(len(smashed)) + ','
        line += smashed + ','
        line += converted
        line += '\n'
        file.write(line)
