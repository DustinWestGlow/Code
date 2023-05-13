import os
import random
import time


queue = []
req_idx = 0
monitor = {
    "in": 0,
    "out": 0
}
tick = 0
shutdown = False
loadLimit = 10
sent = 0
sendLimit = 9


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

inps = 5
outps = 30
while True:
    if not shutdown:
        inquests = 2
        monitor["in"] += inquests
        queue += [i for i in range(req_idx, req_idx + inquests)]
        req_idx += inquests
        tick += inquests
        if tick > loadLimit:
            shutdown = True
            tick = 0
        time.sleep(1/inps)
    else:
        handled = 1
        monitor["out"] += handled
        queue = queue[handled:]
        sent += handled
        if sent > sendLimit:
            shutdown = False
            sent = 0
        time.sleep(1/outps) 
    print_screen()