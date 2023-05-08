# https://realpython.com/python-thinking-recursively/

# https://stackoverflow.com/questions/29570870/memoization-fibonacci-algorithm-in-python
# READ STACKOVERFLOW FOR
# EVEN MORE SOLUTIONS
cache = {0: 0, 1: 1}

def cachedfr(n):
    if n in cache:
        return cache[n]
    else:
        print("Calculating F", "(", n, ")", sep="", end=", ")
        memoized = cachedfr(n-1) + cachedfr(n-2)
        cache[n] = memoized
        # ALWAYS RETURN MEMOIZED NUM
        # I DONT KNOW WHY
        # BUT IT WORKS
        # https://stackoverflow.com/questions/29570870/memoization-fibonacci-algorithm-in-python
        return memoized

result = cachedfr(100)
print()
print("RESULT - ", result)