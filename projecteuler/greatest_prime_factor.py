

# print(f"num: {num}")
# # for rock in range(2, root):
rock = num
pick = 2
prfs = []
while True:
    pick_hit = False
    while rock % pick == 0:
        print(f"{rock} % {pick} = 0")
        rock = int(rock / pick)
        print(f"{rock * pick} / {pick} = {rock}")
        if not pick_hit:
            if is_prime(rock):
                prfs.append(rock)
            if is_prime(pick):
                prfs.append(pick)
        pick_hit = True
    pick_hit = False
    pick += 1
    if math.sqrt(rock) < pick:
        break
prfs.sort()
print(prfs)
print(prfs[-1])