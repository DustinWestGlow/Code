import random

trials = [10 ** 6]# [10, 100, 1000, 10000, 100000]

for runs in trials:
    matches = 0
    for run in range(runs):
        a = random.randint(1, 26)
        b = random.randint(1, 26)
        if a == b:
            matches += 1
    probability = matches/runs
    percent = probability * 100.0
    print("{:8.3f}%, {:8.5f} = {:10}/{:10}".format(percent, probability, matches, runs))