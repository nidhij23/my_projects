import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {SortingComponent} from './sorting/sorting.component';
import {MailsComponent} from './mails/mails.component';
//import {Screen2Component} from './screen2/screen2.component';

const routes:Routes=[   
    {
        path:'',
        redirectTo: '/home',
        pathMatch:'full'
    },
 {
     path:'sort',
     component:SortingComponent
 },
 {
     path:'mails',
     component:MailsComponent
 },
 
    

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}