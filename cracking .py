# deleted password file
# now try Git stuff (passfile too big)

progress = 0
with open('progress', 'r') as pf:
    progress = int(pf.read())

index = progress
import logging
logging.basicConfig(filename='cracklog.log', encoding='utf-8', level=logging.DEBUG)
logging.info(index)

import atexit

def exit_handler():
    with open('progress', 'w') as pf:
        logging.warning(index)
        pf.write(str(index))

atexit.register(exit_handler)


with open("crack", 'w') as f:
    while True:
        amount = (10 ** 3)
        nums = list(range(index, index + amount))
        txt = ','.join([str(num) for num in nums])
        f.write(txt)
        index += amount
        