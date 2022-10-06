export class Book {
    #name : string;
    #rating : number = 1;

    constructor(name: string, rating : number){
        this.#name = name;
        this.setRating(rating);
    }

    public getRating() : number {
        return this.#rating; 
    }
    
    public getName() : string {
        return this.#name; 
    }
    
    public setRating(newrating : number) : void {
        if(newrating >= 1 && newrating <= 10) {
            this.#rating = newrating;
        } else {
            throw 'Az értékelésnek 1 és 10 közötti számnak kell lennie.';
        }
    }
    toString() : void {
        console.log("Könyv neve: "+this.#name+", értékelése: "+this.#rating);
    }

}