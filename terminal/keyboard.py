# import random
# import time
# width = 5
# height = 5
# runs = 10
# for i in range(runs):
#     import os
#     os.system('cls' if os.name == 'nt' else 'clear')
#     storage = ['-' * width] * height
#     x = random.choice(range(0, width))
#     y = random.choice(range(0, height))
#     tmp = list(storage[x])
#     tmp[y] = '#'
#     # storage[x] = str(tmp)
#     storage[x] = "".join(tmp)
#     for row in storage:
#         print(row)
#     time.sleep(0.5)
    
# https://stackoverflow.com/questions/73122319/python-check-if-arrow-key-pressed
# from pynput import keyboard
# from pynput.keyboard import Key

# def on_key_release(key):
#     if key == Key.right:
#         print("Right key clicked")
#     elif key == Key.left:
#         print("Left key clicked")
#     elif key == Key.up:
#         print("Up key clicked")
#     elif key == Key.down:
#         print("Down key clicked")
#     elif key == Key.esc:
#         exit()


# with keyboard.Listener(on_release=on_key_release) as listener:
#     listener.join()

import keyboard
import time

while True:
    if keyboard.is_pressed('left'):
        print('You Pressed left!')
        time.sleep(0.1)
    if keyboard.is_pressed('right'):
        print('You Pressed right!')
        time.sleep(0.1)
    if keyboard.is_pressed('down'):
        print('You Pressed down!')
        time.sleep(0.1)
    if keyboard.is_pressed('up'):
        print('You Pressed up!')
        time.sleep(0.1)