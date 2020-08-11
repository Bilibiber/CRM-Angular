import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Compare } from '../validators/password-validator';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {


  constructor(private fb: FormBuilder, private authService:AuthService, private toastr : ToastrService) { }

  SignInEmailPattern = "^[a-z0-9_-]{8,15}$";

  SignUpForm  = this.fb.group({
    userName: ['',[Validators.required,Validators.maxLength(20)]],
    email:['',Validators.required],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmPassword :['',[Validators.required]],
    AgreeToterms:[false, Validators.required]
  },{validators: Compare});

  SignInForm = this.fb.group({
    email : ['',Validators.required],
    password : ['',Validators.required]
  });

  ngOnInit(): void {
  }


  SignUpClick(){
    const container =  document.getElementById('container');
    container.classList.add('right-panel-active');
  }

  SignInClick(){
    const container =  document.getElementById('container');
    container.classList.remove('right-panel-active');
  }

  signUpSubmit()
  {
    console.log("ts working");
    this.authService.register(this.SignUpForm.value)
      .subscribe((data:any)=>{
        if (data.Succeeded==true)
        {
          this.toastr.success('User registration successful');
        }
        else{
          this.toastr.error(data.Errors[0]);
        }
      });
  }
  SignInFormSubmit()
  {
    
  }
}
