from string import ascii_lowercase, ascii_uppercase

key = ascii_lowercase + ascii_uppercase

with open(".\Day_3\Python\data.txt") as f:
    input = f.read().strip().split("\n")


# Part 1

ans = 0 


for line in input:
    n = len(line)
    q = line[:(n//2)]
    b = line[(n//2):]

    for  i, c in enumerate(key):
        if c in q and c in b:
            ans += key.index(c) + 1
 
print(ans)



# Part 2

answer = 0 

for p in range(0, len(input), 3):
    a = input[p:(p + 3)]

    for p, w in enumerate(key):
        if all([w in z for z in a]):
            answer += key.index(w) + 1

print(answer)