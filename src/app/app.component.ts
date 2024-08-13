import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../model/user';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,FormsModule,CommonModule,CountryCodePipe,JokesComponent,AComponent,B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  // name=''
  // age="20"
  // text="Enter your name"
  // phoneno=8988888789
  // onChange(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
  //   this.name = inputElement.value;
  // }
  users=[
    {name:"Omkar",isSingle:true,salary:10000},
    
  ]
  receivedData(e:User){
    console.log(e);
    const userIndex=this.users.findIndex(user=>user.name==e.name)
    this.users[userIndex].salary=e.newSalary;

  }
  clear(){
    this.users=[];
  }
  
}
