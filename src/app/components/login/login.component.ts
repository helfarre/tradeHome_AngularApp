import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentils } from 'src/app/models/LoginCredentials.Model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService : AuthService, private router : Router) { }
  private client = new LoginCredentils();  

  ngOnInit(): void {
    if((this.authenticationService.isLoggedIn()) )  
    {  
              this.router.navigate(['/profile']);  
       // this.router.navigate(['/profile' , localStorage.getItem('id')]);  
    }  
    else  
    {  
          this.router.navigate(['/login']);  
    }  
  }
  // create the form object.  
    form = new FormGroup({  
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required)  
  });  
  
  Login(LoginInformation)  
  {  
      this.client.email = this.Email.value;  
      this.client.password = this.Password.value;  

      this.authenticationService.login(this.client).subscribe(  
        response => {  
            let  result = response.body;
            if(parseInt(result) > 0)  
            {  
              let token = response.headers.get("Authorization");
              let refresh = response.headers.get("RefreshToken");  
              console.log("refresh toekn");
              console.log(refresh);
              localStorage.setItem("token" , token);  
              localStorage.setItem("id" , result);
              localStorage.setItem("RefreshToken" , refresh);  
              console.log("User with is : "+response.body+" is connected");
              location.reload();
            }  
            if(parseInt(result) == -1)  
            {  
              alert("please register before login Or Invalid combination of Email and password");  
            }  
        },  
        error => {  
            console.log("Error in authentication");  
        }  
      );  
  }  
  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }  

}
