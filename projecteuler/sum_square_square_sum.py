n = 100

sum_squares = 0
for i in range(1, n+1):
    sum_squares += i ** 2
    
# wrong - forgot to square
# square_sum = (n+1) * (n/2)
# approach #1
square_sum = ((n+1) * (n/2)) ** 2
# approach #2
square_sum = ((n * (n+1))/2) ** 2

print(square_sum - sum_squares)