import csv

data = []

with open("pd.txt", 'r') as csvfile:
    r = csv.reader(csvfile, delimiter=',')
    posting = {}
    for line in r[1:]:
        posting["biz"] = line[0]
        hands = []
        for hand in line[1:]:
            txt = hand.split(' ')
            n = int(txt[0])
            title = txt[1]
            hands.append({
                "n": n,
                "title": title
            })
        posting["hands"] = hands
    data.append(posting)

print(data)

# with open("perform.html", 'w') as f:
    # 
    # for posting in data:
    #     element = ""
    #     element += "<a href='#'>"
    #     element += posting["biz"]
    #     element += "</a>"
    #     element += " Needs: "
    #     element += 