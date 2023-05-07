# https://realpython.com/inner-functions-what-are-they-good-for/#retaining-state-in-a-closure
def outer():
    def inner():
        print("I am here!")
    inner()

outer()

# https://realpython.com/inner-functions-what-are-they-good-for/#retaining-state-in-a-closure
def outer(who):
    def inner():
        print(f"My name is {who}")
    inner()

outer("Dustin")
