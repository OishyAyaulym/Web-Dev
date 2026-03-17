#problem a
a = int(input())
b = int(input())
for i in range(a,b+1):
    if i%2==0:
        print(i, end=" ")
#problem b
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b+1):
    if i%d==c:
        print(i, end=" ")
#problem c
import math
a = int(input())
b = int(input())
for i in range(a, b+1):
    root = math.isqrt(i)
    if root*root==i:
        print(i, end=" ")
#problem d
x = int(input())
d = int(input())
count = 0
if x==0 and d==0:
    count=1
else:
    while x>0:
        last_digit = x%10
        if last_digit==d:
            count+=1
        x=x//10
print(count)
#problem e
x = int(input())
sum_digits = 0
while x > 0:
    last_digit=x%10
    sum_digits+=last_digit
    x//=10
print(sum_digits)
#problem f
x = int(input())
reversed_x = 0
while x > 0:
    last_digit=x%10
    reversed_x=reversed_x*10+last_digit
    x//=10
print(reversed_x)
#problem g
x = int(input())
for i in range(2,x+1):
    if x%i==0:
        print(i)
        break
#problem h
x = int(input())
for i in range(1, x+1):
    if x%i==0:
        print(i, end=" ")
#problem i
import math
x = int(input())
count = 0
for i in range(1, int(x**0.5)+1):
    if x%i==0:
        if i*i==x:
            count+=1
        else:
            count+=2
print(count)
#problem j
total_sum = 0
for i in range(100):
    num = int(input())
    total_sum+=num
print(total_sum)
#problem k
n = int(input())
total_sum = 0
for _ in range(n):
    total_sum += int(input())
print(total_sum)
#problem l
binary_str = input().strip()
decimal_number = 0
power = 0
for digit in reversed(binary_str):
    if digit=='1':
        decimal_number+=2**power
    power+=1
print(decimal_number)
#problem m
n = int(input())
count_zeros = 0
for _ in range(n):
    num = int(input())
    if num==0:
        count_zeros+=1
print(count_zeros)