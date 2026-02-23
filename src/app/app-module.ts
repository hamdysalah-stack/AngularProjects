import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Server } from './server/server';
import { Header } from './header/header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Core } from './core/core';
import { ServerElement } from './server-element/server-element';
import { CourseCard } from './cousre-card/cousre-card';
import { CourseImage } from './course-image/course-image';
import { BasicHiglight } from './Directives/basic-higlight';
import { Highlight } from './Directives/highlight';
import { Account } from './account/account';
import { NewAccount } from './new-account/new-account';
import { Main } from './main/main';
import { Employee } from './employee/employee';
import { Tdf } from './tdf/tdf';
import { ReactiveFroms } from './reactive-froms/reactive-froms';
import { Pipes } from './pipes/pipes';
import { ShortenPipe } from './pipes/shorten-pipe';
import { FilterPipe } from './pipes/filter-pipe';
import { Http } from './http/http';
import { PostsHttp } from './posts-http/posts-http';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Authinterceptorservices } from './Interceptor/Auth.interceptor.services';
import { AlertComponent } from './alert-component/alert-component';
import { AuthComponent } from './auth-component/auth-component';
import { About } from './about/about';

@NgModule({
  declarations: [
    App,
    Server,
    Header,
    Core,
    ServerElement,
    CourseCard,
    CourseImage,
    BasicHiglight,
    Highlight,
    Account,
    NewAccount,
    Main,
    Employee,
    Tdf,
    ReactiveFroms,
    Pipes,
    ShortenPipe,
    FilterPipe,
    Http,
    PostsHttp,
    AlertComponent,
    AuthComponent,
    About,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // two way binding and template driven Forms;
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Authinterceptorservices,
      multi: true,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}
