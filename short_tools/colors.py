# colors = {
#     "purple": '\033[95m',
#     "blue": '\033[96m',
#     "green": '\033[92m',
#     "yellow": '\033[93m',
#     "red": '\033[91m',
#     "bold": '\033[1m',
#     "underline": '\033[4m',
#     "end": '\033[0m'
# }

# bar =""
# bar += f"{colors["bold"]}-----{["colors.end"]}"
# bar += f"{colors["blue"]}----------------{["colors.end"]}"
# bar += f"{colors["red"]}----{colors["end"]}"

# class colors:
#     purple = '\033[95m'
#     BLUE = '\033[96m'
#     green = '\033[92m'
#     yellow ='\033[93m'
#     red = '\033[91m'
#     bold = '\033[1m"
#     underline = '\033[4m'
#     ENDC = '\033[0m'

# bar =""
# bar += f"{colors.bold}-----{colors.ENDC}"
# bar += f"{colors.BLUE}----------------{colors.ENDC}"
# bar += f"{colors.red}---{colors.ENDC}"
# print(bar)

class colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    
print(f"{colors.HEADER}HEADER{colors.ENDC}")
print(f"{colors.OKBLUE}OKBLUE{colors.ENDC}")
print(f"{colors.OKCYAN}OKCYAN{colors.ENDC}")
print(f"{colors.OKGREEN}OKGREEN{colors.ENDC}")
print(f"{colors.WARNING}WARNING{colors.ENDC}")
print(f"{colors.FAIL}FAIL{colors.ENDC}")
print(f"{colors.BOLD}BOLD{colors.ENDC}")
print(f"{colors.UNDERLINE}UNDERLINE{colors.ENDC}")

# bar =""
# bar += f"{colors.BOLD}-----{colors.ENDC}"
# bar += f"{colors.OKCYAN}----------------{colors.ENDC}"
# bar += f"{colors.FAIL}----{colors.ENDC}"
# bar += "\n"
# bar += f"{colors.WARNING}-----{colors.ENDC}"
# bar += f"{colors.FAIL}----------------{colors.ENDC}"
# bar += f"{colors.BOLD}----{colors.ENDC}"
# bar += "\n"
# bar += f"{colors.OKCYAN}-----{colors.ENDC}"
# bar += f"{colors.OKGREEN}----------------{colors.ENDC}"
# bar += f"{colors.WARNING}----{colors.ENDC}"
# bar += "\n"
# print(bar)