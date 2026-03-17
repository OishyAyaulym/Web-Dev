#problem a
def min4(a, b, c, d):
    return min(a, b, c, d)
#problem b
def power(a, n):
    res = 1.0
    for i in range(n):
        res = res * a
    return res
input_data = input().split()
a = float(input_data[0])
n = int(input_data[1])
print(power(a, n))
#problem c
def xor(x, y):
    if x != y:
        return True
    else:
        return False
input_data = input().split()
x = bool(int(input_data[0]))
y = bool(int(input_data[1]))
result = xor(x, y)
print(int(result))