#problem a
n = int(input())
numbers = list(map(int, input().split()))
for x in numbers:
    if x % 2 == 0:
        print(x, end=" ")
#problem b
n = int(input())
array = list(map(int, input().split()))
for x in array:
    if x % 2 == 0:
        print(x, end=" ")
#problem c
n = int(input())
array = list(map(int, input().split()))
count = 0
for x in array:
    if x > 0:
        count=count+1
print(count)
#problem d
n = int(input())
array = list(map(int, input().split()))
count = 0
for i in range(1, n):
    if array[i]>array[i-1]:
        count = count+1
print(count)
#problem e
n = int(input())
array = list(map(int, input().split()))
found = False
for i in range(1, n):
    if array[i] * array[i - 1] > 0:
        found = True
        break
if found:
    print("YES")
else:
    print("NO")
#problem f
n = int(input())
array = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if array[i] > array[i - 1] and array[i] > array[i + 1]:
        count = count + 1
print(count)
#problem g
n = int(input())
array = list(map(int, input().split()))
for i in range(n // 2):
    j = n - 1 - i
    array[i], array[j] = array[j], array[i]
for x in array:
    print(x, end=" ")
