import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User.Model';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName = new FormControl(); 
  lastName = new FormControl();

  emailFormControl = new FormGroup({  
    lastName : new FormControl('' , Validators.required), 
    firstName : new FormControl('' , Validators.required), 
    adresse : new FormControl('' , Validators.required) ,
    email : new FormControl('' , Validators.required),
    password: new FormControl('' , Validators.required),
    confirmPassowrd: new FormControl('' , Validators.required),
  }); 

  matcher = new MyErrorStateMatcher();
  
    valider:boolean=true;
 
    
  constructor(private router:Router,private route:ActivatedRoute,private clientService : UserService) { }

  get LastName(){  
    return this.emailFormControl.get('lastName');  
  }  
  get FirstName(){  
    return this.emailFormControl.get('firstName');  
  }  


  
 
  get Email(){  
    return this.emailFormControl.get('email');  
  } 
  

  get Password(){  
    return this.emailFormControl.get('password');  
  } 

  get ConfirmPassword(){  
    return this.emailFormControl.get('confirmPassowrd');  
  } 
  ngOnInit(): void {
  }
validation(){
  if(this.valider){
this.router.navigateByUrl("/newAcc");
  }
}
signup(donnesuser){
  let client =new User();
  client.fname=this.FirstName.value
  client.lname=this.LastName.value;
  client.email=this.Email.value;
  if((this.Password.value)!=(this.ConfirmPassword.value)){
    alert("Password don't match")
  }
  else{
    client.password=this.Password.value;
  let Regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/ ;

  if(!client.email.match(Regex)){
    alert("Please insert a valid email")
  }
  else{
    console.log(client)
  this.clientService.addUser(client).subscribe(res =>{
    if(res == -1 )
      alert ("Email dupliqué, veuillez inserer un autre ");
      else{
      alert ("Client enregistré avec success");
      this.router.navigate(['login']);
    }
  })
}
}
}
}
