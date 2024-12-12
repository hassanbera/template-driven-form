import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  user={
    name:'',
    email:'',
    password:'',
    
  };

onSubmit(){
  console.log('Form Gönderildi, this.user')
}
}
