
# def factorial(tail):
#     total = 1
#     for i in range(2, tail+1):
#         total *= i
#     return total

# print("MAXER")
# for i in range(2, 20):
#     print(f"{i}: {factorial(i)}")

# def get_lcm(max_div, multiple):
#     while True:
#         is_divisible = True
#         for divisor in range(3, max_div+1):
#             if not multiple % divisor == 0:
#                 is_divisible = False
#                 break
#         if is_divisible:
#             return multiple
#         multiple += 10

# multiple = 10
# for m in range(2, 20+1):
#     multiple = get_lcm(m, multiple)
#     print(m, multiple)

print(2 * 3 * 2*2 * 5 * 2*3 * 7 * 2*2*2 * 3*3 * 2*5 )