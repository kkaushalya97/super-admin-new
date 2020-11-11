import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {

  public userId: number;
  public isAddingUser : boolean = false;
  isDataLoaded: boolean;
  registerForm: FormGroup;
  
    
  // public userDetails: Users;
  

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      //firstName: ['', Validators.required],
      //lastName: ['', Validators.required],
      //email: ['', [Validators.required]],
      //password: ['', [Validators.required]]
  });

    this.userId = this.route.snapshot.params.id;
    //console.log(this.userId, ' user id')
    if (this.userId) {
      this.isAddingUser = false;
     
      this.getUserDetails(this.userId)
    } else {
      this.isAddingUser = true;
      this.isDataLoaded = true;
      // this.userDetails = {
      //   achieve: 0,
      //   email: '',
      //   first_name: '',
      //   hue: 1,
      //   id: 1,
      //   is_acc_owner: 1,
      //   last_name: '',
      //   lightness: 1,
      //   schedules: {
      //     default_working_week: 0,
      //     friday_working_hours: 0,
      //     id: 0,
      //     monday_working_hours: 0,
      //     national_calander: '',
      //     saturday_working_hours: 0,
      //     sunday_working_hours: 0,
      //     thursday_working_hours: 0,
      //     tuesday_working_hours: 0,
      //     type: '',
      //     user_id: 0,
      //     wednesday_working_hours: 0
      //   },
      //   user_position: '',
      //   user_role_id: 0,
      //   user_roles: ''

      // }
    }
  }

  getUserDetails(userId) {
    this.isDataLoaded = false;
   
    

    // this.userService.getUserDetails(userId).then(res => {
    //   console.log(res, 'User');
    //   this.userDetails = res.data

    //   const data = res.data

     

  }

  

}
