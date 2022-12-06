with open(".\Day_6\Python\data.txt") as f:
    input = f.read().strip()

i = 0 
while True:
    s = input[i:(i+4)]
    if len(set(list(s))) == 4:
        print(i + 4)
        break

    i += 1



while True:
    s = input[i:(i+14)]
    if len(set(list(s))) == 14:
        print(i + 14)
        break

    i += 1

