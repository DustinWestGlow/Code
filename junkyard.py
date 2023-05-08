print("File name is: " + __name__)
# def main():

# Display the powers of 2 using anonymous function

terms = 11

# Uncomment code below to take input from the user
terms = int(input("How many terms? ")) # ADD COMMENT HERE

# use anonymous function
result = list(map(lambda x: 2 ** x, range(terms)))

print("The total terms are:",terms)
for i in range(terms):
   print("2 raised to power",i,"is",result[i])

   def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

gen = infinite_sequence()

for i in range(30):
    print(next(gen))