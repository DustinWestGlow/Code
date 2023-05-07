message_file = open("message.txt", 'r')
message = message_file.read()
message_file.close()

# 0->4 Message formatting, enciphering, and converting

# 0: Cut up message into string blocks
# https://stackoverflow.com/questions/9475241/split-string-every-nth-character
block_size = 2
blocks = [message[i:i+block_size] for i in range(0, len(message), block_size)]
# https://stackoverflow.com/questions/20309255/how-to-pad-a-string-to-a-fixed-length-with-spaces-in-python

# 1: Pad last block with special character
pad_chr = 'x'
padding = block_size - len(blocks[-1])
blocks[-1] = blocks[-1] + (pad_chr * padding)
# blocks_str = " ".join(blocks)

# 2: Convert blocks to numbers
# account for block sizes greater than 2
bn = []
for i in range(len(blocks)):
    blocks_num = []
    for j in range(len(blocks[i])):
        blocks_num.append(ord(blocks[i][j])-ord('a')+1)
    bn.append(blocks_num)
# below didn't account for block size not equal to 2
# blocks_num = [(ord(c1)-ord('a')+1, ord(c2)-ord('a')+1) for (c1, c2) in blocks]

# 3: Convert numbers to cipher numbers
key = [3, 5, 6, 1]
determinant = key[0]*key[3] - key[1]*key[2]
b_hill = []
for block in bn:
    c1 = (key[0] * block[0] + key[1] * block[1]) % 26
    c2 = (key[2] * block[0] + key[3] * block[1]) % 26
    b_hill.append([c1, c2])

# 4: Convert cipher numbers into Cipher Characters
cipher_chars = []
for block in b_hill:
    c1 = chr(block[0] + ord('a') - 1)
    c2 = chr(block[1] + ord('a') - 1)
    cipher_chars.append([c1, c2])

# https://stackoverflow.com/questions/10080379/what-is-the-best-way-to-iterate-over-multiple-lists-at-once
# 5: write progressive results to observation file
progress = open("ciphering.txt", 'w')
txt = ""
for block in blocks:
    # https://stackoverflow.com/questions/8234445/format-output-string-right-alignment
    txt += "{:<6}".format(block[0] + block[1])
progress.write(txt + "\n")
txt = ""
for nums in bn:
    txt += "{:<6}".format(str(nums[0]) + "," + str(nums[1]))
progress.write(txt + "\n")
txt = ""
for hill_nums in b_hill:
    txt += "{:<6}".format(str(hill_nums[0]) + "," + str(hill_nums[1]))
progress.write(txt + "\n")
txt = ""
for chars in cipher_chars:
    txt += "{:<6}".format(str(chars[0]) + "," + str(chars[1]))
progress.write(txt + "\n")
txt = ""
progress.write("\n")
# https://stackoverflow.com/questions/10880813/typeerror-sequence-item-0-expected-string-int-found
progress.write("key=" + ",".join([str(val) for val in key]) )
progress.write("\n")
progress.write("determinant=" + str(determinant))
progress.close()