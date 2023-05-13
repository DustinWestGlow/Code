import os
import random
import time


queue = []
req_idx = 0
monitor = {
    "in": 0,
    "out": 0
}
clearing = {
    ""
}

start_epoch = time.time()
def print_screen():
    os.system('cls' if os.name == 'nt' else 'clear')
    print("Time: ")
    current_epoch = time.time()
    print(round(current_epoch - start_epoch, 2))
    print("Server Queue: ")
    print("==============")
    for item in queue:
        print(item, end="\t")

while True:
    inquests = 2
    monitor["in"] += inquests
    queue += [i for i in range(req_idx, req_idx + inquests)]
    req_idx += inquests
    print_screen()
    time.sleep(1)
    handled = 1
    monitor["out"] += handled
    queue = queue[handled:]
    print(monitor["in"] - monitor["out"])
    print_screen()
    time.sleep(1)