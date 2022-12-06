with open(".\Day_4\Python\data.txt") as f:
    input = f.read().strip().split("\n")



ans = 0

for line in input:
    section1, section2 = line.split(",")
    section1a, section1b = map(int, section1.split('-'))
    section2a, section2b = map(int, section2.split('-'))
    if (section2a >= section1a and section2b <= section1b) or (section1a >= section2a and section1b <= section2b):
        ans += 1

print (ans)



# Part 2

answer = 0

for lines in input:
    sect1, sect2 = lines.split(",")
    sect1a, sect1b = map(int, section1.split('-'))
    sect2a, sect2b = map(int, section2.split('-'))

    if (not(sect1a > sect2b or sect2a > sect1b)):
        answer +=1
print(answer)