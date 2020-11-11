import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './../services/shared/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       let returnUrl =  this.router.url;
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            console.log(currentUser, 'currentUser', this.router.url)
            const roles = route.data.roles as Array<string>;
            console.log(roles, 'roles')
            if (roles && roles.length > 0) {
                const userRole = this.authenticationService.getLoggedUserRole();
                const found = roles.filter(a => a === userRole);
                if (found && found.length > 0) {
                    return true;
                } else {
                    this.router.navigate([returnUrl]);
                    return false;
                }
            }
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['login'],  { queryParams: { returnUrl: state.url } });
            return false;
        }

    }
}
