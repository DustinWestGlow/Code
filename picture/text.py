# Display letter bank into terminal one by one
# for letter, data in letters.items():
#     print(letter.upper())
#     for row in data:
#         print(''.join(['.' if bit else ' ' for bit in row]))
# for data in big_matrix:
#     for row in data:
#         print(''.join(['.' if bit else ' ' for bit in row]))
# w = font_dimension + 2
# h = len(text) * (font_dimension + 2)

font_dimension = 5
letters = {}
with open("letters.txt", 'r') as f:
    scroller = 0
    data = []
    for line in f:
        # if on denomination line
        if scroller == 0:
            letter = line[0]
        # else if line is loading letter art
        else:
            data.append([True if bit == '.' else False for bit in line[:-1]])
        if scroller == font_dimension:
            letters[letter] = data
            data = []
        scroller = (scroller + 1) % (font_dimension + 1)
# text is letters to be transformed into image
# text = "a b"

# text = "This is Dustin West's admission to the Apostle's Creed, and Jesus is Risen!"
# text = "Have a happy day, says Diana West"
# text = "The Apostles Creed!"
# this text_to_matrix is just a list of matrices
# one for each letter in the text
text = "Risen!"
text_to_matrix = []
for c in text:
    char = ''
    if c.lower() in letters.keys():
        char = c.lower()
    else:
        char = ' '
    text_to_matrix.append(letters[char])
# width of each character multiplied by amount of them
w = len(text) * font_dimension
# add left border
w += 1
# add right border * amount of characters
w += len(text)
# height is top border + height of characters + bottom border
# obviously all characters here are on the same line
h = 1 + font_dimension + 1

from PIL import Image, ImageDraw
# 50px by 50px for each bit
cell_size = 4
# Create a blank canvas
img = Image.new(
    "RGBA",
    (w * cell_size, h * cell_size),
    "white"
)
# big matrix here is the entire image in true/false values
# Including bordering!
combined = []
combined.append([False] * w)
print(letter)
for line in range(font_dimension):
    row = [False]
    for letter in text_to_matrix:
        row += letter[line]
        row += [False]
    combined.append(row)
combined.append([False] * w)

draw = ImageDraw.Draw(img)
fill = (255, 255, 255)
for i, row in enumerate(combined):
    for j, col in enumerate(row):
        bit = combined[i][j]
        if bit:
            fill = (50, 255, 30)
        else:
            fill = (0, 0, 0)
        xs = j * cell_size
        ys = i * cell_size
        xf = xs + cell_size
        yf = ys + cell_size
        draw.rectangle( [(xs,ys) , (xf,yf)] , fill=fill )

img.save("text.png")