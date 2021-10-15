def add_one(ary):
  if ary == [9]:
    return [1, 0]
  elif ary[-1] < 9:
    ary[-1] += 1
  else:
    return add_one(ary[:-1]) + [0]
  return ary

print(add_one([1,9,9,9]))
print(add_one([1]))

def add_one_basic(ary):
  borrow = 1

  for i in range(len(ary), 0, -1):
    digit = borrow + ary[i - 1]

    borrow = digit // 10

    if borrow == 0:
      ary[i - 1] = digit
      break
    else:
      ary[i - 1] = digit % 10
  ary = [borrow] + ary

  position = 0

  while ary[position] == 0:
    position += 1
  return ary[position:]

print(add_one_basic([1,9,9,9]))
print(add_one_basic([1]))