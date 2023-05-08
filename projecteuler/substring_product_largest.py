# 1st answer wrong
# 85754359800
# TESTING
# file and arr working
# loops = excluding initial
# fix loops
# find product function fixed
# paper algrotihm and general gist flawless
# computer indexing and details problematic

# 2nd answer
# 23514624000
# CORRECT!
# Winning sequence
# 3557668966489

string = ""

# https://stackoverflow.com/questions/1450897/remove-characters-except-digits-from-string-using-python
with open("_8.txt", 'r') as file:
    for line in file:
        sanitized = ''.join(filter(str.isdigit, line))
        string += sanitized

print(string)

# WORKS GREAT, MAN!
# ONLY PROBLEM: I'm using lists not strings :(
    # - Dustin May 4th 2023
# take string
# find substring
# starting at index idx
# of substring length n
# return it's product!
def find_product(string, idx, n):
    substring = string[idx: idx + n]
    product = 1
    for i in range(len(substring)):
        product *= substring[i]
    return product

# get 13 nums
# to shift right'
#   divide by 1st num
#   multiply by new num
# test = ""
# Okay test ran and concluded
# i in range(len(string) + 1 - len(substring))
# i in range(string_len + 1 - substring_len)
string_len = len(string)
substring_len = 13
# for i in range(string_len + 1 - substring_len):
    # test = string[i:i+13]
# arr = list(string) # leaves them as characters 
arr = [int(c) for c in string]
product = 1
for i in range(substring_len):
    product *= arr[i]
start = substring_len
stop = string_len + 1 - substring_len
biggest = -1
for i in range(start, stop):
    product = 1 if arr[i] == 0 else (product / arr[i])
    product *= arr[i + substring_len - 1]
print(product)

def filenum_to_list(filepath):
    string = ""
    # https://stackoverflow.com/questions/1450897/remove-characters-except-digits-from-string-using-python
    with open(filepath, 'r') as file:
        for line in file:
            sanitized = ''.join(filter(str.isdigit, line))
            string += sanitized
    return [int(c) for c in string]

# Get number from text file and convert to list
arr = filenum_to_list("./find_substring_product.txt")# ("_8_test1.txt")## 

# length of substring to search with
# discrete counting variables
sub_len = 13
str_len = len(arr)
old_start = 0
old_end = str_len - sub_len
new_start = sub_len
new_end = str_len
loops = str_len - sub_len
print("loops: ", loops)

# take arr
# find subarr
# starting at index idx
# of subarr length n
# return it's product!
def find_product(arr, idx, n):
    subarr = arr[idx: idx + n]
    product = 1
    for i in range(len(subarr)):
        product *= subarr[i]
    return product

# find biggest product
# keep track of current product
biggest = -1
product = find_product(arr, 0, sub_len)
print("initial product: ", product)

biggest_index = -1
# execute algorithm
for i in range(loops):
    old_idx = old_start + i
    old = arr[old_idx]
    new = arr[new_start + i]
    if old == 0:
        product = find_product(arr, old_idx + 1, sub_len)
    else:
        product /= old
        product *= new
    if product > biggest:
        biggest = product
        biggest_index = i
    # print("product in loop: ", i, product)


# print result
print("biggest: ", biggest)
print("biggest_index: ", biggest_index)
print("Sequence: ", arr[biggest_index: biggest_index + sub_len])