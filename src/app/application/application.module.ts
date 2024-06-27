import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SharedModule } from '../shared/shared.module';

import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserSearchComponent } from './user/user-search/user-search.component';

import { NotAuthorizedComponent } from '../core/not-authorized.component';
import { PageNotFoundComponent } from '../core/page-not-found.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ProvinceModule } from './province/province.module';
import { ProvinceService } from './province/province.service';
import { ProvinceRegisterComponent } from './province/province-register/province-register.component';
import { ProvinceSearchComponent } from './province/province-search/province-search.component';

import { GroupModule } from './group/group.module';
import { GroupService } from './group/group.service';
import { GroupRegisterComponent } from './group/group-register/group-register.component';
import { GroupSearchComponent } from './group/group-search/group-search.component';


import { GroupPermissionModule } from './group-permission/group-permission.module';
import { GroupPermissionService } from './group-permission/group-permission.service';
import { GroupPermissionRegisterComponent } from './group-permission/group-permission-register/group-permission-register.component';
import { GroupPermissionSearchComponent } from './group-permission/group-permission-search/group-permission-search.component';


const routesApp: Routes = [
  {
    path: 'app', component: ApplicationComponent,
    children: [

      { path: 'user', component: UserSearchComponent },
      { path: 'user/new', component: UserRegisterComponent },
      { path: 'user/:id', component: UserRegisterComponent },

      { path: 'province', component: ProvinceSearchComponent },
      { path: 'province/new', component: ProvinceRegisterComponent },
      { path: 'province/:id', component: ProvinceRegisterComponent },

      { path: 'group', component: GroupSearchComponent },
      { path: 'group/new', component: GroupRegisterComponent },
      { path: 'group/:id', component: GroupRegisterComponent },

      { path: 'group-permission', component: GroupPermissionSearchComponent },
      { path: 'group-permission/new', component: GroupPermissionRegisterComponent },
      { path: 'group-permission/:id', component: GroupPermissionRegisterComponent },

      { path: 'not-authorized', component: NotAuthorizedComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },


    ]
  },
];


@NgModule({
  declarations: [
    ApplicationComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesApp),
    TooltipModule.forRoot(),
    SharedModule,
    UserModule,
    ProvinceModule,
    GroupModule,
    GroupPermissionModule,
  ],
  exports: [
    ApplicationComponent, RouterModule
  ],
  providers: [
    UserService,
    ProvinceService,
    GroupService,
    GroupPermissionService
  ]
})
export class ApplicationModule { }
