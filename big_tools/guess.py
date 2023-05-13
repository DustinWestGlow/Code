from random import randint

minimum = 0
maximum = 25

num = randint(minimum, maximum)

while True:
    print(f"Guess a number between '{minimum}' and '{maximum}':")
    guess = int(input())
    
    if guess == num:
        print(f"Correct! The number was '{num}'")
        break
    elif guess < num:
        print("Go higher.")
    else:
        print("Go lower.")