let arr = [
  {id: 2, name: '部门1', pid: 1},
  {id: 1, name: '部门2', pid: 0},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

function treeCall(array, pid) {
  const newArr = []
  const copyArray = JSON.parse(JSON.stringify(array))
  for (let i =0; i<array.length; i++){
    const item = array[i]
    if (item.pid === pid){
      newArr.push(item)
      item.children = treeCall(copyArray, item.id)
    }
  }
  return newArr;
}
console.time('tree 递归')
treeCall(arr, 0)
console.timeEnd('tree 递归')

function handleArr(rootId) {
  const result = []
  const map = {}
  for (const item of arr){
    const id = item.id
    const pid = item.pid

    if (!map[id]){
      map[id] = {...item, children: []}
    }else {
      map[id] = {...item, children: map[id]['children']}
    }
    const treeItem = map[id]
    if (pid === rootId){
      result.push(treeItem)
    }else {
      if (!map[pid]){
        map[pid] = {
          children: []
        }
      }
      map[pid].children.push(treeItem)
    }
  }
  return result
}

console.time('tree map')
handleArr(0)
console.timeEnd('tree map')

console.time('for map')
handleArrFor(0)
console.timeEnd('for map')

function handleArrFor(rootId) {
  const finalMapArray = []
  let tempMap = {}
  for (let i= 0;  i < arr.length; i++){
    const item = arr[i]
    if (!tempMap[item.id]){
      tempMap[item.id] = { ...item, children: []}
    }else {
      tempMap[item.id] = {
        ...item,
        children: tempMap[item.id]['children']
      }
    }
    if (item.pid === rootId){
      finalMapArray.push(tempMap[item.id])
    }else {
      if (!tempMap[item.pid]){
        tempMap[item.pid] = {
          children: []
        }
      }
      tempMap[item.pid].children.push(tempMap[item.id])
    }
  }
  return finalMapArray
}

console.time('self tree map')
handleArrayToTree(0)
console.timeEnd('self tree map')
function handleArrayToTree(rootParentId) {
  const finalMapArray = []
  let tempMap = {}
  for (const item of arr){
    if (!tempMap[item.id]){
      tempMap[item.id] = { ...item, children: []}
    }else {
      tempMap[item.id] = {
        ...item,
        children: tempMap[item.id]['children']
      }
    }
    if (item.pid === rootParentId){
      finalMapArray.push(tempMap[item.id])
    }else {
      if (!tempMap[item.pid]){
        tempMap[item.pid] = {
          children: []
        }
      }
      tempMap[item.pid].children.push(tempMap[item.id])
    }
  }
  return finalMapArray
}


/*
* let arr = [
  {id: 2, name: '部门1', pid: 1},
  {id: 1, name: '部门2', pid: 0},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
* */

function selfArrayToTreeReduce(rootId) {
  const result = []
  arr.reduce((acc, item) => {
      if (!acc[item.id]){
        acc[item.id] = {
          ...item,
          children: []
        }
      }else {
        acc[item.id] = {
          ...item,
          children: acc[item.id].children
        }
      }
      if (item.pid === rootId){
        result.push(acc[item.id])
      }else {
        if (!acc[item.pid]){
          acc[item.pid] = {
            children: []
          }
        }
        acc[item.pid].children.push(acc[item.id])
      }
      return acc
  }, {})
  return result
}

console.time('reduce')
selfArrayToTreeReduce(0)
console.timeEnd('reduce')
