a = 1
b = 1
c = a

for i in range(10):
    c = a
    a = a + b
    b = c
THEN
############
OR
# first idea here
# end format NOT required
    print(a)
OR
# short lists
    print(a, end=" ")
OR
# big number lists
    print(a, end="   ")
OR
# correct end fib stream formatting
    print(a, end="   ")
print()



list_len = 20
for i in range(list_len):
    
    c = b
    b = a + b
    a = c
    
    print(b)
    
    c = a
    a = a + b
    b = c
    print(a)
    
    c = a + b
    a = b
    b = c
    
    print(c)

# attempt at neat terminal big numbers
print("{0:.2E}   ".format(a), end="")

# tuple manipulation (SO MUCH BETTER)
prv, nxt = 0, 1

for i in range(10):
    prv, nxt = nxt, prv+nxt
    print(nxt)
    
# YouTube: Hindi Life
# https://www.youtube.com/watch?v=4aKVv5cHrUY&ab_channel=HindiLife
seq = [0, 1]
for i in range(2, 10+2):
    seq.append(seq[i-1]+seq[i-2])
    print(seq[i])
    
#https://www.youtube.com/watch?v=0xUmsMw4-Qo&ab_channel=EaseCoding
seq = [0, 1]
for i in range(2, 10+2):
    seq.append(seq[-1]+seq[-2])
    print(seq[i])