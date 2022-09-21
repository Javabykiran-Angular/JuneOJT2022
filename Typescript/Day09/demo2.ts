
export class Myclass{
   public id:number;
   private fname:string;
  protected lname:string;

    constructor(id:number,f:string,l:string){
        this.id=id;
        this.fname=f;
        this.lname=l;
    }
    

    dipslay(){
      console.log(`
        ID    ::${this.id}
    First name::${this.fname}
    Last name :: ${this.lname}
      `)
    }

}

// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.dipslay();

export function add(a:number,b:number):number{
  return (a+b)
}

export const pi=3.14;
