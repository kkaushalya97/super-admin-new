import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.scss']
})
export class SuperAdminDashboardComponent implements OnInit {

  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  }

  btnClick= function () {
    this.router.navigate(['/add-tenant']);
};

}
