class Key {
  private signature = Math.random();
  getSignature() {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  public tenants: Person[] = [];
  public door = false;

  constructor(private key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("door is open");
    }
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
}

const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);

export {};
