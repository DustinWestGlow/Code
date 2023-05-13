# width = 5
# height = 5

# storage = [['-' * width] * height]
# print(storage)

# width = 5
# height = 5

# storage = ['-' * width] * height
# print(storage)

# width = 5
# height = 5

# storage = ['-' * width] * height
# import random
# x = random.choice(range(0, width))
# y = random.choice(range(0, height))
# storage[x][y] = '#'
# print(storage)
# File "movingterminal.py", line 20, in <module>
#     storage[x][y] = '#'
# TypeError: 'str' object does not support item assignment


# width = 5
# height = 5

# storage = ['-' * width] * height
# import random
# x = random.choice(range(0, width))
# y = random.choice(range(0, height))
# tmp = list(storage[x])
# tmp[y] = '#'
# # storage[x] = str(tmp)
# storage[x] = "".join(tmp)
# print(storage)
# google 'python replace character in string'
# No Bueno
# google 'python replace character in string at specific index'
# StackOverflow

# width = 5
# height = 5

# storage = ['-' * width] * height
# import random
# x = random.choice(range(0, width))
# y = random.choice(range(0, height))
# tmp = list(storage[x])
# tmp[y] = '#'
# # storage[x] = str(tmp)
# storage[x] = "".join(tmp)
# for row in storage:
#     print(row)

import random
import time
width = 5
height = 5
runs = 10
import os
for i in range(runs):
    
    os.system('cls' if os.name == 'nt' else 'clear')
    storage = ['-' * width] * height
    x = random.choice(range(0, width))
    y = random.choice(range(0, height))
    tmp = list(storage[x])
    tmp[y] = '#'
    # storage[x] = str(tmp)
    storage[x] = "".join(tmp)
    for row in storage:
        print(row)
    time.sleep(0.5)