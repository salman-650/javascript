class car{
   constructor(name){
    this.name = name;
   } 
   sound(){
    console.log(`${this.name} make a sound` );
    
   }
}
class bmw extends car{
    constructor(name, model){
        super(name); 
        this.model;//call the parent class constructure
    }
    sound(){
        console.log(`${this.name} fast`);
        
    }

}
const CAR=new car("bmw","sports");
CAR.sound();