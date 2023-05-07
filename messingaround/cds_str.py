from random import randint
from time import sleep

while True:
    print(randint(0,10), end=" ")
    sleep(0.1)

from time import sleep
import sys

def print_slowly(text):
    for c in text:
        print(c, end="")
        sys.stdout.flush()
        sleep(0.01)

while True:
    print_slowly('LOADING')

# https://stackoverflow.com/questions/17432478/python-print-to-one-line-with-time-delay-between-prints
while True:
    for i in range(2):
        print(randint(0, 9), end="  ")
    sys.stdout.flush()
    sleep(0.01)

#https://stackoverflow.com/questions/517970/how-to-clear-the-interpreter-console
while True:
    for i in range(5):
        print(randint(0, 9), end="  ")
    sys.stdout.flush()
    sleep(0.1)
    clear = lambda: os.system('clear')
    clear()

# motions = ['\\', '-', '/', '-']

mot = 0
while True:
    print(motions[mot])
    mot = (mot + 1) % len(motions)
    sys.stdout.flush()
    sleep(0.5)
    clear = lambda: os.system('clear')
    clear()

motions = ['.    ', '..   ', '...  ', '.... ', '.....', ' ....', '  ...', '   ..', '    .', '     ']
