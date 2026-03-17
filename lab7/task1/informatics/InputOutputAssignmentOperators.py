#problem a
a = int(input())
b = int(input())
hypotenuse = (a**2 + b**2)**0.5
print(hypotenuse)
#problem b
n = int(input())
next_num = n + 1
prev_num = n - 1
print("The next number for the number", n, "is", str(next_num) + ".")
print("The previous number for the number", n, "is", str(prev_num) + ".")
#problem c
n = int(input())
k = int(input())
apples_per_student = k//n
print(apples_per_student)
#problem d
n = int(input())
k = int(input())
apples_left = k%n
print(apples_left)
#problem e
v = int(input())
t = int(input())
length = 109
position =(v*t)%length
print(position)