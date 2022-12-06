# def addingcalories(lines):
    
#     for data in lines:
#         loads = []
#         foods = map(int, data.split())
#         loads.append(sum(foods))

#     print(loads)
    
#     # return ans

# if __name__ == '__main__':
#     with open(".\Day 1\Python\data.txt") as lines:
#         data2 = lines.read().strip()
#         data = data2.split("\n\n")
#         print(data)
#         print(addingcalories(lines))


with open(".\Day 1\Python\data.txt") as f:
    raw_data = f.read().strip()
    parts = raw_data.split("\n\n")

loads = []
for part in parts:
    foods = map(int, part.split())
    loads.append(sum(foods))
print(max(loads))


#Part 2


# def addingmorecalories(lines):
#     max, max2, max3, count = 0,0,0,0
#     for item in data: 
#         if item == '': 
#             count = 0
#         else:
#             num = int(item)
#             count += num
#         if count > max:
#             max = count
#         elif count > max2:
#             max2 = count
#         elif count > max3:
#             max3 = count  
#     print (max, max2, max3)  
#     return(max + max2 + max3)

# if __name__ == '__main__':
#     with open(".\Day 1\Python\data.txt") as lines:
#         data = [i for i in lines.read().strip().split("\n")]
#         print(addingmorecalories(lines))

with open(".\Day 1\Python\data.txt") as f:
    raw_data = f.read().strip()
    parts = raw_data.split("\n\n")
    
loads = []
for part in parts:
    foods = map(int, part.split())
    loads.append(sum(foods))
print(sum(sorted(loads)[-3:]))
