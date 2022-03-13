//Basic Types
let id:number = 5
let company : string = 'Nishit'
let isPublished: boolean=true
let x:any='Hello'

let ids:number[] =[1,2,3,4,5]

let arr:any[] = [1,true,'Hello']

//Tuple
let person:[number,string,boolean]=[1,'',true]
//Tuple Array
let employee:[number,string][]

employee=[
    [1,'nishit'],
    [2,'ahuja'],
    [3,'pradeep'],
]

//Union
let pid:string | number = 22
pid='22'

//Enum
enum Direction1{
    Up='Up',
    Down='Down',
    Left='Left',
    Right='Right'
}

//Objects
type User ={
    id:number,
    name:string
}
const user: User = {
    id:1,
    name:'John'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//Function 
function addNum(x:number,y:number) : number{
    return x+y;
}

console.log(addNum(1,2))

function log(message:string|number):void{
    console.log(message)
}

log('hello')

//Interface is a custom type
interface UserInterface{
    readonly id:number,
    name:string,
    age?:number//? makes it optional
}

const user1: UserInterface = {
    id:1,
    name:'John'
}

//type can be used with union and primitives,interfaces cannot be used with primitives
type Point = number|string
const p1:Point = 1

//using function interface
interface MathFunc{
    (x:number,y:number):number
}

const add: MathFunc = (x:number,y:number):number => x + y
const sub: MathFunc = (x:number,y:number):number => x - y


interface PersonInterface{
    id:number,
    name:string,
    register():string
}

//Classes
class Person implements PersonInterface{
    id:number
    name:string
    
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const nishit = new Person(1,'nishit')
const nishu = new Person(2,'nishu')

console.log(nishit.register())
console.log(nishit,nishu)

//Sub class
class Employee extends Person{
    position:string
    
    constructor(id:number, name:string, position:string){
      super(id,name)
      this.position=position
    }
}

const emp=new Employee(3,'Shawn','Developer')

console.log(emp.register())

//Generics
function  getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])

let strArray = getArray<string>(['brad','jon','jill'])

strArray.push('hello')