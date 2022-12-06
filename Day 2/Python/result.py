with open(".\Day 2\Python\data.txt") as f:
    input = f.read().strip().split("\n")


# Part 1
def calculateScore(opp, me):
    if opp == "A":
        if me == "X":
            return 4
        elif me == "Y":
            return 8
        elif me == "Z":
            return 3
    elif opp == "B":
        if me == "X":
            return 1
        elif me == "Y":
            return 5
        elif me == "Z":
            return 9
    elif opp == "C":
        if me == "X":
            return 7
        elif me == "Y":
            return 2
        elif me == "Z":
            return 6



def calculateScore2(opp, me):
    if opp == "A":
        if me == "X":
            return 3
        elif me == "Y":
            return 4
        elif me == "Z":
            return 8
    elif opp == "B":
        if me == "X":
            return 1
        elif me == "Y":
            return 5
        elif me == "Z":
            return 9
    elif opp == "C":
        if me == "X":
            return 2
        elif me == "Y":
            return 6
        elif me == "Z":
            return 7










ans = 0
ans2 = 0
for match in input:
    opp, me = match.split(" ")
    ans += calculateScore(opp, me)
    ans2 += calculateScore2(opp, me)
print(ans)
print(ans2)
