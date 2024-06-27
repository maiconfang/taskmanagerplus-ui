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

import { StateModule } from './state/state.module';
import { StateService } from './state/state.service';
import { StateRegisterComponent } from './state/state-register/state-register.component';
import { StateSearchComponent } from './state/state-search/state-search.component';

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

      { path: 'state', component: StateSearchComponent },
      { path: 'state/new', component: StateRegisterComponent },
      { path: 'state/:id', component: StateRegisterComponent },

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
    StateModule,
    GroupModule,
    GroupPermissionModule,
  ],
  exports: [
    ApplicationComponent, RouterModule
  ],
  providers: [
    UserService,
    StateService,
    GroupService,
    GroupPermissionService
  ]
})
export class ApplicationModule { }
