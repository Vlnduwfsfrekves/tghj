abstract class House{
    protected door:boolean=false
    protected key:Key
    protected tenants:Person[]=[]
    constructor(key:Key){
        this.key=key
    }
    comeIn(person:Person):void{
        if (this.door){
            this.tenants.push(person)
        }
    }
    abstract openDoor(key:Key):void
}

class MyHouse extends House{
    openDoor(key:Key):void{
        if(this.key.getSignature()===key.getSignature()){
            this.door=true
        }
    }
}

class Key{
    private signature:number
    constructor(){
        this.signature=Math.floor(Math.random()*1000)
    }
    getSignature():number{
        return this.signature
    }
}

class Person{
    private key:Key
    constructor(key:Key){
        this.key=key
    }
    getKey():Key{
        return this.key
    }
}
let key= new Key()
let person=new Person(key)
let house=new MyHouse(key)
house.comeIn(person)
house.openDoor(person.getKey())
house.comeIn(person)