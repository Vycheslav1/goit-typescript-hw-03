class Key{
    private signature=Math.random();
    getSignature(){
        return this.signature;
    };
}
class Person{
    
    constructor(private key:number){
       this.key=key;
    }
    getKey(){
        return this.key;
    }
}

abstract class House
{
public tenants:string[]=[];
public door=true;
private key=new Key().getSignature();

constructor(key:number){
    this.key=key;
}
comeIn(person:object){
   if(this.door){
 tenants:[...this.tenants,person];
   } 
}
OpenDoor(key:number){
     if(key===this.key){
    console.log("door is open");
   }
}
}
class MyHouse extends House{
   constructor(key:number){
    super(key);
    this.OpenDoor(key);
    }
  
   
}


const key = new Key();

const person = new Person(key.getSignature());

const house = new MyHouse(person.getKey());

house.comeIn(person);


export {};