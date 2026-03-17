#problem a
n = int(input())
i = 1
while i * i <= n:
    print(i * i)
    i += 1
#problem b
n = int(input())
divisor = 2
while n%divisor!=0:
    divisor+=1
print(divisor)
#problem c
n = int(input())
current_power = 1
while current_power <= n:
    print(current_power, end=" ")
    current_power = current_power * 2
#problem d
n = int(input())
current = 1
while current<n:
    current=current*2
if current==n:
    print("YES")
else:
    print("NO")
#problem e
n = int(input())
current_power = 1
k = 0
while current_power < n:
    current_power *= 2
    k += 1
print(k)