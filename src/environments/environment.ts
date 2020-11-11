// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    auth: {
    api_base_url : 'http://user.dev.dollarappstore.com'},
    user: {
    api_base_url : 'http://user.dev.dollarappstore.com/api/v1'},
    system: {
    api_base_url : 'http://system.dev.dollarappstore.com/api/v1'},
    timesheet: {
    api_base_url : 'http://timesheet.dev.dollarappstore.com/api/v1'},
    report: {
    api_base_url : 'http://report.dev.dollarappstore.com/api/v1'},
    email: {
    api_base_url : 'http://email.dev.dollarappstore.com/api/v1'},
    x_tenant_code: 'redlabs',
    CLIENT_ID:2,
    CLIENT_SECRET:'GUMgexzAultilmNbjIciK0DqaniXZw1JQze92eEF',
    GRANT_TYPE:'password',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
