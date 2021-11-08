let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
//console.log(student)

function save(puan =10,ogrenci) {
    //console.log(ogrenci.name + " : " + puan)
}

save(undefined,student);

let students = ["Engin Demiroğ","Halit Kalaycı",
"Engin Toprak", "Büşra"]

//console.log(students)

let studnet2 = [student,{id:2,name:"Halit"},"Ankara",{city:"istanbul"}]

//console.log(studnet2)

//rest geriye kalanlar
//c# params
//java varArgs

let showProduct = function (id,...prodcut) {
     console.log(id)
     console.log(prodcut[0])
}

//console.log(typeof showProduct)

//showProduct(10,["Elma","Armut","Karpuz"])

//spread ayrıştırmak

let points = [1,2,3,4,50,60,14,4,61]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructing

let population = [10011100,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]] = population
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(population)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)