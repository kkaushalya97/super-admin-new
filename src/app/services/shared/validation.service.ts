import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class ValidationService {


  static phoneNumberValidator(control) {
    return new Promise((resolve) => {
      if (control.value.match(/^[0-9]{10}$/)) {
        resolve(null);
      } else {
        resolve({ invalidPhoneNumber: true });
      }
    });
  }



  static emailValidator(control : AbstractControl) :  ValidationErrors | null  {
    return new Promise((resolve) => {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {       
        resolve(null);
      } else {
        resolve({ invalidEmailAddress: true });
      }
    });
  }

  static passwordValidator(control) {
    return new Promise((resolve) => {
      if (control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%_*#?&])[A-Za-z\d$@$!%_*#?&]{3,}$/)) {
        resolve(null);
      } else {
        resolve({ invalidPassword: true });
      }
    });
  }

  static MatchValidator(matchInput: string) {
    return (AC: AbstractControl) => {
      return new Promise((resolve) => {
        const value = AC.value;
        const confirmValue = AC.parent.get(matchInput).value;
        if (value !== confirmValue) {
          resolve({ notMatch: true });
        } else {
          resolve(null);
        }
      });
    };
  }

  static dateValidator(control : AbstractControl) :  ValidationErrors | null  {
    console.log('no val');
    if(!control.value){
      console.log('no val');
      
      return Validators.required(control)
    }
  }
}
