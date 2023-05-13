with open("seeded.html", "w") as f:
    string = "<html><head></head><body>"
    for i in range(1000):
        string += "Memes. "
    string += "</body></html>"
    f.write(string)