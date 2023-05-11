from rich import print

data = []
with open("smiley.txt", 'r') as f:
    for line in f:
        # [:-1] because last character in line is '\n'
        data.append([True if int(bit) else False for bit in list(line[:-1])])
for row in data:
    colortxt = ""
    for bit in row:
        if bit:
            inserter = '0'
            colortxt += f"[bold green]{inserter}[/bold green]"
        else:
            # colortxt += "F"
            colortxt += ' '
    print(colortxt)