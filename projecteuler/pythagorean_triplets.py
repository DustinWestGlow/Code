import math

stopping = 334
for i in range(1, stopping):
    for j in range(1, i):
        n = (i**2) + (j ** 2)
        m = (n ** 0.5)
        if m % 1 == 0:
            if i + j + m == 100:
            # if math.fabs(1000 - i + j + m) < 200:
                print(i, j, m)
            # arr.append((i, j))

# separator = '   '
    # columns = 10
    # fullrows = len(triplets) // columns
    # lastrow_cols = len(triplets) - (fullrows * columns)
    # for i in range(fullrows):
        # selection = triplets[(columns * i): (columns * (i + 1))]
        
        # f.write(separator.join(selection) + '\n')
    # selection = triplets[-lastrow_cols:]
    # f.write(separator.join(selection) + '\n')


def get_factors(num):
    result = []
    for i in range(2, math.floor(math.sqrt(num))):
        if (num % i) == 0:
            result.append(math.floor(i))
            result.append(math.floor(num / i))
    return result

def simplify(x, y):
    arr1 = []
    arr2 = []
    f1 = get_factors(x)
    f2 = get_factors(y)
    for f in f1:
        if f not in f2:
            arr1.append(f)
    for f in f2:
        if f not in f1:
            arr2.append(f)
    r1 = 1
    r2 = 1
    for e in arr1:
        r1 *= e
    for e in arr2:
        r2 *= e
    return (r1, r2)    

triplets = []
for b in range(1, 400):
    for a in range(1, b):
        cs = (a**2) + (b ** 2)
        c = (cs ** 0.5)
        if c % 1 == 0:
            # if a + b + c == 12:
            # if math.fabs(1000 - i + j + m) < 200:
            triplets.append({
                'pair': [a, b, c],
                's': a + b + c
            })
            # arr.append((i, j))
with open('_9_output.txt', 'w') as f:
    for i in range(len(triplets)):
        t = triplets[i]
        pair = t['pair']
        line = ""
        for num in pair:
            line += (str(num) + ' ')
        s = t['s']
        line += (', ' + str(s) + '   ')
        line += ('\n')
        f.write(line)
        if math.fabs(1000 - s) < 100:
            print(t)