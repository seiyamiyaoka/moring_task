// class定義
// mapしてkeyを追加
// mapして階層が深い構造作成
// filterで比較演算
// filterを分ける
// indexOfでの探索
// reduceの足し算
// 初期値があるreduce
// reduceを使ってArray<obj>の数値計算
// 年齢ごとにgroup
const users = [
  {
    id: 1,
    name: 'tarou1',
    age: 12
  },
  {
    id: 2,
    name: 'tarou2',
    age: 13
  },
  {
    id: 3,
    name: 'tarou3',
    age: 14
  },
  {
    id: 5,
    name: 'tarou1',
    age: 12
  },
  {
    id: 4,
    name: 'tarou4',
    age: 15
  },
]

const newUser = users.map((user) => ({
  ...user,
  nameAge: `${user.name}: ${user.age}`
}))

// console.log(newUser)

const over13ageUsers = users.filter((user) => user.age > 13)

const isBigEnough = (user) => user.age > 13

const separeteFuncUser = users.filter(isBigEnough)
console.log(separeteFuncUser)

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (ary, query) => {
  return ary.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))

const ary1 = [1, 2, 3, 4, 5]

const reducer = (prev, current) => prev + current

console.log(ary1.reduce(reducer))
console.log(ary1.reduce(reducer, 5))


console.log(users.reduce((memo, currentObj) => {
  return memo + currentObj.age
}, 0))

// うまくいかないからまた今度
// const ageGroupCount = users.reduce((memo, currentObj) => {
//   console.log(Object.keys(memo))
//   console.log(String(currentObj.age))
//   if(String(currentObj.age) in Object.keys(memo)) {
//     memo[currentObj.age]++
//   } else {
//     memo[currentObj.age] = 1
//   }
//   return memo
// }, {})

// console.log(ageGroupCount)

//分割代入
const { id, name, age } = users[0]
console.log(id, name, age)

// filterLing
const adultUsers = users.filter(user => user.age > 20)
console.log(adultUsers)

// 若い順にsort
const sortYoungerUsers = users.sort((current, prev) => {
  return current.age - prev.age
})
console.log(sortYoungerUsers)
// 老いている順にsort
const sortOldererUsers = sortYoungerUsers.reverse()
console.log(sortOldererUsers)

const newUsers = country => users.map(user => (
  {
    ...user,
    country
  }
))

console.log(newUsers('japan'))