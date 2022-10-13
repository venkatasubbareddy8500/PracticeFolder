// // console.log("hi")

// // var x = 10
// // console.log(typeof x)

// // console.log(3=='3')
// // console.log(3==='3')

// // //spread opearator

// // //1. array

// // var arr = ["a",'b',"c"]
// // console.log(arr)

// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])
// // arr.push('3')
// // console.log(arr)

// // //2.Object

// // var obj={
// //     name:"subbareddy",
// //     age:25,
// //     "full name":"zero to hero"
// // }

// // console.log(obj.name)
// // console.log(obj.age)
// // console.log(obj["full name"])

// // obj.hobbies = "cricket"
// // console.log(obj)

// // //expanding String

// // var greeting = "Hello Everyone"
// // var charList = [...greeting]
// // console.log(charList)

// // //combining an array

// // var arr1 = ["subbareddy","Hemanth"]
// // var arr2 = ["brcr","bpdm"]

// // var arr3 = [...arr1,...arr2]

// // console.log(arr3)


// // //adding vaules to an array

// // var arr4 = ["a","b","c","d"]
// // var arr5 = [...arr4,"kmpl"]

// // console.log(arr5)

// // //combining an objects

// // var obj1 = {name:"subbareddy", age:25, Date:"22/09/2022"}
// // 						var obj2 = {name:"hemanth", age:26, next:"hello"}
						
// // 						var obj3 = {...obj1,...obj2}
// // 						console.log(obj3)


// // //shallow copy

// // var arr10 = ['x','y','z']
// // var arr11 = [...arr10]

// // arr11.push('nikhil')
// // console.log(arr10)
// // console.log(arr11)

// // //Nested copy

// // var arrObj = [{name:"bvrsr"},{name:"bvr"}]
// // var arrObj1 = [...arrObj]
// // console.log(arrObj)
// // arrObj1[0].name = "superman"
// // console.log(arrObj1)
// // console.log(arrObj)

// // //Hack Nested Copy
// // var arrObj2 = [{name:"bvrsr"},{name:"bvr"}]
// // var arrObj4 = JSON.parse(JSON.stringify(arrObj2))
// // arrObj4[0].name = "superman"
// // console.log(arrObj4)
// // console.log(arrObj2)


// // //array de structuring

// // let arr13 = ["Amazon","google"]
// // let [company1, company2] = arr13

// // console.log(company1)
// // console.log(company2)

// // let options = {
// //     title:"subbareddy",
// //     age:26,
// //     type:"CRM"
// // }

// // let {title, age, type} = options

// // console.log(title)
// // console.log(age)
// // console.log(type)


// // //String Interpolation

// // var name1 = "subbareddy"
// // var age1 = 26

// // console.log(`my name is ${name1} my age is ${age1}`)

// // var s = 10
// // var t = 20

// // console.log(`the sum of ${s} ${t} is ${s+t}`)

// // //dynamic record ID by using string interpolation

// // var recordid = 167392

// // console.log(`hhtp://salesforce.com/${recordid}`)


// // let subbastr = "Hi this is subbareddy hope everything is good"

// // //includes()

// // let check = subbastr.includes("hopes")
// // console.log(check)

// // //indexOf
// // let index = subbastr.indexOf("doing")
// // let index1 = subbastr.indexOf("subbareddy")
// // console.log(index)
// // console.log(index1)


// // //startsWith

// // console.log(subbastr.startsWith("Hi"))

// // //slice()

// // let newsubbastr = subbastr.slice(0, 8)
// // console.log(newsubbastr)

// // //toLowerCase

// // let w = "MY NAME IS SOMETHING"

// // console.log(w.toLowerCase())

// // //toUpperCase

// // let q = "my name is something"

// // console.log(q.toUpperCase())

// // // trim


// // let searchText = "          salesforce lwc               "
// // console.log(searchText.trim())


// // //Object and JSON operations

// // let obj6 ={

// //     title:"subbareddy",
// //     age:26,
// //     dob:'10/07/1997',
// //     native:"kmpl"
// // }

// // console.log(Object.keys(obj6))

// // console.log(Object.values(obj6))


// // //JSON.stringify

// // let somestr = JSON.stringify(obj6)
// // console.log(somestr)

// // //JSON.parse

// // console.log(JSON.parse(somestr))

// // //Array methods

// let arr = [2,3,4,5,6]
// //map method
// // let newArr = arr.map(function(currentItem,index,array){
// //     console.log(`CurrentItems is ${currentItem} index is ${index}, array ${array}`)
// //     return currentItem*2

// // })

// // console.log(arr)
// // console.log(newArr)


// //filter method

// let filteredValues = arr.filter(function(currentItem,index,array){
//     return currentItem >4
// })

// console.log(filteredValues)


// //every()

// let age = [23,24,35,40,59,19]

// let isAll = age.every(function(currentItem,index,array){
//     return currentItem >=19
// })

// console.log(isAll)

// //some()

// let ageList = [23,24,35,40,59,19]

// let isAllokay = ageList.every(function(currentItem,index,array){
//     return currentItem >24
// })

// console.log(isAllokay)

// //sort()
//  var names = ["subba","bvr","bvrsr"]
//  console.log(names.sort())


//  // sorting of number

//  var points = [12,34,23,49,47]
//  let sortedValues = points.sort(function(a,b){
//     return a-b
//  })

//  console.log(sortedValues)

//  //reduce

//  let number = [12,35,474]

//  let sum = number.reduce(function(total,currentItem){
//     return total+currentItem
//  },0)

//  console.log(sum)

//  //forEach

//  number.forEach(function(currentItem){
//     console.log(currentItem)
//  })


//  //promise

//  function checkIsSuccess(data){
//         return new Promise (function(resolve,reject){
//             if(data==="success"){
//                 return resolve ("successfully executed")
//             } else {
//                 return reject("unsuccessfully executed")
//             }
//         })
//  }

//  checkIsSuccess('success').then(function(result){
//     console.log(result)
//  }).catch(function(error){
//     console.error(error)
//  })


// import minus, {PI, add} from './Utils'

// console.log(PI)
// console.log(add(2,4))
// console.log(minus(5,2))

// let element = document.querySelector('div')
// console.log(element)
// element.style.color = 'red'

// let element1 = document.querySelectorAll('div')
// Array.from(element1).forEach(function(item){
//     item.style.color = 'green'
// })

// console.log(element1)

// function firstFunction(){
//     console.log("subbareddy")
// }


// let btn = document.querySelector("button")

// btn.addEventListener("click", firstFunction)


// document.addEventListener("mousemove", handler)

// function handler(){
//     document.querySelector(".demo").innerHTML = Math.random()
// }

// function removeHandler(){
//     document.removeEventListener("mousemove", handler)
// }

// document.addEventListener("Hello", function(data){
//     console.log("hello has called and send ", data.detail)
// })
// function callCustomMethod(){

//     let event = new CustomEvent("Hello",{
//         detail:{name:"Nikhil"}
//     })
//     document.dispatchEvent(event)
// }

//Arrow Function

// function abc(){
//     console.log("hello")
// }
// abc()

// const abc =()=>console.log("hello")
// abc()

// function sum(data){
//     let sum = data+10
//     return sum 
// }
// console.log(sum(6))

// const sum=(data)=>{
//     let sum = data+10
//     return sum
// }

// console.log(sum(9))

//setTimeout

let timerID = window.setTimeout(function(){
    console.log("hello subbareddy")
},2000)

console.log(timerID)
clearTimeout(timerID)

//setInterval

let intervalId = window.setInterval(function(){
    console.log("hello")
},1000)
clearInterval(intervalId)

