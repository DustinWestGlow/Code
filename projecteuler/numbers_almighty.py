
# one, two, three, nine
# ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
# twenty, twenty two, twenty nine
# thirty, ninety nine
# one hundred and ..., two hundred, nine hundred,
# one thousand

# no commas because of csv files


roof = 10 ** 2

ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
midteens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
tens = ['suppozed ZEROTEN?', 'supposed ten?', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

def convert_triplet(num):
    # Messy but working rules
    # converts 0 <= x <= 999
    s = ""
    p_100 = num // 100
    p_10 = (num - ((num // 100) * 100)) // 10
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

# empty name for < 1000
# 732 seven hundred and thirty two EMPTY
names = ['',
'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'undecillion', 'duodecillion', 'tredecillion', 'qualtuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novendecillion', 'vigintillion', 'unvigintillion', 'duoigintillion', 'trevigintillion', 'quatuorvigintillion', 'quinvigintillion', 'sexvigintillion', 'septenvigintillion', 'octovigintillion', 'novemvigintillion', 'trigintillion', 'googol'
]
def convert_num(n):
    if n == 0:
        return "zero"
    power = 0
    result = ""
    pieces = []
    while n >= (10 ** power):
        triplet = n
        triplet = triplet % (10 ** (power + 3))
        triplet = triplet - (triplet % (10 ** power))
        triplet = triplet // (10 ** power)
        if triplet == 0:
            power += 3
            continue
        converted = convert_triplet(triplet)
        pieces.append(converted + " " + names[int(power / 3)])
        power += 3
    if n > (10 ** 3) and not ((n % (10 ** 3)) == 0):
        pieces[0] = 'and ' + pieces[0]
    pieces.reverse()
    result = " ".join([str(piece) for piece in pieces])
    return result

total = 0
for i in range(1, 1000+1):
    converted = convert_num(i)
    smashed = ''.join(filter(str.isalpha, converted))
    total += len(smashed)
print(total)
# total += convert_num(i)
# print(convert_triplet(538))
# n = 120020020027342374180274837048178947380915708932758934750893427423857208781029384756102938475618294

# 1->100 inclusive
# smashed only count characters
# character sum
# 21124
# CORRECT