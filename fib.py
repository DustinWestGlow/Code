a, b = 0, 1
for i in range(5):
    a, b = b, a + b
    print(b)

a = 1
b = 2
c = a + b
for i in range(50):
    c = a + b
    a = b
    b = c
    # print(c, end=" ")
    # print(c * "#")
    # print((2 ** (i + 2)) * "-")
    
# for i in range(60):
    # print(chr(ord('a') + (i % 26)), end=str(i//26))
# for i in range(26):
    # print(chr(ord('a') + i) + " " + str(i))
a, b = 13, 21
for i in range(4):
    # a, b = a-b,a
    a, b = b-a, a
    print(a)