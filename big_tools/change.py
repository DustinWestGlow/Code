# input
paid_dollars = 399
paid_cents = 44
dollars = paid_dollars
cents = paid_cents

# setup counting mechanisms
currency_bills = [100, 20, 10, 5, 1]
bills = {}
for unit in currency_bills:
    bills[unit] = 0
currency_coins = [25, 10, 5, 1]
coins = {}
for unit in currency_coins:
    coins[unit] = 0

# python 3.7 dictionaries are ordered
# print(bills)
# for key in bills:
#     print(key, bills[key])
# dollar loop
while True:
    needed_a_bill = False
    for unit in currency_bills:
        if dollars >= unit:
            dollars -= unit
            bills[unit] += 1
            needed_a_bill = True
            break
    if not needed_a_bill:
        break
# cents loop
while True:
    needed_a_coin = False
    for unit in currency_coins:
        if cents >= unit:
            cents -= unit
            coins[unit] += 1
            needed_a_coin = True
            break
    if not needed_a_coin:
        break

print(f"TOTAL = ${paid_dollars}.{paid_cents}")
print()
print(f"DOLLARS = {paid_dollars}")
for unit in currency_bills:
    print(f"${unit} X {bills[unit]} = ${unit * bills[unit]}")
print()
print(f"COINS = {paid_cents}")
for unit in currency_coins:
    print(f".{unit} X {coins[unit]} = .{unit * coins[unit]}")
print()
print("END")

# print("Hello, World")