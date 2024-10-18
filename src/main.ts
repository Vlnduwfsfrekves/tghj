abstract class Key{
    id:number
    constructor(id:number){
    this.id=id
  }
}

class Person{
  name:string
  constructor(name: string) {
    this.name = name;
  }
}

abstract class House {
  protected door: boolean = false
  protected key: Key;
  protected tenants: Person[] = []
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.name} увійшов у дім.`);
    } else {
      console.log("Двері зачинені. Ви не можете увійти.");
    }
  }
  abstract openDoor(key: Key): void;
}