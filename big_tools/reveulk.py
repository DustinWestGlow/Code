from math import *
# This is a DIFF. EQUAT.
# NOT a known curve!
# def deriv(x, y):
#    return (-x/y)
# I'M A SMART MAN
# Khan Academy problem solving
# Euler's Method exercise

def deriv(x, y):
    return (3*x - 2*y)
iters = 2
endx = 2
step = 1
x = 0
k = 1.5 #? 
y0 = k
y = y0
print(f"({x}, {y}), y' = {deriv(x, y)}")
output = ""
for i in range(iters):
    dydx = deriv(x, y)
    dy = (dydx * step)
    y = y + dy
    dx = step
    x = x + dx
    if (i == iters-1):
        print("ENDING y: ", y)
    # y = f(x) # if we knew the curve
    # without rounding
    # print(f"x: {x}, y: {y}, drv = {dydx}")
    print(f"x: {x:.2f}, y: {y:.2f}, dy/dx = {dydx:.2f}")
    output += f"({x:.2f},{y:.2f}),"
print(f"iters: {iters:.2f}, step: {step:.2f}")
print(f"endx: {endx:.2f}, iters * step: {iters*step:.2f}")
print(output[:-1])