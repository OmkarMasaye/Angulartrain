import { computed, effect, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  

  private count =signal(0);
  doubleCount:Signal<number>=computed(()=>this.count()*2)

  getCount():number{
    return this.count()
  }
  constructor() { 
    effect(() => {
      console.log(`The count is: ${this.count()} and the DoubleCount is :${this.doubleCount}`);
    });
  }
  incrementCount(){
    this.count.update((oldvalue)=>{
     return oldvalue+1
    })
  }
  resetCounter(){
    this.count.set(0)
  }
}
