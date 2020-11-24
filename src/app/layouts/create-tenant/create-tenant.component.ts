import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { TenantService } from 'src/app/services/tenant.service';
import { Tenant } from 'src/app/models/tenant';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {

  public userId: number;
  public isAddingUser : boolean = false;
  public isDataLoaded: boolean = false;
  public tenantId: number;
  public tenantDetails: Tenant;
  public client_id: string;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public tenantService: TenantService,
  ) {}

  ngOnInit(): void {
    this.tenantId = this.route.snapshot.params.id;
    if (this.tenantId) {
      this.isAddingUser = false;
      //this.spinner.show();
      this.getTenantDetails()
    } else {
      this.isDataLoaded = true;
      this.isAddingUser = true;
      

    }
  }

  addTenantForm= this.formBuilder.group({
   // id: ['', Validators.required],
    code: ['', Validators.required],
    report_endpoint: ['', Validators.required],
    client_id: ['', Validators.required],
    client_secret: ['', Validators.required],
    db_host: ['', Validators.required],
    db_name: ['', Validators.required],
    db_port: ['', Validators.required],
    db_username: ['', Validators.required],
    db_password: ['', Validators.required],
    status: ['', Validators.required],
    

  })

  get f() { return this.addTenantForm.controls; }

  addTenant() {
    console.log('Add', this. addTenantForm );
    //this.isDataLoaded = false;
    //this.spinner.show()
    //this.submitted = true;
    if (this. addTenantForm.invalid) {
      console.log(this. addTenantForm.invalid);
      this. addTenantForm.setErrors({
        invalidForm: true
      })
      //this.isDataLoaded = true;
     // this.spinner.hide()
    } else {

    this.tenantService.addTenant(
      {
        
        //id: this. addTenantForm.value.id,
        code: this. addTenantForm.value.code,
        report_endpoint: this.addTenantForm.value.report_endpoint,
        client_id: this.addTenantForm.value. client_id,
        client_secret: this.addTenantForm.value.client_secret,
        db_host: this. addTenantForm.value.db_host,
        db_name: this.addTenantForm.value.db_name,
        db_port: this. addTenantForm.value. db_port,
        db_username: this. addTenantForm.value. db_username,
        db_password: this. addTenantForm.value. db_password,
        status: this. addTenantForm.value.status,
        
      }).then(res => {
        console.log(res, 'After Added');
        //this.spinner.hide();
       // this.router.navigate([`/system/users`]);
      })
    }

  }

  getTenantDetails() {
    //this.isDataLoaded = false
    //this.spinner.show();
  
    console.log(this.tenantId, 'this.tenantId')
    this.tenantService.getTenantDetails(this.tenantId).then(response => {
      this.tenantDetails = response.data;
      console.log(this.tenantDetails, 'tenant details')
      const data = response.data as Tenant;
  
       this.addTenantForm.patchValue({
        id: data.id,
        code: data.code,
        report_endpoint: data.report_endpoint,
        client_id: data.client_id,
        client_secret: data.client_secret,
        db_host: data.db_host,
        db_name: data.db_name,
        db_port: data.db_port,
        db_username: data.db_username,
        db_password: data.db_password,
        status: data.status,
      });
       this.client_id = data.client_id
      // this.isDataLoaded = true
      // this.spinner.hide()
    })
  }

  editTenant() {
    console.log('edit')
  
    if(this.addTenantForm.invalid){
      return;
    }else{
      this.tenantService.editTenant(this.tenantId, {
        id: this.tenantId,
       // id: this. addTenantForm.value.id,
        code: this. addTenantForm.value.code,
        report_endpoint: this.addTenantForm.value.report_endpoint,
        client_id: this.addTenantForm.value. client_id,
        client_secret: this.addTenantForm.value.client_secret,
        db_host: this. addTenantForm.value.db_host,
        db_name: this.addTenantForm.value.db_name,
        db_port: this. addTenantForm.value. db_port,
        db_username: this. addTenantForm.value. db_username,
        db_password: this. addTenantForm.value. db_password,
        status: this. addTenantForm.value.status,
      }).then(res => {
        console.log(res, 'res create')
        this.router.navigate(['/admin-dashboard']);
      })
    }
  }


  
  
}
