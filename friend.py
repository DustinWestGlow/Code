

class colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    
col_list = ['\033[94m', '\033[96m', '\033[92m', '\033[91m', '\033[1m']
ENDC = '\033[0m'

import random
import os
import time

alphabet = [chr(ord('a') + i) for i in range(26)]

while True:
    for i in range(100):
        print(random.choice(col_list) + random.choice(alphabet) + ENDC, end=" ")
    time.sleep(0.05)