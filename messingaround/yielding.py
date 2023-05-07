def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

gen = infinite_sequence()

for i in range(30):
    print(next(gen))