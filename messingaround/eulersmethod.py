from math import *
# print("Hello, world")

# Just one solution might be
# f(x) = y(x) = e^x
def f(x):
    return exp(x)

# def deriv(x):
#     return exp(x)
# This is a DIFF. EQUAT.
# NOT a known curve!
#def deriv(x, y):
#    return y
# def deriv(x, y):
#    return (-x/y)
# I'M A SMART MAN
# Khan Academy problem solving
# Euler's Method exercise
def deriv(num, y):
    mapping = {
        -1: 2,
        0.5: -2,
        2: 1
    }
    return mapping[num]
# def deriv(x, y):
#     return x + 3 * y

iters = 2
endx = -10000
# step = endx / iters
step = 1.5
# iters = 3
# step = 1
x = -1
y = 3
print(f"({x}, {y}), y' = {deriv(x, y)}")
output = ""
for i in range(iters):
    dydx = deriv(x, y)
    dy = (dydx * step)
    y = y + dy
    dx = step
    x = x + dx
    # y = f(x) # if we knew the curve
    # without rounding
    # print(f"x: {x}, y: {y}, drv = {dydx}")
    print(f"x: {x:.2f}, y: {y:.2f}, dy/dx = {dydx:.2f}")
    output += f"({x:.2f},{y:.2f}),"
print(f"iters: {iters:.2f}, step: {step:.2f}")
print(f"endx: {endx:.2f}, iters * step: {iters*step:.2f}")
print(output[:-1])
# e^(0 through 4)
# for i in range(iters):
#     print(fx(i))