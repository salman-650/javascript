// one class can inherits properties and methods from another.
//base 
class animal{
   constructor(name){
    this.name = name;
   } 
   speak(){
    console.log(`${this.name} make a sound` );
    
   }
}
class Dog extends animal{
    constructor(name, breed){
        super(name); 
        this.breed;//call the parent class constructure
    }
    speak(){
        console.log(`${this.name} barks`);
        
    }

}
const dog=new Dog("rex","german shepeard");
dog.speak();