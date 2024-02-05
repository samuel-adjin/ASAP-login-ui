import { Component } from '@angular/core';
import { InputFieldForm, SocialButton } from './login-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  inputFieldArray: InputFieldForm[] = [
    {
      type: "email",
      placeholder: "Email"
    },
    {
      type: "password",
      placeholder: "Password"
    }
  ]

  socialButton: SocialButton[] = [
    {
      title: "continue with Google",
      icon: "/assets/images/google.svg",
      type: "outline"
    },
    {
      title: "continue with facebook",
      icon: "/assets/images/facebook.svg",
      type: "outline"

    },
    {
      title: "continue with Apple",
      icon: "/assets/images/apple.svg",
      type: "solid"

    }
  ]
}


