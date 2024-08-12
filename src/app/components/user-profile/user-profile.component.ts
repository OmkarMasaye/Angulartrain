import { booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../../model/user';
import { HighlightDirective } from '../../directives/highlight.directive';


function formatName(value:String){
  return "Hii "+value
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
   
   @Input({alias:"username"}) name="";
   @Input({transform:booleanAttribute}) isSingle!:boolean;
   @Input({transform:numberAttribute}) salary!:number;

   @Output() myevent= new EventEmitter<User>()
   sendData(){
    this.myevent.emit({name:this.name,newSalary:28000})
  }
  @ViewChild("myheading")heading?:ElementRef
  constructor(){
    console.log("constructor called",this.name)
    console.log("constructor",this.heading?.nativeElement.textContent )

}
  ngAfterViewInit(){
    console.log("ng.AfterViewInit",this.heading?.nativeElement.textContent)
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log("ngOnChnages",changes )  
    console.log("ngOnChnages",this.heading?.nativeElement.textContent )

  }
  ngOnInit(){
    console.log("OnInit called",this.name)
    console.log("Oninit",this.heading?.nativeElement.textContent)
   }

   ngOnDestroy(){
    console.log("Components Destroyed")
   }
}
 