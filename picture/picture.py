from rich import print

data = []
with open("smiley.txt", 'r') as f:
    for line in f:
        # [:-1] because last character in line is '\n'
        data.append([True if int(bit) else False for bit in list(line[:-1])])

# Terminal Colored Smiley
# for row in data:
#     colortxt = ""
#     for bit in row:
#         if bit:
#             inserter = '0'
#             colortxt += f"[bold green]{inserter}[/bold green]"
#         else:
#             # colortxt += "F"
#             colortxt += ' '
#     print(colortxt)

from PIL import Image, ImageDraw
w = min([len(row) for row in data])
h = len(data)
cell_size = 5

# Create a blank canvas
img = Image.new(
    "RGBA",
    (w * cell_size, h * cell_size),
    "black"
)
draw = ImageDraw.Draw(img)

fill = (255, 255, 255)
for i, row in enumerate(data):
    for j, col in enumerate(row):
        bit = data[i][j]
        if bit:
            fill = (30, 255, 30)
        else:
            fill = (0, 0, 0)
        # Draw cell
        draw.rectangle(
            (
            [
                (
                    j * cell_size,
                    i * cell_size),
                (
                    (j + 1) * cell_size,
                    (i + 1) * cell_size
                )
            ]
        ),
        fill=fill
        )

img.save("smiley.png")
