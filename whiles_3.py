import time
import random

queue = []
monitor = {
    "in": 0,
    "out": 0
}
clearing = {
    ""
}

while True:
    inquests = 2
    monitor["in"] += inquests
    handled = 1
    monitor["out"] += handled
    print(monitor["in"] - monitor["out"])
    time.sleep(1/3)