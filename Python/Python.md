```python
# 创建虚拟环境
# python3 -m venv py39					# 会在当前目录下创建py39这个虚拟环境的目录
# source py39/bin/activate				# 激活虚拟环境
# deactivate							# 去活虚拟环境
# pip install package_name				# pip安装package
# pip install package_name==1.3.2		# specify version
# pip install package_name<=1.2			
# pip install -r requirements.txt
# pip freeze							# list all packages
```

```python
format(0.1, '.25f')						# '0.1000000000000000055511151'
format(0.125, '.25f')					# '0.1250000000000000000000000'
(10).__add__(100)						# 110
(0.125).as_integer_ratio()				# (1, 8)
```

```python
# 万物皆对象
# 有些对象不可修改，如整数、浮点数、字符串、布尔值
# 有些对象可修改，如list, set, dict

# 操作符
# Unary Operators
# - / +

# Binary Operators
# + , - , * , / , **
```

```python
s = {1, 2, 3.14, True, 5.1, 1}
s												// {1, 2, 3.14, 5.1}
1 in s											// True
```

```python
expression_1 if condition else expression_2
```

```python
l = [10, 20, 30, 40, 50]
l[0]											// 10
len(l)											// 5
type(l)											// list
list.__len__(l)									// 5
l[2] = True
l = list()										// create empty list
```

```python
# tuple
# 一旦创建后，无法再增加、删除、替换元素（其中的元素可能是可修改的元素）
t = (1, 2, 3, 4)
t = tuple(l)
l = list(t)
```

```python
s = "abcdefg"
type(s)											// str
```

```python
# slice
# list[start:end:step]
l = [1, 2, 3, 4]
l[2:3]

# replace 
l[2:3] = [100, 200]

# delete 
del l[2:3]

# append
l.append(81)
l.extend([100, 121])
# l.insert(index, value)

# shallow copy
l[:]
l.copy()

# deep copy
from copy import deepcopy
my_list = [['a', 'b'], 'c', 'd']
my_copy = deepcopy(my_list)

# unpack sequence
a, b = [10, 20]
c, d = 30, 40
```

```python
ord('A')										// 返回Unicode编码
hex(65)											// 将十进制转为十六进制
print("\N{Greek Small Letter Alpha}")			// α
print("\u03b1")									// α
"\N{snake}"										// 🐍
"\U0001F40D"
# \u后面必须跟四位，\U后面必须跟八位
int('3B1', 16)									// 16进制转10进制
```

```python
# string methods
string = "Hello world!"
string.lower()									# 小写
string.upper()									# 大写
string.title()									# Hello World
string.casefold()								# used for caseless comparisons
string.lstrip()									# remove left whitespace
string.rstrip()									
string.strip()
string.strip(' ')
string.strip('abc')
string.split(", ")

l = ['a', 'b', 'c']
(', ').join(l)

substring in string								# find substring
'python'.startswith('py')						# True
'python'.endswith('py')							# False
data.index(string)								# where string in data, raise ValueError if not exist
data.find(string)								# where string in data, return -1 if not exist
# find只适用于字符串，index适用于所有的sequence 

# string interpolation
open_ = 90
high = 95
low = 80
close_ = 100
'open: {}, high: {}, low: {}, close: {}'.format(open_, high, low, close_)
f'open: {open_}, high: {high}, low: {low}, close: {close_}'

'open: {:4f}, high: {:4f}, low: {:4f}, close: {:4f}'.format(open_, high, low, close_)
f'open: {open_:.4f}, high: {high:.4f}, low: {low:.4f}, close: {close_:.4f}'
```

```python
# range object
range(start, end, step)
r = range(5)
tuple(r)												#(0, 1, 2, 3, 4)
list(r)													#[0, 1, 2, 3, 4]
enumerate												# 把一个iterable中的每个元素转换成带index的tuple
data = [10, 20, -30, 40, 50, 60]
for d in enumerate(data):
    print(d)											#(0, 10)
														#(1, 20)
														#(2, -30)
														#(3, 40)
														#(4, 50)
														#(5, 60)
```

````python
for i in range(1, 10):
    print(i)
    if i % 10 == 0:
        print(f"Break because of a {i}")
        break
