import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/models/tenant';
import { TenantService } from 'src/app/services/tenant.service';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.scss']
})
export class SuperAdminDashboardComponent implements OnInit {


  public tenantList: Tenant[] = [];
  public tenantId: number;
  public isDataLoaded: boolean = false;
  public tenantDetails: Tenant;
 

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public tenantService: TenantService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadTenants();
    
  }

  addTenantForm= this.formBuilder.group({
    id: ['', Validators.required],
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



  btnClick= function () {
    this.router.navigate(['/add-tenant']);
};

loadTenants(){
   
  //let urlParam = "result_count="+this.reusltPerPage;
  this.tenantService.getTenants().then(res => {
    if (res) {
      console.log(res, 'restenant')
      this.tenantList = res.data;
     //this.currentPage = res.data.current_page
     // this.getPagesCount(res.data.last_page)
      
    }
   //this.isDataLoaded = true
   // this.spinner.hide()
   
  });
}

editTenant(id: number) {
  console.log("true");
  this.router.navigate([`/admin-dashboard/edit/${id}`]);
}

setTenantId(id: number) {
  console.log(id, 'TenantID')
  this.tenantId = id
}


deleteTenant() {
  //this.isDataLoaded = false
  //this.spinner.show()
  console.log("delete");
  this.tenantService.deleteTenant(this.tenantId).then(res => {
    if (res) {
      console.log(res, 'res')
      this.loadTenants();
    }
  });
}


}
