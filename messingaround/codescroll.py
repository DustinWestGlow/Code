from random import randint
from time import sleep
import sys
import os

motions = ['.    ', '..   ', '...  ', '.... ', '.....', ' ....', '  ...', '   ..', '    .', '     ']

mot = 0
while True:
    print(motions[mot])
    mot = (mot + 1) % len(motions)
    sys.stdout.flush()
    sleep(0.1)
    clear = lambda: os.system('clear')
    clear()