else:
    print("all done")
```
1
2
3
4
5
6
7
8
9
all done
```
````

```python
# dictionary
# key must be hashable
# iterate dictionary
d = {
    "first_name":"guo",
    "last_name": "kaige",
    "year_born": 1993
}
for key in d:
    print(key)												#	loop key
for value in d.values():
    print(value)											# 	loop value
for key, value in d.items():
    print(key, value)										#	loop key and value
#	check key in dict
#	key in d
print('first_name' in d)
d.clear()													#	clear all elements
d.copy()													#	shallow copy
len(d)														#	length
#	create new dict
d = {"a": 1, "b": 2}
d = dict(a = 1, b = 2)
d = dict.fromkeys(['key1', 'key2', 'key3'], 0)				#	{'key1': 0, 'key2': 0, 'key3': 0}

#	如果读取字典中一个不存在的key，将会报KeyError,这时需要用get方法
#	d.get(key, defaultValue)	如果不指定defaultValue,则为None

# merge two dict
#	d1.update(d2)
d1 = dict(a = 1, b = 2)
d2 = dict(b = 3, c=4)
d1.update(d2)
d1														#	{'a': 1, 'b': 3, 'c': 4}
```

```python
# set
s = {1, 's', True, 3.14}
s = set([1, 's', True, 3.14])
for key in s:
    print(key)											#	3.14 	1	s
1 in s													#	True
s.clear(0)
s.copy()	
```

```python
#	set methods
s1 = {1, 2, 3}
s2 = {4, 5, 6}
s1.isdisjoint(s2)										# s1和s2是否有交集
s1.add(7)												#	添加元素
s1.remove(1)											#	删除元素（如果删除不存在的元素，KeyError）
s1.discard(10)											#	删除元素（如果元素不存在，不会进行任何操作）
#	s1 < s2												#	True if s1 is a strict subset of s2
#	s1 <= s2											#	True if s1 is a subset of s2
#	s1 > s2												#	True if s1 is a strict superset of s2
#	s1 >= s2											#	True if s1 is a superset of s2

s1 | s2													#	并集
s1 & s2													#	交集
s1 - s2													#	在s1中不在s2中
s2 - s1													#	在s2中不在s1中
```

```python
# comprehension
# [expression for item in iterable]
# [expression1 for item in iterable if expression2]
num = [1, 2, 3, 4, 5]
sqr_num = [item * item for item in num]									#	[1, 4, 9, 16, 25]
sql_num = [item * 10 if item < 3 else item * item for item in num]		#	[10, 20, 9, 16, 25]
sql_num = [item * 10  for item in num if item < 3]						#	[10, 20]

# {key: value for item in iterable}
widgets = ["widget 1", "widget 2", "widget 3", "widget 4"]
sales = [10, 5, 15, 0]
d = {widgets[idx]: sales[idx] for idx in range(4) if sales[idx]}
d														#{'widget 1': 10, 'widget 2': 5, 'widget 3': 15}

# {expression for item in iterable if expression2}
```

```python
# exception
# raise
ex = ValueError('Name must be at least 5 chars')
raise ex

# handle exception
try:
	code block
except Exception as ex:
    handle
finally:
    always execute
    
a, b = 1, 0
dictionary = {}
try:
    result = a / b
    print(result)
    print(dictionary['a'])
except ZeroDivisionError as ex:
    print(f"Divide by zero: {ex}")
except KeyError as ex:
    print(f"Key not found: {ex}")
finally:
    print("This will always execute.")
```

```python
def func(*values)								# 函数接收任意数量参数，存在一个元组（values）中
lambda x, y: x * y
```

```python
# round函数
round(1.8)										#	2
round(-1.8)										#	-2
round(1.5)										# 	2
round(2.5)										#	2
# round(number, exponent)
round(127.1892, 3)								# 127.189
```

```python
# sorted, max, min
l = [1,3,3,5,2]
l2 = sorted(l, reverse=True)
l2												#	[5, 3, 3, 2, 1]
l												#	[1,3,3,5,2]	
max(l)											#	5
min(l)											#	1
min([], default=0)								#	0
```

```python
#	zip function

```









