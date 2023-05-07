# https://realpython.com/inner-functions-what-are-they-good-for/
# hotspots.py

import csv
from collections import Counter

def process_hotspots(file):
    def most_common_provider(file_obj):
        hotspots = []
        with file_obj as csv_file:
            content = csv.DictReader(csv_file)

            for row in content:
                hotspots.append(row["Provider"])
        counter = Counter(hotspots)
        # print("COUNTER.MOST_COMMON(1)")
        # print(counter.most_common(1))
        # print("END")
        # # Oh, I see. The argument to .most_common
        # is the top x (plural) not the top xth (place)
        # print("COUNTER.MOST_COMMON(2)")
        # print(counter.most_common(2))
        # print("END")
        print(
            f"There are {len(hotspots)} Wi-Fi hotspots in NYC.\n"
        )
        distinct_spots = len(counter.most_common())
        for i in range(distinct_spots):
            print(
                f"Spot #{i}: "
                f"{counter.most_common(distinct_spots)[i][0]} with "
                f"{counter.most_common(distinct_spots)[i][1]} hotspots."
            )
        # For testing if spot numbers work
        # for i in range(1,5+1):
        #     print(
        #         f"Spot #{i}: "
        #         f"{counter.most_common(1)[0][0]} with "
        #         f"{counter.most_common(1)[0][1]} hotspots."
        #     )

    if isinstance(file, str):
        # Got a string-based filepath
        file_obj = open(file, "r")
        most_common_provider(file_obj)
    else:
        # Got a file object
        most_common_provider(file)

process_hotspots("./NYC_Wi-Fi_Hotspot_Locations.csv")